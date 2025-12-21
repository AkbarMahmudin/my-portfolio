'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SystemWindow } from "@/components/SystemWindow";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { ChevronDown, FileText, User, Briefcase } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bootTimer = setTimeout(() => setBootComplete(true), 800);
    const contentTimer = setTimeout(() => setShowContent(true), 1200);
    return () => {
      clearTimeout(bootTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 section-container text-center">
        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: bootComplete ? 1 : 0, y: bootComplete ? 0 : -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Star Stream Online
          </span>
        </motion.div>

        {/* Main Content Window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 40,
            scale: showContent ? 1 : 0.95
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SystemWindow 
            title="incarnation.status" 
            variant="highlight"
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 md:p-12 text-left">
              {/* Boot Text */}
              <div className="font-mono text-xs text-muted-foreground mb-6 space-y-1">
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -10 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <span className="text-primary">&gt;</span> Initializing system...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -10 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <span className="text-primary">&gt;</span> Loading incarnation data...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -10 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <span className="text-accent">&gt;</span> Status: <span className="text-emerald-400">READY</span>
                </motion.p>
              </div>

              {/* Main Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                  <span className="text-primary">▸</span>
                  <span>INCARNATION_ID:</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Akbar Mahmudin
                </h1>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/30 border border-border/50 backdrop-blur-sm">
                    <span className="font-mono text-xs text-muted-foreground">ROLE:</span>
                    <span className="font-mono text-sm text-accent">Backend Engineer</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/30 border border-border/50 backdrop-blur-sm">
                    <span className="font-mono text-xs text-muted-foreground">STATUS:</span>
                    <span className="font-mono text-sm text-emerald-400">Available</span>
                  </div>
                </div>

                <p className="text-muted-foreground mt-6 max-w-lg font-mono text-sm leading-relaxed">
                  <span className="text-primary/60">//</span> Designing resilient backend systems 
                  that remain stable even when the scenario escalates.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link href="#fables" className="btn-system-primary" target="_blank">
                  <Briefcase className="w-4 h-4" />
                  View Fables
                </Link>
                <Link href="#profile" className="btn-system" target="_blank">
                  <User className="w-4 h-4" />
                  Access Profile
                </Link>
                <Link href="https://drive.google.com/file/d/1vfMUi_A2OOQJNnXhG2t-VdMUNdX8FSLa/view?usp=sharing" className="btn-system" target="_blank">
                  <FileText className="w-4 h-4" />
                  Download Record
                </Link>
              </motion.div>
            </div>
          </SystemWindow>

          {/* Interactive Terminal */}
          <div className="max-w-2xl mx-auto">
            <InteractiveTerminal />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
