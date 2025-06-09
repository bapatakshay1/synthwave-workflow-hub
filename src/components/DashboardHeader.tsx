
import { User, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-lg animate-pulse-glow">
          AI
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AutoFlow AI
          </h1>
          <p className="text-sm text-muted-foreground">Intelligent Automation Platform</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="hover:glow-primary transition-all duration-300">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:glow-primary transition-all duration-300">
          <Settings className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium">Alex Chen</p>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Pro Plan
            </p>
          </div>
          <Avatar className="ring-2 ring-primary/30">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=64&h=64&fit=crop&crop=face" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
