import { Box } from "@mui/material";
import { Footer } from "../Footer";
import { Header as HomeHeader } from "../Home/HomeHeader";
import type { LayoutProps } from "./types";

export const SiteLayout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ backgroundColor: "#f9fafb", padding: "1rem" }}>
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <HomeHeader />
        <Box sx={{ padding: "1rem" }}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};
