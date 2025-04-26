
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

export const PaymentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);
      
      toast({
        title: "Payment successful!",
        description: "Your payment has been processed successfully.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setPaymentSuccess(false);
      }, 3000);
    }, 2000);
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
          Enter your card details to make a secure payment
        </CardDescription>
      </CardHeader>
      <form onSubmit={handlePayment}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Cardholder Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="card">Card Number</Label>
            <div className="relative">
              <Input 
                id="card" 
                placeholder="4242 4242 4242 4242" 
                required
                maxLength={19}
                // Format card number with spaces
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  let value = target.value.replace(/\D/g, '');
                  if (value.length > 0) {
                    value = value.match(/.{1,4}/g)?.join(' ') || '';
                  }
                  target.value = value;
                }}
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input 
                id="expiry" 
                placeholder="MM/YY" 
                required
                maxLength={5}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  let value = target.value.replace(/\D/g, '');
                  if (value.length > 2) {
                    value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                  }
                  target.value = value;
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input 
                id="cvc" 
                placeholder="123" 
                required 
                maxLength={3}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/\D/g, '');
                }}
              />
            </div>
          </div>
          
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
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                $
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Select defaultValue="usd">
                  <SelectTrigger className="w-[80px] h-8 border-0 bg-transparent">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pl-6">
                <Input 
                  id="amount" 
                  placeholder="100.00" 
                  required
                  type="number"
                  step="0.01"
                  min="1"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="purpose">Payment Purpose</Label>
            <Select defaultValue="maintenance">
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
