
import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Loader2, Github, Mail } from "lucide-react";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome to AUITS Connect Portal",
      });
      navigate("/dashboard");
    }, 1500);
  };

  const handleOAuthLogin = (provider: string) => {
    setIsLoading(true);
    
    // In a real app, this would redirect to OAuth provider
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: `You have successfully logged in with ${provider}`,
      });
      navigate("/dashboard");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful",
        description: "Your account has been created. Welcome to AUITS Connect!",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Tabs defaultValue="login" className="w-full max-w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Account Login</CardTitle>
            <CardDescription>
              Sign in to access your solar system dashboard and support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" type="button" disabled={isLoading} onClick={() => handleOAuthLogin("Google")}>
                <Mail className="mr-2 h-4 w-4" /> Google
              </Button>
              <Button variant="outline" type="button" disabled={isLoading} onClick={() => handleOAuthLogin("GitHub")}>
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="link" className="px-0 text-xs" onClick={() => toast({ title: "Password reset", description: "Check your email for reset instructions" })}>
              Forgot your password?
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Join AUITS Connect to monitor your solar system and get support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account
                  </>
                ) : (
                  "Create account"
                )}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" type="button" disabled={isLoading} onClick={() => handleOAuthLogin("Google")}>
                <Mail className="mr-2 h-4 w-4" /> Google
              </Button>
              <Button variant="outline" type="button" disabled={isLoading} onClick={() => handleOAuthLogin("GitHub")}>
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center text-center text-xs text-muted-foreground">
            <p>By creating an account, you agree to our</p>
            <div className="flex gap-1">
              <Button variant="link" className="h-auto p-0 text-xs">Terms of Service</Button>
              <span>and</span>
              <Button variant="link" className="h-auto p-0 text-xs">Privacy Policy</Button>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
