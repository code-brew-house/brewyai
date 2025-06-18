import { useEffect } from "react";
import { Section } from "../Section";
import { Typography } from "@mui/material";

export const ContactUs = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section
      title="Contact Us"
      description="Got any questions? Schedule a call below at your convenient time and we'll get back to you faster than your top agent!"
      withoutTopMargin
    >
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/neha-codebrewhouse/brewy-ai-discovery-and-demo"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>

      <br />
      <br />

      <div>
        <Typography variant="h6">Want to contact us directly?</Typography>
        <Typography variant="body1">
          Email us at{" "}
          <a href="mailto:brewyai@codebrewhouse.com?subject=brewy.ai Inquiry">
            brewyai@codebrewhouse.com
          </a>
        </Typography>
      </div>
    </Section>
  );
};
