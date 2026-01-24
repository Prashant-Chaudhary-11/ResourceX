import { Welcome } from "./Welcome";
import { FeaturedCards } from "./Featured-cards";
import { Collection } from "./Collection";
import { Hero } from "./Hero-section";
import { Blog } from "./Blog";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <FeaturedCards />
      <Collection />
      <Hero />
      <Blog />
    </div>
  );
}