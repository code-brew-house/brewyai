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
  IconButton,
  InputAdornment,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import brewyAiLogo from "../../assets/brewy-ai-text-logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth/useAuth";
import { useOrganization } from "../../contexts/organization/useOrganization";

export const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();
  const {
    login,
    state: { loading, error, user },
  } = auth!;
  const navigate = useNavigate();
  const org = useOrganization();
  const { getCurrentOrganization } = org!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ identifier, password });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // Handle navigation after successful login
  useEffect(() => {
    // const getUserOrganizationDetails = async () => {
    //   if (user)
    //     await getCurrentOrganization({ organizationId: user.organizationId });
    // };

    if (!loading && !error && !!user) {
      // if (user && user.organizationId) getUserOrganizationDetails();
      navigate("/analysis", { replace: true });
    }
  }, [loading, error, user, navigate, getCurrentOrganization]);

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
        {/* Left Section */}
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
                style={{ maxWidth: "200px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: "bold", textAlign: "center" }}
            >
              Welcome back
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, textAlign: "center", color: "text.secondary" }}
            >
              Log in to your account
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
              <TextField
                fullWidth
                type="text"
                placeholder="Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                sx={{ mb: 2 }}
                required
              />

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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

            {/* <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link href="/signup" underline="hover">
                Create an account
              </Link>
            </Typography> */}

            <Box height={50}></Box>
          </Container>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: deepPurple[500],
          }}
        >
          {/* <Box
            sx={{
              width: "75%",
              borderRadius: "10px",
              backgroundColor: "white",
              opacity: "0.5",
              zIndex: 1,
            }}
          ></Box> */}
        </Box>
      </Box>
    </Box>
  );
};
