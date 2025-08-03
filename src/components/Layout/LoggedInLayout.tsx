import { Grid } from "@mui/material";
import type { LayoutProps } from "./types";
import { NavigationMenu } from "../NavigationMenu";
import { Header } from "../Header";
import "./index.css";

export const LoggedInLayout = ({ children }: LayoutProps) => {
  return (
    <Grid container className="layoutContainer" sx={{ padding: "1rem" }}>
      <Grid size={2} className="layoutSidebar">
        <NavigationMenu />
      </Grid>
      <Grid size={10} className="layoutContent">
        <Header />
        <div className="layoutChildContainer">{children}</div>
      </Grid>
    </Grid>
  );
};
