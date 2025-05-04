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
import { Loader2, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signInWithGoogle, isAuthenticated } = useAuth();

  useEffect(() => {
    // Redirect authenticated users to dashboard
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-[#18182f] via-[#23233a] to-[#18182f] border border-purple-500/20 shadow-xl text-white backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-white">Account Login</CardTitle>
        <CardDescription className="text-white/70">
          Sign in to access your solar system dashboard and support
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          className="w-full bg-white/10 text-white border border-white/10 hover:bg-purple-500/30 hover:text-white"
          variant="outline"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" /> Sign in with Google
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-white/50 text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  );
};
