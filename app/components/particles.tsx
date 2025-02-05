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
          color: "#ff000",
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
            speed: 2,
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
