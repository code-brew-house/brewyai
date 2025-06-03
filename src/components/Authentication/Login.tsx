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
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import brewyAiLogo from "../../assets/brewy-ai-text-logo.png";

export const Login = () => {
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

            <Typography variant="body1" sx={{ mb: 2 }}>
              Continue with Email
            </Typography>

            <TextField
              fullWidth
              type="email"
              placeholder="Email"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              type="password"
              placeholder="Password"
              sx={{ mb: 2 }}
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
                control={<Checkbox size="small" />}
                label="Remember me"
              />
              <Link href="/forgot-password" underline="hover">
                Forgot Password?
              </Link>
            </Box>

            <Button variant="contained" fullWidth sx={{ mb: 3 }}>
              Log In
            </Button>

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
