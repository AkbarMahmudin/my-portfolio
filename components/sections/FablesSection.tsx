'use client'

import {motion} from "framer-motion";
import {RevealSection} from "@/components/RevealSection";
import {BookKey, ExternalLink, GitBranch, TrendingUp} from "lucide-react";
import Link from "next/link";

interface Fable {
  id: string;
  title: string;
  condition: string;
  achieve: string;
  tools: string[];
  outcomes: string[];
  grade?: string;
  repo?: string;
  cta?: string;
}

const fables: Fable[] = [
  {
    id: "03",
    title: "Performance Analysis of an OAuth 2.0-Based Authentication and Authorization System Using a Redis In-memory Database",
    condition: "This study aims to analyze the impact of implementing a Redis in-memory database for token management on the performance of an OAuth 2.0 system",
    achieve: "Optimizing OAuth 2.0 performance in a microservices architecture by leveraging Redis as an in-memory token management layer",
    tools: ["NestJS", "Redis", "MongoDB", "RabbitMQ", "JWT", "OAuth"],
    outcomes: ["Microservices architecture", "4.06% response time increase", "3.14% throughput increase", "1.67% CPU reduction", "2.87% memory efficient"],
    grade: "academic",
    repo: "",
    cta: "http://www.pertanika.upm.edu.my/resources/files/Pertanika%20PAPERS/PP%20Vol.%201%20(3)%202025%20(View%20Full%20Journal).pdf#page=41",
  },
  {
    id: "02",
    title: "Re:develop Innovation Day Website",
    condition: "Bringing back Innovation Day as a fast, stable, and growing broadcast experience with its users",
    achieve: "The Innovation Day website was redeveloped for higher performance and a smoother user experience",
    tools: ["Node.js", "NestJS", "NextJS", "ReactJS", "Firebase"],
    outcomes: ["Performance +30%", "Accessibility +2%", "SEO +10%"],
    repo: "https://github.com/AkbarMahmudin/microsite-api-innovday",
    cta: "https://velvety-lollipop-001d83.netlify.app",
    grade: "software engineering",
  },
  {
    id: "01",
    title: "Cephat",
    condition: "Nutritional needs planning system",
    achieve: "ISO 25010 and OWASP based development",
    tools: ["Node.js", "ExpressJS", "MongoDB", "Redis"],
    outcomes: ["50% scan coverage", "8 alerts detected", "2M / 2L / 4I"],
    grade: "backend",
    repo: "https://github.com/AkbarMahmudin/cephat-backend",
    cta: "https://cephat-app.netlify.app"
  },
];

export const FablesSection = () => {
  return (
    <section id="fables" className="relative py-20 bg-card/30">
      <div className="section-container">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"/>
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-primary font-mono text-sm">04.</span>
              Fable Records
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent"/>
          </div>
        </RevealSection>

        <div className="grid gap-8">
          {fables.map((fable, index) => (
            <FableCard key={fable.id} fable={fable} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FableCardProps {
  fable: Fable;
  index: number;
}

const FableCard = ({fable, index}: FableCardProps) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: "-50px"}}
      transition={{delay: index * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1]}}
    >
      <motion.div
        className="fable-card group"
        whileHover={{y: -4}}
        transition={{duration: 0.2}}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  Fable #{fable.id}
                </span>
                {fable.grade && (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    <BookKey className="w-3 h-3 text-primary"/>
                    <span className="font-mono text-xs text-primary">{fable.grade}</span>
                  </div>
                )}
              </div>
              <h3
                className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {fable.title}
              </h3>
            </div>
            <div className="flex gap-2">
              <Link href={fable?.repo ?? ''}
                    target={`_blank`}
                    className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors">
                <GitBranch className="w-4 h-4 text-muted-foreground"/>
              </Link>
              <Link href={fable?.cta ?? '#'}
                    target={`_blank`}
                    className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors">
                <ExternalLink className="w-4 h-4 text-muted-foreground"/>
              </Link>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Condition */}
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase mb-2">Condition</p>
              <p className="text-sm text-foreground">{fable.condition}</p>
            </div>

            {/* Approach */}
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase mb-2">Achieve</p>
              <p className="text-sm text-foreground">{fable.achieve}</p>
            </div>

            {/* Tools */}
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase mb-2">Tools Used</p>
              <div className="flex flex-wrap gap-2">
                {fable.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 rounded text-xs font-mono bg-secondary/50 border border-border text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="font-mono text-xs text-muted-foreground uppercase mb-3">Outcomes</p>
            <div className="flex flex-wrap gap-3">
              {fable.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20"
                >
                  <span className="text-accent">✓</span>
                  <span className="text-sm text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
