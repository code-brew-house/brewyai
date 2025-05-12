import { Grid, Typography } from "@mui/material";
import type { LayoutProps } from "./types";
import { NavigationMenu } from "../NavigationMenu";
import { Header } from "../Header";
import "./index.css";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Grid container className="layoutContainer">
        <Grid
          size={2}
          className="layoutSidebar"
          //   sx={{ backgroundColor: "red" }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              margin: "0px",
              padding: "1rem 2rem",
              borderBottom: "1px solid #f9fafb",
              lineHeight: "1.1",
              fontWeight: "bold",
              boxSizing: "border-box",
              height: "70px",
              placeContent: "center",
            }}
          >
            BrewyAI
          </Typography>
          <NavigationMenu />
        </Grid>
        <Grid
          size={10}
          className="layoutContent"
          //   sx={{ backgroundColor: "green" }}
        >
          <Header />
          <div className="layoutChildContainer">{children}</div>
        </Grid>
      </Grid>
    </>
  );
};
