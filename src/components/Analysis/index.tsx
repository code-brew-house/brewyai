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
import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { analyzeAudio } from "../../api/analysis/old";
import { useAuth } from "../../contexts/auth/useAuth";

interface AudioFile {
  name: string;
  size: number;
  file: File;
  url: string;
}

interface AlertState {
  open: boolean;
  message: string;
  severity: "error" | "warning" | "info" | "success";
}

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
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    message: "",
    severity: "error",
  });
  const {
    state: { user },
  } = useAuth();

  const handleAlert = (newAlert: AlertState) => {
    setAlert(newAlert);
  };

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioFile || !user) return;

    setIsAnalyzing(true);
    try {
      const response = await analyzeAudio({
        file: audioFile.file,
        // clientId: user.id.toString(),
        clientId: "clientId1",
        customPrompt: "dominantTone",
      });
      console.log("Analysis response:", response);
      // TODO: Handle the analysis response (e.g., show results, navigate to reports)
    } catch (error) {
      console.error("Error analyzing audio:", error);
      setAlert({
        open: true,
        message: "Failed to analyze audio. Please try again.",
        severity: "error",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

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

          {/* <FormControl
            variant="outlined"
            sx={{ width: "100%", display: "block", marginBottom: "16px" }}
          >
            <InputLabel
              htmlFor="questionsInput"
              shrink={false}
              sx={{
                position: "static",
                color: "rgba(0, 0, 0, 0.87)",
                fontWeight: 500,
                transform: "none",
                marginBottom: "8px",
              }}
            >
              Questions
            </InputLabel>
            <QuestionInput onQuestionsChange={setQuestions} />
          </FormControl> */}

          {/* <FormGroup
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: "8px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={generateSummary}
                  onChange={(e) => setGenerateSummary(e.target.checked)}
                />
              }
              label="Generate Summary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={generateTranscript}
                  onChange={(e) => setGenerateTranscript(e.target.checked)}
                />
              }
              label="Generate Transcript"
            />
          </FormGroup> */}

          <Button
            variant="contained"
            sx={{ width: "100%" }}
            type="submit"
            disabled={!audioFile || isAnalyzing}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze"}
          </Button>
        </form>
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
