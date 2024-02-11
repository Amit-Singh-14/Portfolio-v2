// import React from "react";
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// function ParticlesAnimation() {
//   const particlesInit = async (main) => {
//     console.log(main);
//     await loadFull(main);
//   };
//   const particlesLoaded = (container) => {
//     console.log(container);
//   };
//   return (
//     <Particles
//       options={particleConfig}
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//     />
//   );
// }

// export default ParticlesAnimation;

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
import particleConfig from "./paricleconfig";

const ParticlesAnimation = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
      } catch (error) {
        console.error("Error during particles initialization:", error);
      }
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return init;
};

export default ParticlesAnimation;
