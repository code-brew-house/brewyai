import { useEffect, useState } from "react";
import useAuth from "../../contexts/auth/useAuth";
import { useNavigate } from "react-router";
import { Box, CircularProgress, Typography } from "@mui/material";

export const Logout = () => {
  const [error, setError] = useState<string | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
        navigate("/login", { replace: true });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An error occurred during logout"
        );
        // Navigate to login after a short delay even if there was an error
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
      }
    };

    performLogout();
  }, [logout, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography variant="h6">{error ? error : "Logging out..."}</Typography>
    </Box>
  );
};
