import { Footer } from "../Footer";
import { Header as HomeHeader } from "../Home/HomeHeader";
import type { LayoutProps } from "./types";

export const SiteLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layoutContainer">
      <HomeHeader />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
