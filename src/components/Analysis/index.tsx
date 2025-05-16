import { Button, TextField } from "@mui/material";
import { Section } from "../Section";
import "./index.css";

const AnalysisRightContainer = () => {
  return <Button variant="contained">Upload</Button>;
};

export const Analysis = () => {
  return (
    <Section
      title="Audio Analysis"
      description="Analyze your call recording"
      rightContainer={<AnalysisRightContainer />}
    >
      <div className="analysisContainer">
        <form>
          <TextField
            id="audioUploadInput"
            label="Upload your audio recording"
            size="small"
            className="audioInputContainer"
          />
        </form>
      </div>
    </Section>
  );
};
