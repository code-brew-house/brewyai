import { Button } from "@mui/material";
import "./homeHeaderStyles.css";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img
              src="/src/assets/brewy-ai-text-logo.png"
              alt="Brewy AI Logo"
              className="logo"
            />
          </a>
        </div>
        <div className="home-buttons-container">
          <Button variant="outlined" className="demo-button">
            Request a Demo
          </Button>
          <Button variant="contained" className="login-button">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};
