import React from "react";
import { Button, Chip } from "@mui/material";
import "./primaryCTAStyles.css";

export const PrimaryCTA: React.FC = () => {
  return (
    <div className="primaryCTA">
      <Chip
        label="Begin Your Journey with brewy.ai"
        sx={{
          fontWeight: 500,
          textTransform: "uppercase",
          marginBottom: "-50px",
          backgroundColor: "var(--color-violet-200)",
        }}
      />
      <h2 className="primaryCTA__title">Experience our AI Solutions Today</h2>
      <p className="primaryCTA__description">
        Transform your business with our innovative AI technology.
        <br />
        Schedule your free demo now!
      </p>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="primaryCTA__button"
        onClick={() => {
          window.open(
            "https://calendly.com/neha-codebrewhouse/brewy-ai-discovery-and-demo",
            "_blank"
          );
        }}
      >
        Get Started
      </Button>
    </div>
  );
};
