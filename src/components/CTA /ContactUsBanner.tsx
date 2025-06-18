import React from "react";
import { Button, Chip, Box, Typography } from "@mui/material";

export const ContactUsBanner: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EDE7F6",
        padding: "4rem 2rem",
        textAlign: "center",
        borderRadius: 1,
        margin: "2rem 0",
      }}
    >
      <Chip
        label="Contact Us"
        sx={{
          backgroundColor: "white",
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "0.5rem",
          color: "#1A1A1A",
          marginTop: "1rem",
        }}
      >
        Got any questions?
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "1rem",
          color: "#666666",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Get connected with our team today!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: "1rem" }}
        onClick={() =>
          window.open("mailto:brewyai@codebrewhouse.com", "_blank")
        }
      >
        Email Us
      </Button>
    </Box>
  );
};
