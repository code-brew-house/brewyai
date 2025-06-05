import { Grid } from "@mui/material";
import type { LayoutProps } from "./types";
import { NavigationMenu } from "../NavigationMenu";
import { Header } from "../Header";
// import { Footer } from "../Footer";,
import "./index.css";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Grid container className="layoutContainer">
        <Grid size={2} className="layoutSidebar">
          <NavigationMenu />
        </Grid>
        <Grid size={10} className="layoutContent">
          <Header />
          <div className="layoutChildContainer">{children}</div>
          {/* <Footer /> */}
        </Grid>
      </Grid>
    </>
  );
};
