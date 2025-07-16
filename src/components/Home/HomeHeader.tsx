import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import "./homeHeaderStyles.css";
import { useNavigate } from "react-router";
import brewyAiLogo from "/src/assets/brewy-ai-text-logo.png";
import useAuth from "../../contexts/auth/useAuth";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const {
    state: { user },
    logout,
  } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
    await logout();
    navigate("/");
  };

  // Get user initials from name or email
  const getInitials = () => {
    if (user?.username) {
      return user.username
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return user?.email
      ? user.email.split("@")[0].slice(0, 2).toUpperCase()
      : "U";
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={brewyAiLogo} alt="Brewy AI Logo" className="home-logo" />
          </a>
        </div>
        <div className="home-buttons-container">
          <Button
            variant="outlined"
            className="demo-button"
            onClick={() =>
              window.open(
                "https://calendly.com/neha-codebrewhouse/brewy-ai-discovery-and-demo",
                "_blank"
              )
            }
          >
            Request a Demo
          </Button>
          {user ? (
            <>
              <Avatar
                sx={{
                  bgcolor: "#1976d2",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#1565c0",
                  },
                }}
                onClick={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                {getInitials()}
              </Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => navigate("/dashboard")}>
                  Dashboard
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="contained"
              className="login-button"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
