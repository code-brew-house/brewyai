import { Footer } from "../Footer";
import { Header as HomeHeader } from "../Home/HomeHeader";
import type { LayoutProps } from "./types";

export const SiteLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HomeHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};
