'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Attributes", href: "#attributes" },
  { label: "Fables", href: "#fables" },
  { label: "Scenarios", href: "#scenarios" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-primary text-xl">◆</span>
            <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              INCARNATION
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary/60 mr-1">0{index + 2}.</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors"
                >
                  <span className="text-primary/60 mr-2">0{index + 2}.</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
