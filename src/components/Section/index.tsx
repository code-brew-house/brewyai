import { Box, Typography } from "@mui/material";
import type { SectionProps } from "./types";
import "./index.css";

export const Section = ({
  title,
  description,
  rightContainer,
  children,
}: SectionProps) => {
  return (
    <section className="section">
      <Box className="flexContainer">
        <Box className="leftContainer">
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#374151",
            }}
          >
            {description}
          </Typography>
        </Box>
        <div className="rightContainer">{rightContainer}</div>
      </Box>
      <Box className="childrenContainer">{children}</Box>
    </section>
  );
};
