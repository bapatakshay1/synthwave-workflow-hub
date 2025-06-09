
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

const OutputPreview = () => {
  const recentOutputs = [
    {
      id: 1,
      workflow: "Document Summarizer",
      status: "completed",
      timestamp: "2 min ago",
      preview: "Successfully summarized 15-page research paper on AI ethics...",
      type: "summary"
    },
    {
      id: 2,
      workflow: "Resume Screener",
      status: "processing",
      timestamp: "5 min ago",
      preview: "Analyzing candidate profile for Software Engineer position...",
      type: "analysis"
    },
    {
      id: 3,
      workflow: "Meeting Extractor",
      status: "completed",
      timestamp: "12 min ago",
      preview: "Extracted 8 action items from team standup meeting...",
      type: "extraction"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-yellow-400 animate-spin" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/20 text-green-400 border-green-400/30';
      case 'processing':
        return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'error':
        return 'bg-red-400/20 text-red-400 border-red-400/30';
      default:
        return 'bg-gray-400/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <Card className="neumorphic border-border/50 h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Live Output Preview</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentOutputs.map((output) => (
          <div 
            key={output.id}
            className="p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getStatusIcon(output.status)}
                <span className="font-medium text-sm">{output.workflow}</span>
              </div>
              <Badge className={`text-xs ${getStatusColor(output.status)}`}>
                {output.status}
              </Badge>
            </div>
            
            <p className="text-xs text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
              {output.preview}
            </p>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{output.timestamp}</span>
              <span className="capitalize">{output.type}</span>
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 rounded-lg border-2 border-dashed border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Activate a workflow to see live outputs here
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OutputPreview;
