import { Header } from "./HomeHeader";
import { Hero } from "./Hero";
import { FeaturedSection } from "./FeaturedSection";
import { Footer } from "../Footer";
import { KeyFeatures } from "./KeyFeatures";
import { SecondaryCTA } from "./SecondaryCTA";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedSection />
      <KeyFeatures />
      <SecondaryCTA />
      <Footer />
    </>
  );
};
