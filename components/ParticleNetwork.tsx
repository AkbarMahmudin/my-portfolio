import { useEffect, useRef } from "react";

type ORVScenarioState = "idle" | "active" | "danger" | "climax" | "cleared";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
};

type TextGhost = {
  x: number;
  y: number;
  text: string;
  opacity: number;
  life: number;
  maxLife: number;
};

const GHOST_TEXTS = [
  "the story continues",
  "a reader is watching",
  "this scenario was once written",
  "probability trembles",
  "the ending has not been decided",
  "someone remembers this world",
  "the page turns silently",
  "a constellation holds its breath",
  "this chapter cannot be skipped",
];

export const ParticleNetwork = ({
  scenario = "idle",
}: {
  scenario?: ORVScenarioState;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const textGhostsRef = useRef<TextGhost[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const primary = '48, 96%, 53%';

    /* ---------------- RESIZE ---------------- */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    /* ---------------- PARTICLES ---------------- */
    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 16000);
      particlesRef.current = [];

      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    /* ---------------- SCENARIO CONFIG ---------------- */
    const getScenarioConfig = () => {
      switch (scenario) {
        case "danger":
          return { speed: 1.4, pulse: 2.2, opacity: 0.35 };
        case "climax":
          return { speed: 2.2, pulse: 3.5, opacity: 0.6 };
        case "cleared":
          return { speed: 0.4, pulse: 0.3, opacity: 0.05 };
        case "active":
          return { speed: 1, pulse: 1, opacity: 0.25 };
        default:
          return { speed: 0.6, pulse: 0.6, opacity: 0.15 };
      }
    };

    /* ---------------- GRID (NOVEL PAGE) ---------------- */
    const drawGrid = (opacity: number) => {
      const size = 64;
      ctx.lineWidth = 0.5;

      for (let x = 0; x <= canvas.width; x += size) {
        ctx.strokeStyle = `hsla(220, 14%, 90%, ${opacity * 0.05})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += size) {
        ctx.strokeStyle = `hsla(220, 14%, 90%, ${opacity * 0.05})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    /* ---------------- TEXT GHOST ---------------- */
    const spawnTextGhost = () => {
      if (Math.random() > 0.015) return;

      textGhostsRef.current.push({
        x: Math.random() * (canvas.width - 300) + 150,
        y: Math.random() * (canvas.height - 100) + 50,
        text: GHOST_TEXTS[Math.floor(Math.random() * GHOST_TEXTS.length)],
        opacity: 0,
        life: 0,
        maxLife: 300 + Math.random() * 200,
      });
    };

    const drawTextGhosts = () => {
      ctx.font = "14px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";

      textGhostsRef.current = textGhostsRef.current.filter((g) => {
        g.life++;

        if (g.life < 40) g.opacity += 0.02;
        else if (g.life > g.maxLife - 40) g.opacity -= 0.02;

        ctx.fillStyle = `hsla(${primary}, ${g.opacity * 0.25})`;
        ctx.fillText(g.text, g.x, g.y);

        return g.life < g.maxLife && g.opacity > 0;
      });
    };

    /* ---------------- DRAW LOOP ---------------- */
    const draw = () => {
      const { speed, pulse, opacity } = getScenarioConfig();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 📐 GRID
      drawGrid(4);

      // 👻 TEXT GHOSTING
      spawnTextGhost();
      drawTextGhosts();

      const particles = particlesRef.current;
      const maxDist = 130;

      // 🔗 CONSTELLATION CONNECTIONS
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const pulseFactor =
              (Math.sin(particles[i].pulsePhase) + 1) / 2;

            const alpha =
              (1 - dist / maxDist) * opacity * (0.5 + pulseFactor);

            ctx.strokeStyle = `hsla(${primary}, ${alpha})`;
            ctx.lineWidth = pulseFactor * 1.2;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // ✨ PARTICLE CORES
      for (const p of particles) {
        p.x += p.vx * speed;
        p.y += p.vy * speed;
        p.pulsePhase += p.pulseSpeed * pulse;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const glow = (Math.sin(p.pulsePhase) + 1) / 2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + glow * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${primary}, ${0.3 + glow * 0.4})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, [scenario]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
