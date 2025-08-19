import {
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const QuestionInput = ({
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
