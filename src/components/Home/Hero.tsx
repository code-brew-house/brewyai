import { Button } from "@mui/material";
import "./heroStyles.css";
import dashboardImage from "../../assets/dashboard-image.png";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-text">
            Supercharge Your Agent Productivity with{" "}
            <span className="text-highlight">AI-Driven</span> Insights
          </h1>

          <p className="hero-subtext">
            Gain deeper insights, save time, and unlock the full value of your
            audio data.
          </p>

          <div className="buttons-container">
            <Button
              variant="contained"
              className="hero-button-primary"
              onClick={() =>
                window.open(
                  "https://calendly.com/neha-codebrewhouse/brewy-ai-discovery-and-demo",
                  "_blank"
                )
              }
            >
              Schedule Your Demo Now
            </Button>
            {/* <Button
              variant="outlined"
              className="hero-button-secondary"
              onClick={() =>
                window.open(
                  "https://calendly.com/neha-codebrewhouse/brewy-ai-discovery-and-demo",
                  "_blank"
                )
              }
            >
              Request a Demo
            </Button> */}
          </div>

          <img
            src={dashboardImage}
            alt="Dashboard Preview"
            className="hero-dashboard-image"
          />
        </div>
      </div>
    </section>
  );
};
