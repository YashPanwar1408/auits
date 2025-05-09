import React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Moon,
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  HelpCircle, 
  Settings,
  User,
  LogOut
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut, profile } = useAuth();
  const { toast } = useToast();

  React.useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const navigationItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Support Tickets", path: "/tickets", icon: MessageSquare },
    { name: "Knowledge Base", path: "/knowledge", icon: FileText },
    { name: "Billing", path: "/billing", icon: CreditCard },
    { name: "Help", path: "/help", icon: HelpCircle },
    { name: "User Dashboard", path: "/user", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const getInitials = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(' ').map((n: string) => n[0]).join('').toUpperCase();
    }
    if (profile && (profile.first_name || profile.last_name)) {
      return `${profile.first_name?.[0] || ''}${profile.last_name?.[0] || ''}`.toUpperCase();
    }
    return user?.email?.substring(0, 2).toUpperCase() || "U";
  };

  const getDisplayName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    if (profile && (profile.first_name || profile.last_name)) {
      return `${profile.first_name || ''} ${profile.last_name || ''}`.trim();
    }
    return user?.email?.split('@')[0] || "User";
  };

  const AppSidebar = () => (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-6">
        <div className="flex items-center gap-2 px-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <img
              src="/lovable-uploads/43bdef48-c3ad-42fe-8ae5-fd7f4e37c15a.png"
              alt="AUITS Logo"
              className="h-6 w-6"
            />
          </div>
          <h1 className="font-bold text-xl text-white">AUITS Connect</h1>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <div className="flex flex-col gap-2 px-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <NavLink 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </SidebarContent>
      
      <SidebarFooter className="px-4 py-4">
        <Separator className="mb-4 bg-white/20" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user?.user_metadata?.avatar_url || profile?.avatar_url} alt="User" />
              <AvatarFallback className="bg-sidebar-accent text-white">{getInitials()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-white font-medium">{getDisplayName()}</p>
              <p className="text-xs text-white/70">{user?.email}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-sidebar-accent"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h2 className="text-lg font-semibold hidden sm:block">
                {navigationItems.find(item => item.path === location.pathname)?.name || "AUITS Connect"}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              
              {!isMobile && (
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user?.user_metadata?.avatar_url || profile?.avatar_url} alt="User" />
                    <AvatarFallback className="bg-primary text-white">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">{getDisplayName()}</p>
                    <p className="text-xs text-muted-foreground">Customer</p>
                  </div>
                </div>
              )}
            </div>
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
