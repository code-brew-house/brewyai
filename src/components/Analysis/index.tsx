import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
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
        <form className="formContainer">
          <FormControl
            variant="outlined"
            sx={{ width: "60%", display: "block" }}
          >
            <FormHelperText id="audioUploadInput-helperText">
              Upload Audio Recording
            </FormHelperText>
            <OutlinedInput
              id="audioUploadInput"
              size="small"
              className="audioInputContainer"
            />
          </FormControl>

          <FormControl variant="outlined">
            <FormHelperText id="audioUploadInput-helperText">
              Questions
            </FormHelperText>
            <OutlinedInput
              id="questionInput"
              size="small"
              className="questionInputContainer"
            />
          </FormControl>

          <FormGroup
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: "8px",
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Generate Summary"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Generate Transcript"
            />
          </FormGroup>

          <Button variant="contained" sx={{ width: "100%" }}>
            Analyze
          </Button>
        </form>
      </div>
    </Section>
  );
};
