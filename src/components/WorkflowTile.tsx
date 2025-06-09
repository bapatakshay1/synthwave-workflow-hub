
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface WorkflowTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  isPro?: boolean;
  gradient: string;
  glowColor: string;
  onClick: () => void;
}

const WorkflowTile = ({ 
  title, 
  description, 
  icon: Icon, 
  isActive, 
  isPro = false,
  gradient,
  glowColor,
  onClick 
}: WorkflowTileProps) => {
  return (
    <div 
      className={`
        group relative p-6 rounded-xl border border-border/50 transition-all duration-300 cursor-pointer
        hover:scale-105 hover:border-primary/50 hover:shadow-2xl
        ${isActive ? 'neumorphic' : 'neumorphic-inset'}
        ${glowColor}
        shimmer-effect
      `}
      onClick={onClick}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${gradient} group-hover:animate-float`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {isPro && (
            <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">
              PRO
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
            <span className="text-xs text-muted-foreground">
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
          
          <Button 
            size="sm" 
            className={`
              transition-all duration-300 
              ${isActive 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'gradient-primary hover:shadow-lg hover:scale-105'
              }
            `}
          >
            {isActive ? 'Deactivate' : 'Activate'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTile;
