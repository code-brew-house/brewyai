import { type ReactElement } from "react";
import { Navigate, useLocation } from "react-router";
import { Box, CircularProgress } from "@mui/material";
import { useAuth } from "../../contexts/auth/useAuth";

interface RequireAuthProps {
  element: ReactElement;
}

export const RequireAuth = ({ element }: RequireAuthProps) => {
  const {
    state: { user, loading },
  } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // If not authenticated, redirect to login with the return url
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected route
  return element;
};
