
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, CheckCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [amount, setAmount] = useState("100.00");
  const [currency, setCurrency] = useState("inr");
  const [purpose, setPurpose] = useState("maintenance");
  const { toast } = useToast();
  const { user } = useAuth();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = async () => {
    try {
      const response = await fetch(
        "https://zbbvmrwcwocovbetiofq.supabase.co/functions/v1/razorpay-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabase.auth.getSession().then(({ data }) => data.session?.access_token)}`,
          },
          body: JSON.stringify({
            action: "create_order",
            data: {
              amount: parseFloat(amount),
              currency: currency,
              payment_purpose: purpose,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create order");
      }

      return await response.json();
    } catch (error: any) {
      console.error("Order creation error:", error);
      throw new Error(error.message || "Error creating payment order");
    }
  };

  const verifyPayment = async (paymentData: any) => {
    try {
      const response = await fetch(
        "https://zbbvmrwcwocovbetiofq.supabase.co/functions/v1/razorpay-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabase.auth.getSession().then(({ data }) => data.session?.access_token)}`,
          },
          body: JSON.stringify({
            action: "verify_payment",
            data: paymentData,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Payment verification failed");
      }

      return await response.json();
    } catch (error: any) {
      console.error("Payment verification error:", error);
      throw new Error(error.message || "Error verifying payment");
    }
  };

  const savePaymentToDatabase = async (paymentData: any, verified: boolean) => {
    try {
      const { data, error } = await supabase.from("payments").insert([
        {
          user_id: user?.id,
          amount: parseFloat(amount),
          currency: currency,
          payment_purpose: purpose,
          razorpay_payment_id: paymentData.razorpay_payment_id,
          razorpay_order_id: paymentData.razorpay_order_id,
          razorpay_signature: paymentData.razorpay_signature,
          status: verified ? "completed" : "failed",
        },
      ]);

      if (error) {
        console.error("Payment save error:", error);
        throw new Error("Failed to save payment information");
      }

      return data;
    } catch (error: any) {
      console.error("Database save error:", error);
      throw new Error(error.message || "Error saving payment");
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Load Razorpay script dynamically
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      // Create order
      const orderData = await createRazorpayOrder();
      const options = {
        key: "rzp_test_XsaFr0VmwS1kajL", // Your Razorpay Key ID
        amount: orderData.amount,
        currency: orderData.currency,
        name: "AUITS Connect",
        description: `Payment for ${purpose}`,
        order_id: orderData.id,
        handler: async (response: any) => {
          try {
            const verificationResult = await verifyPayment(response);
            
            if (verificationResult.valid) {
              await savePaymentToDatabase(response, true);
              setPaymentSuccess(true);
              toast({
                title: "Payment Successful",
                description: "Your payment has been processed successfully.",
              });
            } else {
              await savePaymentToDatabase(response, false);
              toast({
                title: "Payment Failed",
                description: "Payment signature verification failed.",
                variant: "destructive",
              });
            }
          } catch (error: any) {
            console.error("Payment process error:", error);
            toast({
              title: "Payment Error",
              description: error.message || "An error occurred during payment processing",
              variant: "destructive",
            });
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name: user?.user_metadata?.full_name || "John Doe",
          email: user?.email || "customer@example.com",
        },
        theme: {
          color: "#7C3AED",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Payment initialization error:", error);
      toast({
        title: "Payment Error",
        description: error.message || "Failed to initialize payment",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  if (paymentSuccess) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 flex flex-col items-center justify-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
          <p className="text-center text-muted-foreground mb-4">
            Your payment has been processed successfully. A receipt has been sent to your email.
          </p>
          <Button 
            className="w-full" 
            onClick={() => setPaymentSuccess(false)}
          >
            Make Another Payment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
        <CardDescription>
          Enter your payment details to make a secure payment
        </CardDescription>
      </CardHeader>
      <form onSubmit={handlePayment}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <Input 
                id="amount" 
                placeholder="100.00" 
                required
                type="number"
                step="0.01"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                $
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="w-[80px] h-8 border-0 bg-transparent">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inr">INR</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="purpose">Payment Purpose</Label>
            <Select value={purpose} onValueChange={setPurpose}>
              <SelectTrigger>
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maintenance">System Maintenance</SelectItem>
                <SelectItem value="upgrade">System Upgrade</SelectItem>
                <SelectItem value="repair">Repair Service</SelectItem>
                <SelectItem value="installation">New Installation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" /> Pay Now
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
