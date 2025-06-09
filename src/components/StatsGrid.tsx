
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Clock, DollarSign } from "lucide-react";

const StatsGrid = () => {
  const stats = [
    {
      label: "Workflows Processed",
      value: "2,847",
      change: "+12.5%",
      icon: Zap,
      gradient: "gradient-primary",
      glow: "glow-primary"
    },
    {
      label: "Time Saved",
      value: "145hrs",
      change: "+8.2%",
      icon: Clock,
      gradient: "gradient-secondary",
      glow: "glow-secondary"
    },
    {
      label: "Success Rate",
      value: "98.4%",
      change: "+2.1%",
      icon: TrendingUp,
      gradient: "gradient-accent",
      glow: "glow-accent"
    },
    {
      label: "Cost Savings",
      value: "$12,450",
      change: "+15.7%",
      icon: DollarSign,
      gradient: "gradient-primary",
      glow: "glow-primary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className={`
            neumorphic border-border/50 hover:scale-105 transition-all duration-300 cursor-pointer
            hover:${stat.glow} group
          `}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.gradient} group-hover:animate-float`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-green-400 font-semibold bg-green-400/20 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            
            <div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsGrid;
