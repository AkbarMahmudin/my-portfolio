import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full",
      "bg-secondary/50 backdrop-blur-sm",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-glow-gold transition-all duration-500"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// ORV System Progress variant with label
const SystemProgress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number;
    label?: string;
    showValue?: boolean;
  }
>(({ className, value, label, showValue = true, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props}>
    {(label || showValue) && (
      <div className="flex items-center justify-between text-sm">
        {label && <span className="font-mono text-muted-foreground uppercase tracking-wider text-xs">{label}</span>}
        {showValue && <span className="font-mono text-primary">{value}%</span>}
      </div>
    )}
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-glow-gold transition-all duration-700 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
));
SystemProgress.displayName = "SystemProgress";

export { Progress, SystemProgress };
