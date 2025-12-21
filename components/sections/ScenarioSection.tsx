'use client'

import { motion } from "framer-motion";
import { SystemWindow } from "@/components/SystemWindow";
import { RevealSection } from "@/components/RevealSection";
import { Calendar, Building, MapPin } from "lucide-react";

interface ScenarioEntry {
  year: string;
  title: string;
  company: string;
  location?: string;
  achievements: string[];
}

const scenario: ScenarioEntry[] = [
  {
    year: "Oct - Dec 2025",
    title: "Backend Engineer",
    company: "Jabar Digital Service",
    location: "Bandung, ID",
    achievements: [
      "Developed CI/CD pipelines for automated deployments",
      "Designed and developed RESTful APIs for client applications",
      "Collaborate with cross-functional teams using agile/scrum methodologies",
      "Reduced file upload size by 96.9% through compression optimization, improving upload speed and bandwidth efficiency",
    ],
  },
  {
    year: "Sep 2024 —  Oct 2025",
    title: "Backend Engineer",
    company: "PT Folka Indonesia Teknologi",
    location: "Bandung, ID",
    achievements: [
      "Designed and developed RESTful APIs for client applications",
      "Optimized database queries to reduce system response time by 97.7%, from 13s to 300ms",
      "Built a reliable and consistent real-time notification system based on TDLib Telegram",
      "Designed and implemented systems with multi-level approval business flows that support various user roles",
    ],
  },
  {
    year: "Aug - Dec 2023",
    title: "Developer Intern",
    company: "PT Telekomunikasi Indonesia Tbk",
    location: "Bandung, ID",
    achievements: [
      "Manage and maintain landing pages using Wordpress",
      "Designed and developed client and server applications on project Re:Develop Innovation Day",
      "Collaborated with UI/UX Designer on building product as Software Engineer",
      "Improved website performance by 30%, accessibility 2% and SEO 10%"
    ],
  },
  {
    year: "Feb - Jul 2023",
    title: "Backend Developer Intern",
    company: "PT Len Industri (Persero)",
    location: "Bandung, ID",
    achievements: [
      "Developed RESTful APIs services for client applications",
      "Maintained PostgreSQL databases and optimized queries",
      "Collaborated with frontend team on API design",
    ],
  },
];

export const ScenarioSection = () => {
  return (
    <section id="scenarios" className="relative py-20">
      <div className="section-container">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-primary font-mono text-sm">05.</span>
              Scenarios
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <SystemWindow title="experience.log">
            <div className="p-6 md:p-8">
              <div className="relative">
                {scenario.map((entry, index) => (
                  <ScenarioEntryComponent 
                    key={entry.year}
                    entry={entry} 
                    isLast={index === scenario.length - 1}
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
  entry: ScenarioEntry;
  isLast: boolean;
  index: number;
}

const ScenarioEntryComponent = ({ entry, isLast, index }: ScenarioEntryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="timeline-line" />
      )}
      
      {/* Timeline dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.1, duration: 0.3, type: "spring" }}
        className="absolute left-0 top-1 timeline-dot" 
      />

      {/* Content */}
      <div className="space-y-4">
        {/* Year Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20">
          <Calendar className="w-3 h-3 text-primary" />
          <span className="font-mono text-xs text-primary">{entry.year}</span>
        </div>

        {/* Title & Company */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {entry.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building className="w-4 h-4" />
              {entry.company}
            </span>
            {entry.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {entry.location}
              </span>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-2">
          {entry.achievements.map((achievement, achIndex) => (
            <motion.div 
              key={achIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.3, duration: 0.3 }}
              className="flex items-start gap-3 font-mono text-sm"
            >
              <span className="text-accent mt-0.5">→</span>
              <span className="text-muted-foreground">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
