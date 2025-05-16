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
    <section>
      <Box className="flexContainer">
        <Box className="leftContainer">
          <Typography className="sectionTitle">{title}</Typography>
          <Typography className="sectionDescription">{description}</Typography>
        </Box>
        <div className="rightContainer">{rightContainer}</div>
      </Box>
      <div>{children}</div>
    </section>
  );
};
