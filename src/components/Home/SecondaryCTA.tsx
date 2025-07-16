import { Button, Chip, colors } from "@mui/material";
import "./secondaryCTAStyles.css";

export const SecondaryCTA = () => {
  return (
    <div className="secondary-cta">
      <div className="secondary-cta__content">
        <Chip
          label="How We Can Help You"
          sx={{
            backgroundColor: colors.deepPurple[100],
            fontWeight: 500,
            textTransform: "uppercase",
            marginBottom: "-30px",
          }}
        />
        <h2 className="secondary-cta__title">
          Looking to improve your customer engagement?
        </h2>
        <p className="secondary-cta__description">
          Experience how brewy.ai can help your business drive better decisions
          and outcomes through data-driven insights
        </p>
        <Button
          variant="contained"
          className="secondary-cta__button"
          onClick={() => {
            window.open(
              "https://calendly.com/neha-codebrewhouse/brewy-ai-discovery-and-demo",
              "_blank"
            );
          }}
        >
          Request Demo
        </Button>
      </div>
    </div>
  );
};
