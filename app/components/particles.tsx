"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "",
        },
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            distance: 100,
            color: "#c8fcea",
            opacity: 0.4,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
