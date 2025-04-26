
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Frown, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-muted">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Frown className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="pt-4">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
