import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import brewyAiLogo from "../../assets/brewy-ai-text-logo.png";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const {
    login,
    state: { loading, error },
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
    if (!error) {
      // Navigate to the return URL if available, otherwise go to dashboard
      const from =
        (location.state as { from?: Location })?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    }
  };

  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Left Section - Purple Background */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: deepPurple[500],
          }}
        />

        {/* Right Section - Form */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Container maxWidth="sm">
            <Box sx={{ width: "100%", mb: 6, textAlign: "center" }}>
              <img
                src={brewyAiLogo}
                alt="Brewy AI Logo"
                style={{ maxWidth: "200px" }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Log in to your account
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              Welcome back! Select method to log in.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Button variant="outlined" fullWidth sx={{ mb: 3 }}>
              Continue with Google
            </Button>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Divider sx={{ flex: 1 }} />
              <Typography
                variant="body2"
                sx={{ mx: 2, color: "text.secondary" }}
              >
                OR
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            <form onSubmit={handleSubmit}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Continue with Email
              </Typography>

              <TextField
                fullWidth
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
                required
              />

              <TextField
                fullWidth
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
                required
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                  label="Remember me"
                />
                <Link href="/forgot-password" underline="hover">
                  Forgot Password?
                </Link>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ mb: 3 }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </Button>
            </form>

            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link href="/signup" underline="hover">
                Create an account
              </Link>
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
