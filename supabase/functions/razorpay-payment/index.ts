
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID");
    const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET");

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      throw new Error("Missing Razorpay API keys");
    }

    // Create auth header for Razorpay API
    const authHeader = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);

    const { action, data } = await req.json();

    if (action === "create_order") {
      // Create a new Razorpay order
      const response = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${authHeader}`,
        },
        body: JSON.stringify({
          amount: data.amount * 100, // Convert to paise
          currency: data.currency,
          receipt: `receipt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
          notes: {
            purpose: data.payment_purpose || "System Maintenance",
          },
        }),
      });

      const result = await response.json();
      console.log("Razorpay order created:", result);

      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: response.status,
      });
    } else if (action === "verify_payment") {
      // Verify Razorpay payment signature
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = data;
      
      // Build a string using the order_id and payment_id
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      
      // Import the crypto module to verify the signature
      const { createHmac } = await import("https://deno.land/std@0.177.0/node/crypto.ts");
      
      // Generate a signature using HMAC-SHA256
      const expectedSignature = createHmac("sha256", RAZORPAY_KEY_SECRET)
        .update(body)
        .digest("hex");
      
      // Compare signatures
      const isValid = expectedSignature === razorpay_signature;
      
      console.log("Payment verification:", isValid ? "Success" : "Failed");
      
      return new Response(
        JSON.stringify({
          valid: isValid,
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );

  } catch (error) {
    console.error("Razorpay API error:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
