import {
  Button,
  FormControl,
  CircularProgress,
  InputLabel,
  Alert,
  Snackbar,
} from "@mui/material";
import { Section } from "../Section";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../contexts/auth/useAuth";
import { useAnalysis } from "../../contexts/analysis/useAnalysis";
import type { AlertState, AudioFile } from "./types";
import "./index.css";
import { AudioUpload } from "./AudioUpload";

export const Analysis = () => {
  const [audioFile, setAudioFile] = useState<AudioFile | null>(null);
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    message: "",
    severity: "error",
  });
  const currentJobRef = useRef<string | null>(null);
  const auth = useAuth();
  const analysis = useAnalysis()!;
  const {
    state: { user },
  } = auth!;

  const handleAlert = (newAlert: AlertState) => {
    setAlert(newAlert);
  };

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioFile || !user) return;

    try {
      await analysis.uploadAudio(audioFile.file);
      setAlert({
        open: true,
        message: "Audio uploaded successfully! Analysis in progress...",
        severity: "success",
      });
    } catch (error) {
      console.error("Error analyzing audio:", error);
      setAlert({
        open: true,
        message: "Failed to analyze audio. Please try again.",
        severity: "error",
      });
    }
  };

  // Poll for job status when a job is created
  useEffect(() => {
    const jobId = analysis.state.jobStatus?.jobId;
    const currentStatus = analysis.state.jobStatus?.status;

    // Only start polling if we have a new job that's not the current one
    if (
      jobId &&
      currentStatus !== "completed" &&
      currentStatus !== "failed" &&
      jobId !== currentJobRef.current
    ) {
      currentJobRef.current = jobId;
      console.log(
        "Starting polling for job:"
        // jobId,
        // "with status:",
        // currentStatus
      );

      let isPolling = true;
      const pollInterval = setInterval(async () => {
        if (!isPolling) return;

        try {
          console.log("Polling job status for job:");
          // Call the API function to get the latest status
          const jobStatus = await analysis.checkAnalysisJobStatus(jobId);

          console.log("Job status response:", jobStatus);

          if (jobStatus.status === "completed") {
            console.log("Job completed, getting result for job:");
            isPolling = false;
            clearInterval(pollInterval);

            try {
              await analysis.getAnalysisResult(jobId);
              console.log("Successfully got analysis result for job:");
            } catch (resultError) {
              console.error("Error getting analysis result:", resultError);
            }

            setAlert({
              open: true,
              message: "Analysis completed successfully!",
              severity: "success",
            });
          } else if (jobStatus.status === "failed") {
            console.log(
              "Job failed for job:"
              // , jobId
            );
            isPolling = false;
            clearInterval(pollInterval);
            setAlert({
              open: true,
              message: "Analysis failed. Please try again.",
              severity: "error",
            });
          } else {
            console.log(
              "Job still processing, status:"
              // jobStatus.status,
              // "for job:",
              // jobId
            );
          }
        } catch (error) {
          console.error("Error polling job status for job:", jobId, error);
          isPolling = false;
          clearInterval(pollInterval);
        }
      }, 500);

      return () => {
        if (isPolling) {
          isPolling = false;
          clearInterval(pollInterval);
        }
      };
    }
  }, [analysis.state.jobStatus?.jobId]); // Only depend on jobId, not status

  // Show error from context
  useEffect(() => {
    if (analysis.state.error) {
      setAlert({
        open: true,
        message:
          typeof analysis.state.error === "string"
            ? analysis.state.error
            : "An error occurred during analysis",
        severity: "error",
      });
    }
  }, [analysis.state.error]);

  console.log({ state: analysis.state });

  return (
    <Section
      title="Audio Analysis"
      description="Get instant transcriptions and answers from your audio content. Simply upload your file and start querying."
      withoutTopMargin
    >
      <div className="analysisContainer">
        <form className="formContainer" onSubmit={handleAnalyze}>
          <FormControl
            variant="outlined"
            sx={{ width: "100%", display: "block", marginBottom: "16px" }}
          >
            <InputLabel
              htmlFor="audioUploadInput"
              shrink={false}
              sx={{
                position: "static",
                color: "rgba(0, 0, 0, 0.87)",
                fontWeight: 500,
                transform: "none",
                marginBottom: "8px",
              }}
            >
              Upload Audio Recording
            </InputLabel>
            <AudioUpload onFileChange={setAudioFile} onAlert={handleAlert} />
            {/* <QuestionInput onQuestionsChange={setQuestions} /> */}
          </FormControl>

          {!analysis.state.jobStatus && (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              type="submit"
              disabled={!audioFile || analysis.state.loading}
            >
              {analysis.state.loading ? "Analyzing..." : "Analyze"}
            </Button>
          )}

          {analysis.state.jobStatus && (
            <Button
              variant="contained"
              sx={{ width: "100%", textTransform: "capitalize" }}
            >
              {analysis.state.jobStatus.status === "processing" && (
                <CircularProgress
                  size={20}
                  style={{
                    marginLeft: "8px",
                    marginRight: "8px",
                    color: "white",
                  }}
                />
              )}
              &nbsp;&nbsp;
              {analysis.state.jobStatus.status}
            </Button>
          )}
        </form>

        {/* Display analysis result */}
        {analysis.state.analysisResult && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "#e8f5e8",
              borderRadius: "4px",
            }}
          >
            <h4>Analysis Result</h4>
            <p>
              <strong>Transcript:</strong>{" "}
              {analysis.state.analysisResult.transcript}
            </p>
            <p>
              <strong>Sentiment:</strong>{" "}
              {analysis.state.analysisResult.sentiment}
            </p>
          </div>
        )}
      </div>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Section>
  );
};
