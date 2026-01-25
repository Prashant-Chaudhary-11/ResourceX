import { Welcome } from "./Welcome";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FeaturedCards } from "./Featured-cards";
import { Collection } from "./Collection";
import { Hero } from "./Hero-section";
import { Blog } from "./Blog";
import ClickSpark from '../components/ClickSpark';
import { useEffect } from 'react';


export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <ClickSpark
        sparkColor='#000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}
        <Welcome />
        <FeaturedCards />
        <Collection />
        <Hero />
        <Blog />
      </ClickSpark>
    </div>
  );
}