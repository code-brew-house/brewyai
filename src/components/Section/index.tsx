import { Box, Chip, colors, Typography } from "@mui/material";
import type { SectionProps } from "./types";
import "./index.css";

export const Section = ({
  tag,
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
        <Box
          className="leftContainer"
          width={rightContainer ? "50%" : "100%"}
          sx={{
            display: "grid",
            placeItems: !rightContainer && centerAlignText ? "center" : "left",
          }}
        >
          {tag && (
            <Chip
              sx={{
                width: "fit-content",
                backgroundColor: colors.deepPurple[100],
                fontWeight: "500",
                textTransform: "uppercase",
                marginBottom: "10px",
                marginLeft: !rightContainer && centerAlignText ? "auto" : "0",
                marginRight: !rightContainer && centerAlignText ? "auto" : "0",
              }}
              label={tag}
            />
          )}
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: !rightContainer && centerAlignText ? "center" : "left",
              maxWidth: !rightContainer && centerAlignText ? "100%" : "50%",
              margin: !rightContainer && centerAlignText ? "auto" : "0",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#374151",
              textAlign: !rightContainer && centerAlignText ? "center" : "left",
              maxWidth: !rightContainer && centerAlignText ? "80%" : "65%",
              margin: !rightContainer && centerAlignText ? "auto" : "0",
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
