import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/10 text-primary shadow-sm hover:bg-primary/20 hover:shadow-glow-gold",
        secondary:
          "border-border/50 bg-secondary/50 text-secondary-foreground backdrop-blur-sm hover:bg-secondary/70",
        destructive:
          "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20",
        outline:
          "border-border/50 text-foreground bg-transparent hover:bg-muted/50",
        accent:
          "border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-glow-blue",
        system:
          "border-primary/50 bg-card/60 text-primary backdrop-blur-sm hover:bg-card hover:shadow-glow-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
