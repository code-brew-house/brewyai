import { Box, Card, CardContent, Typography } from "@mui/material";
import { Section } from "../Section";
import "./featuredSectionStyles.css";

const cardData = [
  {
    title: "Transcribe with Precision",
    description:
      "Get fast, accurate, and easy-to-read transcriptions of your uploaded audio.",
  },
  {
    title: "Analyze with Depth",
    description:
      "Go beyond words. Our AI can help you understand the nuances of your audio content.",
  },
  {
    title: "Answer Your Questions, Instantly",
    description:
      "Simply ask Brewy.ai questions about your audio, and get relevant answers in seconds. No more manual searching!",
  },
];

const FeaturedCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" className="featured-card-title">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export const FeaturedSection = () => {
  return (
    <>
      <Section
        title="Transform Your Audio into Actionable Intelligence."
        description="Tired of sifting through hours of recordings? Wish you could instantly find key information buried in your audio files? Brewy.ai is here to help."
      >
        <Box className="featured-section-container">
          {cardData.map((item) => (
            <FeaturedCard {...item} />
          ))}
        </Box>
      </Section>
    </>
  );
};
