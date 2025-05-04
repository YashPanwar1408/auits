
import React, { useState, useEffect } from "react";
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
import { SignInButton } from "@clerk/clerk-react";
import { Loader2, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
        <SignInButton mode="modal">
          {({ isLoaded, onClick }) => (
            <Button
              className="w-full"
              variant="outline"
              onClick={onClick}
              disabled={!isLoaded || isLoading}
            >
              {!isLoaded || isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" /> Sign in with Clerk
                </>
              )}
            </Button>
          )}
        </SignInButton>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-muted-foreground text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  );
};
