import { Button } from "@mui/material";
import "./heroStyles.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-text">
            Stop Just Listening,
            <br />
            Start Understanding!
            <br />
            <span>
              <span className="brewy-ai-text">brewy.ai</span> Transcribes,
              Analyzes, and Answers
            </span>
          </h1>

          <p className="hero-subtext">
            Effortlessly upload your audio files and let{" "}
            <span className="brewy-ai-text">brewy.ai</span> provide
            crystal-clear transcriptions and instant answers to your questions
            about the content. Gain deeper insights, save time, and unlock the
            full value of your audio data.
          </p>

          <div className="buttons-container">
            <Button variant="contained" className="hero-button-primary">
              Get Started
            </Button>
            <Button
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
