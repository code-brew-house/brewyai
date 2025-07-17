import { Box, Chip, colors, Typography } from "@mui/material";

type SectionProps = {
  tag?: string;
  tagColor?: string;
  title: React.ReactNode;
  description: string | React.ReactNode;
  children: React.ReactNode;
};

export const Section = ({
  tag,
  tagColor,
  title,
  description,
  children,
}: SectionProps) => {
  return (
    <section className="section">
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          justifyItems: "center",
          marginTop: "4rem",
        }}
      >
        {tag && (
          <Chip
            sx={{
              width: "fit-content",
              backgroundColor: tagColor ? tagColor : colors.deepPurple[100],
              fontWeight: "500",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
            label={tag}
          />
        )}
        <Box sx={{ maxWidth: "100%" }}>{title}</Box>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: "70%",
            marginTop: "0.8rem",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box className="childrenContainer">{children}</Box>
    </section>
  );
};
