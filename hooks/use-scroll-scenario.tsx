import {useEffect, useRef, useState} from "react";

type Scenario = "idle" | "active" | "danger" | "climax" | "cleared";

const getScenarioFromProgress = (p: number): Scenario => {
  if (p < 0.2) return "climax";
  if (p < 0.45) return "danger";
  if (p < 0.7) return "active";
  if (p < 0.9) return "idle";
  return "cleared";
};

export const useScrollScenario = () => {
  const [scenario, setScenario] = useState<Scenario>("idle");
  const tickingRef = useRef(false);
  const lastScenarioRef = useRef<Scenario>("idle");

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress = Math.min(scrollTop / docHeight, 1);
        const nextScenario = getScenarioFromProgress(progress);

        if (nextScenario !== lastScenarioRef.current) {
          lastScenarioRef.current = nextScenario;
          setScenario(nextScenario);
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scenario;
};
