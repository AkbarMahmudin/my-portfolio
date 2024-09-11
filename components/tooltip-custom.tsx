import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TooltipCustomProps {
  children: React.ReactNode;
  // title: string;
  description: string;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const TooltipCustom = ({ children, description, side, className }: TooltipCustomProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={cn(className)}>{children}</TooltipTrigger>
        <TooltipContent side={side}>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipCustom;
