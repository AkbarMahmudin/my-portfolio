'use client'

import { SystemWindow } from "@/components/SystemWindow";
import { RevealSection, StaggerContainer, StaggerItem } from "@/components/RevealSection";
import { User, Calendar, Target, Lightbulb } from "lucide-react";
import {Profile} from "@/interfaces/profile";

// TODO: Remove
const profileData = {
  name: "Akbar Mahmudin",
  role: "Backend Engineer",
  experience: "2+ Years",
  specialization: "Distributed Systems & API Design",
  philosophy: "I design backend systems that remain stable even when the scenario escalates.",
};

interface ProfileSectionProps {
  profile: Partial<Profile>;
}

export const ProfileSection = ({ profile }: ProfileSectionProps) => {
  return (
    <section id="profile" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-primary font-mono text-sm">02.</span>
              Profile Status
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
        </RevealSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {/* Main Profile Window */}
          <StaggerItem>
            <SystemWindow title="incarnation.profile" variant="highlight">
              <div className="p-6 space-y-6">
                {/* Avatar Placeholder */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-lg bg-secondary border border-border flex items-center justify-center">
                    <User className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {profile.fullname}
                    </h3>
                    <p className="font-mono text-sm text-accent">{profile.role}</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-xs uppercase">Experience</span>
                    </div>
                    <p className="font-heading text-xl font-semibold text-foreground">
                      {profile.experienceYear}+ Years
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Target className="w-4 h-4" />
                      <span className="font-mono text-xs uppercase">Focus</span>
                    </div>
                    <p className="font-mono text-sm text-foreground">
                      {profile.specialization}
                    </p>
                  </div>
                </div>
              </div>
            </SystemWindow>
          </StaggerItem>

          {/* Philosophy Window */}
          <StaggerItem>
            <SystemWindow title="core.philosophy">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase mb-3">
                      Operating Principle
                    </p>
                    <blockquote className="text-lg text-foreground leading-relaxed italic">
                      "{profileData.philosophy}"
                    </blockquote>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="font-mono text-xs text-muted-foreground mb-4">
                    <span className="text-primary">&gt;</span> SYSTEM_ANALYSIS:
                  </p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">
                      <span className="text-accent">→</span> Approaches problems with systematic thinking
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-accent">→</span> Values clean architecture and maintainability
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-accent">→</span> Prioritizes reliability over complexity
                    </p>
                  </div>
                </div>
              </div>
            </SystemWindow>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
