
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SignIn } from "@clerk/clerk-react";
import { useAuth } from "@/contexts/AuthContext";

export const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Redirect authenticated users to dashboard
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Account Login</CardTitle>
        <CardDescription>
          Sign in to access your solar system dashboard and support
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignIn
          routing="path"
          path="/login"
          signInUrl="/login"
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-primary hover:bg-primary/90 text-primary-foreground",
              card: "w-full shadow-none border-0 p-0",
            }
          }}
        />
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-muted-foreground text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  );
};
