import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import brewyAiLogo from "../../assets/brewy-ai-text-logo.png";

export const SignUp = () => {
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
              Sign up to start your free trial
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              Request your demo now, cancel anytime
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

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Your Email Address
            </Typography>
            <TextField
              fullWidth
              type="email"
              placeholder="Enter your email"
              sx={{ mb: 3 }}
            />

            <Button variant="contained" fullWidth sx={{ mb: 3 }}>
              Sign Up with Email
            </Button>

            <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
              By clicking the button above, you agree to our{" "}
              <Link href="/terms" underline="hover">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" underline="hover">
                Privacy Policy
              </Link>
            </Typography>

            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Link href="/login" underline="hover">
                Sign in
              </Link>
            </Typography>
          </Container>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            bgcolor: deepPurple[500],
          }}
        />
      </Box>
    </Box>
  );
};
