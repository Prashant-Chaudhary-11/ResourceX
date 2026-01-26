import { Welcome } from "./Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
import { FeaturedCards } from "./Featured-cards";
import { Collection } from "./Collection";
import { Hero } from "./Hero-section";
import { Blog } from "./Blog";
import { PreHome } from "./Pre-home";
import ClickSpark from "../components/ClickSpark";
import { useEffect } from "react";
import Particles from "../components/Particles"; // adjust path if different
// import "./Home.css";

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-page">
      {/* Full-page particles background */}
      <div className="particles-bg" aria-hidden="true">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#a1a1a1", "#8a8a8a", "#787878"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={50}
          disableRotation
        />
      </div>

      {/* Content above particles */}
      <div className="page-content">
        <ClickSpark
          sparkColor="#000"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <PreHome />
          <Welcome />
          <FeaturedCards />
          <Collection />
          <Hero />
          <Blog />
        </ClickSpark>
      </div>
    </div>
  );
};
