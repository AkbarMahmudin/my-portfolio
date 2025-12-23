'use client'

import { useEffect, useRef } from "react";

/* ================= TYPES ================= */

type Scenario = "idle" | "active" | "danger" | "climax" | "cleared";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
};

type TextGhost = {
  x: number;
  y: number;
  text: string;
  life: number;
  maxLife: number;
};

/* ================= CONST ================= */

const GHOST_TEXTS = [
  "the story continues",
  "a reader is watching",
  "this chapter cannot be skipped",
  "probability trembles",
  "someone remembers this world",
];

const SCENARIOS: Record<Scenario, {
  particleSpeed: number;
  connectionOpacity: number;
  ghostRate: number;
  gridAlpha: number;
}> = {
  idle:    { particleSpeed: 0.4, connectionOpacity: 0.05, ghostRate: 0.002, gridAlpha: 0.03 },
  active:  { particleSpeed: 0.8, connectionOpacity: 0.12, ghostRate: 0.006, gridAlpha: 0.05 },
  danger:  { particleSpeed: 1.2, connectionOpacity: 0.2,  ghostRate: 0.012, gridAlpha: 0.09 },
  climax:  { particleSpeed: 2.0, connectionOpacity: 0.35, ghostRate: 0.025, gridAlpha: 0.14 },
  cleared: { particleSpeed: 0.2, connectionOpacity: 0.02, ghostRate: 0.001, gridAlpha: 0.02 },
};

/* ================= UTILS ================= */

const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t;

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/* ================= COMPONENT ================= */

export const ParticleNetwork = ({
                                  scenario = "idle",
                                }: {
  scenario?: Scenario;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  const lastFrameRef = useRef(0);

  const currentScenarioRef = useRef<Scenario>("idle");
  const transitionRef = useRef<{
    from: Scenario;
    to: Scenario;
    progress: number;
  } | null>(null);

  const particlesRef = useRef<Particle[]>([]);
  const ghostsRef = useRef<TextGhost[]>([]);
  const burstDoneRef = useRef(false);

  /* ================= EFFECT ================= */

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const isMobile = window.innerWidth < 768;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

    const TARGET_FPS = isMobile ? 30 : 60;
    const FRAME_TIME = 1000 / TARGET_FPS;

    /* ---------- Resize ---------- */
    const resize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();

    /* ---------- Grid (static layer) ---------- */
    const gridCanvas = document.createElement("canvas");
    const gctx = gridCanvas.getContext("2d")!;
    gridCanvas.width = canvas.width;
    gridCanvas.height = canvas.height;

    const drawGridStatic = () => {
      const size = isMobile ? 96 : 64;
      gctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
      gctx.strokeStyle = "hsla(220, 14%, 90%, 0.25)";
      gctx.lineWidth = 1;

      for (let x = 0; x < gridCanvas.width; x += size) {
        gctx.beginPath();
        gctx.moveTo(x, 0);
        gctx.lineTo(x, gridCanvas.height);
        gctx.stroke();
      }
      for (let y = 0; y < gridCanvas.height; y += size) {
        gctx.beginPath();
        gctx.moveTo(0, y);
        gctx.lineTo(gridCanvas.width, y);
        gctx.stroke();
      }
    };
    drawGridStatic();

    /* ---------- Particles ---------- */
    const PARTICLE_COUNT = isMobile ? 40 : 90;
    particlesRef.current = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    /* ---------- Draw Loop ---------- */
    const draw = (time: number) => {
      if (time - lastFrameRef.current < FRAME_TIME) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameRef.current = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* ----- Scenario Transition ----- */
      let config = SCENARIOS[currentScenarioRef.current];

      if (transitionRef.current) {
        transitionRef.current.progress += 0.02;
        const t = easeInOut(Math.min(transitionRef.current.progress, 1));
        const from = SCENARIOS[transitionRef.current.from];
        const to = SCENARIOS[transitionRef.current.to];

        config = {
          particleSpeed: lerp(from.particleSpeed, to.particleSpeed, t),
          connectionOpacity: lerp(from.connectionOpacity, to.connectionOpacity, t),
          ghostRate: lerp(from.ghostRate, to.ghostRate, t),
          gridAlpha: lerp(from.gridAlpha, to.gridAlpha, t),
        };

        if (transitionRef.current.progress >= 1) {
          transitionRef.current = null;
        }
      }

      /* ----- Grid ----- */
      ctx.globalAlpha = config.gridAlpha;
      ctx.drawImage(gridCanvas, 0, 0);
      ctx.globalAlpha = 1;

      /* ----- Text Ghost ----- */
      if (Math.random() < config.ghostRate && ghostsRef.current.length < 3) {
        ghostsRef.current.push({
          x: Math.random() * canvas.width * 0.8 + 50,
          y: Math.random() * canvas.height * 0.8 + 50,
          text: GHOST_TEXTS[Math.floor(Math.random() * GHOST_TEXTS.length)],
          life: 0,
          maxLife: 160 + Math.random() * 100,
        });
      }

      ctx.font = "13px monospace";
      ghostsRef.current = ghostsRef.current.filter(g => {
        g.life++;
        const alpha =
          g.life < 30
            ? g.life / 30
            : g.life > g.maxLife - 30
              ? (g.maxLife - g.life) / 30
              : 1;

        ctx.fillStyle = `hsla(48, 96%, 53%, ${alpha * 0.25})`;
        ctx.fillText(g.text, g.x, g.y);
        return g.life < g.maxLife;
      });

      /* ----- Particles + Connections ----- */
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * config.particleSpeed;
        p.y += p.vy * config.particleSpeed;
        p.pulse += 0.02;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5 + Math.sin(p.pulse), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,160,255,0.6)";
        ctx.fill();

        for (let j = i + 1; j < i + 3 && j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = dx * dx + dy * dy;
          if (d < 120 * 120) {
            ctx.strokeStyle = `rgba(120,160,255,${config.connectionOpacity})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    /* ---------- Visibility ---------- */
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current!);
      else rafRef.current = requestAnimationFrame(draw);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= SCENARIO CHANGE ================= */

  useEffect(() => {
    if (scenario === currentScenarioRef.current) return;

    transitionRef.current = {
      from: currentScenarioRef.current,
      to: scenario,
      progress: 0,
    };

    burstDoneRef.current = false;
    currentScenarioRef.current = scenario;
  }, [scenario]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};
