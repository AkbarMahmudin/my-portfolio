'use client'

import { useState, useEffect } from "react";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface SystemMessageProps {
  message: string;
  type?: "warning" | "success" | "info";
  autoHide?: boolean;
  delay?: number;
}

export const SystemMessage = ({ 
  message, 
  type = "warning", 
  autoHide = true,
  delay = 3000 
}: SystemMessageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), delay);
    
    let hideTimer: NodeJS.Timeout;
    if (autoHide) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 500);
      }, delay + 5000);
    }

    return () => {
      clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [autoHide, delay]);

  if (!shouldRender) return null;

  const icons = {
    warning: AlertTriangle,
    success: CheckCircle,
    info: Info,
  };

  const colors = {
    warning: "text-primary border-primary/30 bg-primary/5",
    success: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    info: "text-accent border-accent/30 bg-accent/5",
  };

  const Icon = icons[type];

  return (
    <div 
      className={`
        fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-lg border backdrop-blur-sm
        transition-all duration-500
        ${colors[type]}
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-wider mb-1 opacity-70">
            System Message
          </p>
          <p className="text-sm text-foreground">{message}</p>
        </div>
        <button 
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setShouldRender(false), 500);
          }}
          className="p-1 hover:bg-secondary/50 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
