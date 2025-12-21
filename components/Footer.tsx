'use client'

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary">◆</span>
            <span className="font-mono text-xs text-muted-foreground">
              REGRESSION: 2.0.0
            </span>
          </div>
          
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">&gt;</span> Designed with systematic precision
          </p>
          
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} All scenarios recorded
          </p>
        </div>
      </div>
    </footer>
  );
};
