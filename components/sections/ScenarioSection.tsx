'use client'

import {motion} from "framer-motion";
import {SystemWindow} from "@/components/SystemWindow";
import {RevealSection} from "@/components/RevealSection";
import {Calendar, Building, MapPin} from "lucide-react";
import {Scenario} from "@/interfaces/scenario";
import {format} from 'date-fns';

interface ScenarioSectionProps {
  scenarios: Scenario[];
}

export const ScenarioSection = ({scenarios}: ScenarioSectionProps) => {
  return (
    <section id="scenarios" className="relative py-20">
      <div className="section-container">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"/>
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-primary font-mono text-sm">05.</span>
              Scenarios
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent"/>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <SystemWindow title="experience.log">
            <div className="p-6 md:p-8">
              <div className="relative">
                {scenarios.map((scenario, index) => (
                  <ScenarioEntryComponent
                    key={index}
                    entry={scenario}
                    isLast={index === scenarios.length - 1}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </SystemWindow>
        </RevealSection>
      </div>
    </section>
  );
};

interface ScenarioEntryProps {
  entry: Scenario;
  isLast: boolean;
  index: number;
}

const ScenarioEntryComponent = ({entry, isLast, index}: ScenarioEntryProps) => {
  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{delay: index * 0.2, duration: 0.5}}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="timeline-line"/>
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        viewport={{once: true}}
        transition={{delay: index * 0.2 + 0.1, duration: 0.3, type: "spring"}}
        className="absolute left-0 top-1 timeline-dot"
      />

      {/* Content */}
      <div className="space-y-4">
        {/* Year Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20">
          <Calendar className="w-3 h-3 text-primary"/>
          <span className="font-mono text-xs text-primary">
            {format(new Date(entry.startDate), 'MMM yyyy')} - {" "}
            {entry.isCurrent || !entry.endDate ? "Now" : format(new Date(entry?.endDate), 'MMM yyyy')}
          </span>
        </div>

        {/* Title & Company */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {entry.role}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building className="w-4 h-4"/>
              {entry.companyName}
            </span>
            {entry.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4"/>
                {entry.location}
              </span>
            )}
          </div>
        </div>

        {/* Descriptions */}
        <div className="space-y-2">
          {entry?.descriptions?.map(({description}, achIndex) => (
            <motion.div
              key={achIndex}
              initial={{opacity: 0, x: -10}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.2 + achIndex * 0.1 + 0.3, duration: 0.3}}
              className="flex items-start gap-3 font-mono text-sm"
            >
              <span className="text-accent mt-0.5">→</span>
              <span className="text-muted-foreground">{description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
