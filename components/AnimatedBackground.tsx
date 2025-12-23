'use client'

import { ParticleNetwork } from "./ParticleNetwork";
import {useScrollScenario} from "@/hooks/use-scroll-scenario";

export const AnimatedBackground = () => {
  const scenario = useScrollScenario();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

      {/* Particle network (optional / adaptive) */}
      {/*<div className="hidden md:block">*/}
      {/*</div>*/}
      <ParticleNetwork scenario={scenario} />

      {/* Orb 1 */}
      <div
        className="
          absolute top-1/4 -left-32
          w-80 h-80 rounded-full
          bg-primary/10
          blur-[80px]
          bg-animate
          animate-[float-slow_18s_ease-in-out_infinite]
          will-change-transform
        "
      />

      {/* Orb 2 */}
      <div
        className="
          absolute bottom-1/4 -right-32
          w-80 h-80 rounded-full
          bg-accent/10
          blur-[80px]
          bg-animate
          animate-[float-reverse_22s_ease-in-out_infinite]
          will-change-transform
        "
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Scanline (CSS only, subtle) */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]
          animate-[scan_10s_linear_infinite]
        "
      />

      {/* Static noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url('/noise.png')`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />
    </div>
  );
};
