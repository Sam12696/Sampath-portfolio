
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add page title
    document.title = "404 - Page Not Found";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute top-20 -right-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="glass-card p-12 max-w-md mx-auto text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="primary-button inline-flex items-center gap-2"
        >
          <ChevronLeft size={16} />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
