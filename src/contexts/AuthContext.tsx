
import React, { createContext, useContext } from "react";
import { useUser, useAuth as useClerkAuth, SignInButton, SignOutButton } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: any | null;
  profile: any | null;
  signInWithGoogle: () => void;
  signOut: () => void;
  loading: boolean;
  isAuthenticated: boolean;
  session: any | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoaded: clerkLoaded, isSignedIn, user } = useUser();
  const { signOut: clerkSignOut } = useClerkAuth();
  const { toast } = useToast();

  // Simulate profile data structure from the previous implementation
  const profile = user ? {
    id: user.id,
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.primaryEmailAddress?.emailAddress,
    avatar_url: user.imageUrl,
  } : null;

  async function signInWithGoogle() {
    // With Clerk, this is handled by the SignInButton component
    // This function remains for compatibility with existing code
    toast({
      title: "Authentication",
      description: "Please use the sign-in button on the login page",
    });
  }

  async function signOut() {
    try {
      await clerkSignOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
      });
    } catch (error: any) {
      toast({
        title: "Logout Error",
        description: error.message || "An error occurred during logout",
        variant: "destructive",
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        session: isSignedIn ? { user } : null, // Mock session object for compatibility
        user: isSignedIn ? user : null,
        profile,
        signInWithGoogle,
        signOut,
        loading: !clerkLoaded,
        isAuthenticated: !!isSignedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
