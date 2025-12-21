'use client'

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SystemWindowProps {
  title?: string;
  className?: string;
  children: ReactNode;
  variant?: "default" | "highlight" | "glass";
}

export const SystemWindow = ({ 
  title, 
  className, 
  children, 
  variant = "default" 
}: SystemWindowProps) => {
  return (
    <div className={cn(
      "glass-window",
      variant === "highlight" && "glass-window-highlight",
      variant === "glass" && "glass-window-ultra",
      className
    )}>
      {title && (
        <div className="glass-header">
          <div className="window-dots">
            <div className="window-dot bg-red-500/80" />
            <div className="window-dot bg-yellow-500/80" />
            <div className="window-dot bg-green-500/80" />
          </div>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            {title}
          </span>
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
