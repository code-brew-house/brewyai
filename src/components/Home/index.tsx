import { Header } from "./HomeHeader";
import { Hero } from "./Hero";
import { FeaturedSection } from "./FeaturedSection";
import { Footer } from "../Footer";
import { KeyFeatures } from "./KeyFeatures";
import { SecondaryCTA } from "./SecondaryCTA";
import { PrimaryCTA } from "./PrimaryCTA";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedSection />
      <PrimaryCTA />
      <KeyFeatures />
      <SecondaryCTA />
      <Footer />
    </>
  );
};
