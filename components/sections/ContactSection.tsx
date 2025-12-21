'use client'

import { motion } from "framer-motion";
import { SystemWindow } from "@/components/SystemWindow";
import { RevealSection } from "@/components/RevealSection";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 bg-card/30">
      <div className="section-container">
        {/* Section Header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-primary font-mono text-sm">06.</span>
              Sponsor Selection
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="max-w-2xl mx-auto text-center">
            <SystemWindow title="contact.initiate" variant="highlight">
              <div className="p-8 md:p-12">
                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Send className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Copy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <p className="font-mono text-sm text-muted-foreground mb-2">
                    <span className="text-primary">&gt;</span> MIDDAY_TRYST_READY
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Initiate Contact
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto italic">
                    "Constellations interested in observing future scenarios may initiate contact."
                  </p>
                </motion.div>

                {/* Contact Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <motion.a 
                    href="mailto:akbarmahmudin7@gmail.com"
                    className="btn-system-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/in/akbar-mahmudin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-system"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </motion.a>
                  <motion.a 
                    href="https://github.com/AkbarMahmudin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-system"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </motion.div>

                {/* System Note */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-10 pt-6 border-t border-border/50"
                >
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-accent">ℹ</span> Response time: Usually within 24 hours
                  </p>
                </motion.div>
              </div>
            </SystemWindow>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
