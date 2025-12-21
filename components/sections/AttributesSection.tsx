'use client'

import { motion } from "framer-motion";
import { SystemWindow } from "@/components/SystemWindow";
import { RevealSection, StaggerContainer, StaggerItem } from "@/components/RevealSection";
import { Zap, Shield, Database, Server, Cloud, Settings } from "lucide-react";

interface Attribute {
  name: string;
  level: number;
  category: "core" | "advanced" | "supporting";
  icon: React.ElementType;
}

const attributes: Attribute[] = [
  { name: "Node.js", level: 95, category: "core", icon: Server },
  { name: "NestJS", level: 90, category: "core", icon: Shield },
  { name: "TypeScript", level: 92, category: "core", icon: Server },
  { name: "JavaScript", level: 92, category: "core", icon: Server },
  { name: "PHP", level: 87, category: "advanced", icon: Server },
  { name: "Laravel", level: 89, category: "advanced", icon: Shield },
  { name: "Prisma", level: 88, category: "core", icon: Database },
  { name: "PostgreSQL", level: 85, category: "core", icon: Database },
  { name: "MySQL", level: 85, category: "core", icon: Database },
  { name: "MongoDB", level: 80, category: "advanced", icon: Database },
  { name: "Redis", level: 80, category: "advanced", icon: Zap },
  { name: "Docker", level: 82, category: "advanced", icon: Cloud },
  { name: "System Design", level: 85, category: "advanced", icon: Settings },
];

const stigmas = [
  "API Architecture",
  "Performance Optimization",
  "Database Design",
  "Clean Code",
];

export const AttributesSection = () => {
  const coreAttributes = attributes.filter(a => a.category === "core");
  const advancedAttributes = attributes.filter(a => a.category === "advanced" || a.category === "supporting");

  return (
    <section id="attributes" className="relative py-20">
      <div className="section-container">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-primary font-mono text-sm">03.</span>
              Attributes & Stigma
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
        </RevealSection>

        <StaggerContainer className="grid lg:grid-cols-3 gap-8">
          {/* Core Attributes */}
          <StaggerItem className="lg:col-span-2">
            <SystemWindow title="attributes.core">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    Core Attributes
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {coreAttributes.map((attr, index) => (
                    <AttributeRow 
                      key={attr.name} 
                      attribute={attr} 
                      delay={index * 0.1}
                    />
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-muted-foreground">
                      Secondary Attributes
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {advancedAttributes.map((attr, index) => (
                      <AttributeRow 
                        key={attr.name} 
                        attribute={attr} 
                        delay={(coreAttributes.length + index) * 0.1}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SystemWindow>
          </StaggerItem>

          {/* Stigma */}
          <StaggerItem>
            <SystemWindow title="stigma.signature" variant="highlight">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-primary text-lg">✦</span>
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    Signature Skills
                  </span>
                </div>

                <div className="space-y-4">
                  {stigmas.map((stigma, index) => (
                    <motion.div 
                      key={stigma}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                      className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-primary">◆</span>
                        <span className="font-mono text-sm text-foreground">
                          {stigma}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">&gt;</span> Stigmas are rare abilities 
                    refined through countless scenarios.
                  </p>
                </div>
              </div>
            </SystemWindow>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

interface AttributeRowProps {
  attribute: Attribute;
  delay: number;
}

const AttributeRow = ({ attribute, delay }: AttributeRowProps) => {
  const Icon = attribute.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono text-sm text-foreground">{attribute.name}</span>
        </div>
        <span className="font-mono text-xs text-primary">{attribute.level}%</span>
      </div>
      <div className="attribute-bar">
        <motion.div 
          className="attribute-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${attribute.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};
