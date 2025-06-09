
import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import WorkflowTile from "@/components/WorkflowTile";
import OutputPreview from "@/components/OutputPreview";
import StatsGrid from "@/components/StatsGrid";
import { FileText, Users, Calendar, Image, MessageSquare, Settings } from "lucide-react";

const Index = () => {
  const [activeWorkflows, setActiveWorkflows] = useState<string[]>([]);

  const workflows = [
    {
      id: "doc-summarizer",
      title: "Document Summarizer",
      description: "Transform lengthy documents into concise, actionable summaries using advanced AI comprehension.",
      icon: FileText,
      isPro: false,
      gradient: "gradient-primary",
      glowColor: "hover:glow-primary"
    },
    {
      id: "resume-screener",
      title: "Resume Screener",
      description: "Automatically evaluate and rank candidates based on customizable criteria and job requirements.",
      icon: Users,
      isPro: true,
      gradient: "gradient-secondary",
      glowColor: "hover:glow-secondary"
    },
    {
      id: "meeting-extractor",
      title: "Meeting Task Extractor",
      description: "Extract action items, decisions, and key insights from meeting transcripts and recordings.",
      icon: Calendar,
      isPro: false,
      gradient: "gradient-accent",
      glowColor: "hover:glow-accent"
    },
    {
      id: "image-analyzer",
      title: "Image Content Analyzer",
      description: "Analyze images for content, text extraction, and visual element identification with AI precision.",
      icon: Image,
      isPro: true,
      gradient: "gradient-primary",
      glowColor: "hover:glow-primary"
    },
    {
      id: "sentiment-analyzer",
      title: "Sentiment Analyzer",
      description: "Analyze customer feedback, reviews, and communications for sentiment and emotional insights.",
      icon: MessageSquare,
      isPro: false,
      gradient: "gradient-secondary",
      glowColor: "hover:glow-secondary"
    },
    {
      id: "process-optimizer",
      title: "Process Optimizer",
      description: "Identify bottlenecks and suggest improvements for business processes using AI analysis.",
      icon: Settings,
      isPro: true,
      gradient: "gradient-accent",
      glowColor: "hover:glow-accent"
    }
  ];

  const toggleWorkflow = (workflowId: string) => {
    setActiveWorkflows(prev => 
      prev.includes(workflowId) 
        ? prev.filter(id => id !== workflowId)
        : [...prev, workflowId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back, 
            <span className="ml-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex
            </span>
          </h2>
          <p className="text-muted-foreground">
            Your AI automation platform is ready to streamline your workflows
          </p>
        </div>

        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3" />
                AI Workflow Modules
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflows.map((workflow) => (
                <WorkflowTile
                  key={workflow.id}
                  title={workflow.title}
                  description={workflow.description}
                  icon={workflow.icon}
                  isActive={activeWorkflows.includes(workflow.id)}
                  isPro={workflow.isPro}
                  gradient={workflow.gradient}
                  glowColor={workflow.glowColor}
                  onClick={() => toggleWorkflow(workflow.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-teal-400 rounded-full mr-3" />
                Live Output
              </h3>
            </div>
            <OutputPreview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
