import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  OutlinedInput,
  CircularProgress,
  IconButton,
  Typography,
  InputLabel,
} from "@mui/material";
import { Section } from "../Section";
import "./index.css";
import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";

interface AudioFile {
  name: string;
  size: number;
}

const AudioUpload = ({
  onFileChange,
}: {
  onFileChange: (file: AudioFile | null) => void;
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<AudioFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("audio/")) {
      alert("Please upload an audio file");
      return;
    }

    setIsUploading(true);
    try {
      // Simulate upload delay - replace this with actual upload logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const audioFile = {
        name: file.name,
        size: file.size,
      };
      setUploadedFile(audioFile);
      onFileChange(audioFile);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
      onFileChange(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
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
      <div className="uploadedFileContainer">
        <div className="fileInfo">
          <AttachFileIcon />
          <span className="fileName">{uploadedFile.name}</span>
        </div>
        <IconButton
          size="small"
          onClick={handleRemoveFile}
          className="removeButton"
        >
          <CloseIcon />
        </IconButton>
      </div>
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

const QuestionInput = ({
  onQuestionsChange,
}: {
  onQuestionsChange: (questions: string[]) => void;
}) => {
  const [questions, setQuestions] = useState<string[]>([""]);
  const [showAddButton, setShowAddButton] = useState(false);

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
    onQuestionsChange(newQuestions);

    // Show/hide add button based on if any question has content
    setShowAddButton(newQuestions.some((q) => q.trim() !== ""));
  };

  const addQuestion = () => {
    if (questions.length < 8) {
      const newQuestions = [...questions, ""];
      setQuestions(newQuestions);
      onQuestionsChange(newQuestions);
    }
  };

  const removeQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    onQuestionsChange(newQuestions);
    if (newQuestions.every((q) => q.trim() === "")) {
      setShowAddButton(false);
    }
  };

  return (
    <div className="questionsContainer">
      {questions.map((question, index) => (
        <div key={index} className="questionInputWrapper">
          <Typography variant="body2" className="questionNumber">
            {index + 1}
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              size="small"
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder={`Question ${index + 1}`}
              className="questionInput"
            />
          </FormControl>
          {index > 0 && (
            <IconButton
              size="small"
              onClick={() => removeQuestion(index)}
              className="removeQuestionButton"
            >
              <CloseIcon />
            </IconButton>
          )}
        </div>
      ))}
      {showAddButton && questions.length < 8 && (
        <Button
          variant="text"
          onClick={addQuestion}
          className="addQuestionButton"
          size="small"
        >
          Add Question
        </Button>
      )}
      {questions.length >= 8 && (
        <Typography
          variant="caption"
          color="text.secondary"
          className="maxQuestionsNote"
        >
          Maximum number of questions reached (8)
        </Typography>
      )}
    </div>
  );
};

export const Analysis = () => {
  const [audioFile, setAudioFile] = useState<AudioFile | null>(null);
  const [questions, setQuestions] = useState<string[]>([""]);
  const [generateSummary, setGenerateSummary] = useState(false);
  const [generateTranscript, setGenerateTranscript] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();

    const analysisData = {
      audioFile,
      questions: questions.filter((q) => q.trim() !== ""), // Only include non-empty questions
      generateSummary,
      generateTranscript,
    };

    console.log("Analysis Data:", analysisData);
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
            <AudioUpload onFileChange={setAudioFile} />
          </FormControl>

          <FormControl
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
          </FormGroup>

          <Button variant="contained" sx={{ width: "100%" }} type="submit">
            Analyze
          </Button>
        </form>
      </div>
    </Section>
  );
};
