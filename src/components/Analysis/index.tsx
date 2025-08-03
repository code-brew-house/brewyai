import {
  Button,
  FormControl,
  OutlinedInput,
  CircularProgress,
  IconButton,
  InputLabel,
  Alert,
  Snackbar,
} from "@mui/material";
import { Section } from "../Section";
import "./index.css";
import { useState, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../contexts/auth/useAuth";
import { useAnalysis } from "../../contexts/analysis/useAnalysis";
import type { AlertState, AudioFile } from "./types";

const AudioUpload = ({
  onFileChange,
  onAlert,
}: {
  onFileChange: (file: AudioFile | null) => void;
  onAlert: (alert: AlertState) => void;
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<AudioFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("audio/")) {
      onAlert({
        open: true,
        message: "Please upload an audio file",
        severity: "error",
      });
      return;
    }

    setIsUploading(true);
    try {
      // Create object URL for audio playback
      const url = URL.createObjectURL(file);

      const audioFile = {
        name: file.name,
        size: file.size,
        file,
        url,
      };
      setUploadedFile(audioFile);
      onFileChange(audioFile);
    } catch (error) {
      console.error("Error uploading file:", error);
      onAlert({
        open: true,
        message: "Failed to upload file",
        severity: "error",
      });
      onFileChange(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    if (uploadedFile?.url) {
      URL.revokeObjectURL(uploadedFile.url);
    }
    setUploadedFile(null);
    onFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (isUploading) {
    return (
      <div className="uploadingContainer">
        <CircularProgress size={24} />
        <span>Uploading audio...</span>
      </div>
    );
  }

  if (uploadedFile) {
    return (
      <>
        <OutlinedInput
          id="audioUploadInput"
          size="small"
          className="audioInputContainer"
          fullWidth
          value={uploadedFile.name}
          readOnly
          endAdornment={
            <IconButton size="small" onClick={handleRemoveFile}>
              <CloseIcon />
            </IconButton>
          }
        />
        <audio
          controls
          src={uploadedFile.url}
          style={{ width: "100%", marginTop: "8px" }}
        />
      </>
    );
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*"
        style={{ display: "none" }}
      />
      <OutlinedInput
        id="audioUploadInput"
        size="small"
        className="audioInputContainer"
        fullWidth
        onClick={triggerFileInput}
        readOnly
        placeholder="Click to upload audio file"
        endAdornment={
          <IconButton size="small" onClick={triggerFileInput}>
            <AttachFileIcon />
          </IconButton>
        }
      />
    </>
  );
};

// const QuestionInput = ({
//   onQuestionsChange,
// }: {
//   onQuestionsChange: (questions: string[]) => void;
// }) => {
//   const [questions, setQuestions] = useState<string[]>([""]);
//   const [showAddButton, setShowAddButton] = useState(false);

//   const handleQuestionChange = (index: number, value: string) => {
//     const newQuestions = [...questions];
//     newQuestions[index] = value;
//     setQuestions(newQuestions);
//     onQuestionsChange(newQuestions);

//     // Show/hide add button based on if any question has content
//     setShowAddButton(newQuestions.some((q) => q.trim() !== ""));
//   };

//   const addQuestion = () => {
//     if (questions.length < 8) {
//       const newQuestions = [...questions, ""];
//       setQuestions(newQuestions);
//       onQuestionsChange(newQuestions);
//     }
//   };

//   const removeQuestion = (index: number) => {
//     const newQuestions = questions.filter((_, i) => i !== index);
//     setQuestions(newQuestions);
//     onQuestionsChange(newQuestions);
//     if (newQuestions.every((q) => q.trim() === "")) {
//       setShowAddButton(false);
//     }
//   };

//   return (
//     <div className="questionsContainer">
//       {questions.map((question, index) => (
//         <div key={index} className="questionInputWrapper">
//           <Typography variant="body2" className="questionNumber">
//             {index + 1}
//           </Typography>
//           <FormControl variant="outlined" fullWidth>
//             <OutlinedInput
//               size="small"
//               value={question}
//               onChange={(e) => handleQuestionChange(index, e.target.value)}
//               placeholder={`Question ${index + 1}`}
//               className="questionInput"
//             />
//           </FormControl>
//           {index > 0 && (
//             <IconButton
//               size="small"
//               onClick={() => removeQuestion(index)}
//               className="removeQuestionButton"
//             >
//               <CloseIcon />
//             </IconButton>
//           )}
//         </div>
//       ))}
//       {showAddButton && questions.length < 8 && (
//         <Button
//           variant="text"
//           onClick={addQuestion}
//           className="addQuestionButton"
//           size="small"
//         >
//           Add Question
//         </Button>
//       )}
//       {questions.length >= 8 && (
//         <Typography
//           variant="caption"
//           color="text.secondary"
//           className="maxQuestionsNote"
//         >
//           Maximum number of questions reached (8)
//         </Typography>
//       )}
//     </div>
//   );
// };

export const Analysis = () => {
  const [audioFile, setAudioFile] = useState<AudioFile | null>(null);
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    message: "",
    severity: "error",
  });
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
    if (
      analysis.state.jobStatus?.id &&
      analysis.state.jobStatus.status !== "completed" &&
      analysis.state.jobStatus.status !== "failed"
    ) {
      const pollInterval = setInterval(async () => {
        try {
          await analysis.checkAnalysisJobStatus(analysis.state.jobStatus!.id);

          // If job is completed, get the result
          if (analysis.state.jobStatus?.status === "completed") {
            await analysis.getAnalysisResult(analysis.state.jobStatus.id);
            clearInterval(pollInterval);
            setAlert({
              open: true,
              message: "Analysis completed successfully!",
              severity: "success",
            });
          } else if (analysis.state.jobStatus?.status === "failed") {
            clearInterval(pollInterval);
            setAlert({
              open: true,
              message: "Analysis failed. Please try again.",
              severity: "error",
            });
          }
        } catch (error) {
          console.error("Error polling job status:", error);
          clearInterval(pollInterval);
        }
      }, 5000); // Poll every 5 seconds

      return () => clearInterval(pollInterval);
    }
  }, [analysis.state.jobStatus?.id, analysis.state.jobStatus?.status]);

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
          </FormControl>

          <Button
            variant="contained"
            sx={{ width: "100%" }}
            type="submit"
            disabled={!audioFile || analysis.state.loading}
          >
            {analysis.state.loading ? "Analyzing..." : "Analyze"}
          </Button>
        </form>

        {/* Display job status */}
        {analysis.state.jobStatus && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
            }}
          >
            <h4>Analysis Status</h4>
            <p>Status: {analysis.state.jobStatus.status}</p>
            {analysis.state.jobStatus.status === "processing" && (
              <CircularProgress size={20} style={{ marginLeft: "8px" }} />
            )}
          </div>
        )}

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
