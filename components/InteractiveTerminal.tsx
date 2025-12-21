'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalCommand {
  input: string;
  output: string | string[];
}

const commandResponses: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  about     - Learn about me",
    "  skills    - View technical skills",
    "  projects  - See featured projects",
    "  contact   - Get contact info",
    "  clear     - Clear terminal",
    "  socials   - Social media links",
  ],
  about: [
    "▸ Backend Engineer with 2+ years of experience",
    "▸ Specializing in distributed systems & API design",
    "▸ Building resilient systems that scale",
  ],
  skills: [
    "Core: Node.js, NestJS, TypeScript, Prisma",
    "Database: PostgreSQL, MySQL, Redis, MongoDB",
    "DevOps: Docker",
    "Patterns: Microservices, Event-driven, DDD",
  ],
  projects: [
    "▸ Undergraduate Research Project - NestJS + MongoDB + Redis + OAUTH 2.0",
    "▸ Event Stream Management InnovationDay - NestJS + PostgreSQL + Firebase + NextJS",
    "▸ Cephat for planning your nutrition - ExpressJS + MySQL + Redis + DSS",
    "",
    "Type 'scroll' or navigate to #scenarios for details",
  ],
  contact: [
    "Email: akbarmahmudin7@gmail.com",
    "LinkedIn: linkedin.com/in/akbar-mahmudin",
    "GitHub: github.com/AkbarMahmudin",
  ],
  socials: [
    "GitHub   → github.com/AkbarMahmudin",
    "LinkedIn → linkedin.com/in/akbar-mahmudin",
  ],
  whoami: "A Backend Engineer navigating through scenarios.",
  date: new Date().toLocaleString(),
  status: "System Status: ONLINE | Ready for new scenarios",
};

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const processCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === "clear") {
      setHistory([]);
      return;
    }

    let output: string | string[];
    if (command in commandResponses) {
      output = commandResponses[command];
    } else if (command === "") {
      output = "";
    } else {
      output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { input: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        processCommand(input);
        setInput("");
        setIsTyping(false);
      }, 150);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => inputRef.current?.focus();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="glass-terminal mt-6"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
          </div>
          <span className="font-mono text-xs text-muted-foreground ml-2">4th.wall</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-emerald-400">ACTIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="p-4 h-48 overflow-y-auto scrollbar-thin font-mono text-sm"
      >
        {/* Welcome Message */}
        <div className="text-muted-foreground mb-4">
          <p className="text-primary">Use the 4th wall to see the list of incarnation information.</p>
          <p>Type <span className="text-accent">'help'</span> to see available commands.</p>
        </div>

        {/* Command History */}
        {history.map((cmd, index) => (
          <div key={index} className="mb-3">
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-primary">❯</span>
              <span>{cmd.input}</span>
            </div>
            {cmd.output && (
              <div className="ml-4 mt-1 text-muted-foreground">
                {Array.isArray(cmd.output) ? (
                  cmd.output.map((line, i) => (
                    <p key={i} className="leading-relaxed">{line}</p>
                  ))
                ) : (
                  <p>{cmd.output}</p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-primary">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
            placeholder={isTyping ? "" : "Enter command..."}
            autoFocus
          />
          <span className="w-2 h-4 bg-primary animate-cursor" />
        </form>
      </div>
    </motion.div>
  );
};
