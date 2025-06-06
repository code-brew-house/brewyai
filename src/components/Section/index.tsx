import { Box, Typography } from "@mui/material";
import type { SectionProps } from "./types";
import "./index.css";

export const Section = ({
  title,
  description,
  rightContainer,
  children,
  withoutTopMargin,
  centerAlignText,
}: SectionProps) => {
  return (
    <section
      className={`section ${withoutTopMargin ? "withoutTopMargin" : ""}`}
    >
      <Box className="flexContainer">
        <Box className="leftContainer" width={rightContainer ? "50%" : "100%"}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: centerAlignText ? "center" : "left",
              maxWidth: "50%",
              margin: "auto",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#374151",
              textAlign: centerAlignText ? "center" : "left",
              maxWidth: "65%",
              margin: "auto",
              marginTop: "0.8rem",
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
