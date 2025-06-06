import { Button } from "@mui/material";
import "./homeHeaderStyles.css";
import { useNavigate } from "react-router";
import brewyAiLogo from "/src/assets/brewy-ai-text-logo.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={brewyAiLogo} alt="Brewy AI Logo" className="logo" />
          </a>
        </div>
        <div className="home-buttons-container">
          <Button
            variant="outlined"
            className="demo-button"
            onClick={() => navigate("/analysis")}
          >
            Request a Demo
          </Button>
          <Button
            variant="contained"
            className="login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};
