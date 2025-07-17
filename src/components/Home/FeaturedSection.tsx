import { Box, Card, CardContent, Typography } from "@mui/material";
// import { Section } from "../Section";
import "./featuredSectionStyles.css";
import { Section } from "./HomeSection";

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
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
          align="left"
        >
          {title}
        </Typography>
        <Typography align="left">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export const FeaturedSection = () => {
  return (
    <>
      <Section
        title={
          <h2 className="featured-section-title">
            Transform Your Audio into&nbsp;
            <span className="underlined-text-highlight">
              Actionable Intelligence
            </span>
          </h2>
        }
        description={
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "text.secondary",
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            Tired of sifting through hours of recordings? <br /> Wish you could
            instantly find key information buried in your audio files? <br />
            <strong className="text-highlight">brewy.ai</strong> is here to
            help!
          </Typography>
        }
      >
        <Box className="featured-section-container" sx={{ marginTop: "2rem" }}>
          {cardData.map((item) => (
            <FeaturedCard {...item} />
          ))}
        </Box>
      </Section>
      {/* <Box sx={{ textAlign: "center", margin: "2rem 0" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "text.secondary",
            marginTop: "0.5rem",
          }}
        >
          Tired of sifting through hours of recordings? <br /> Wish you could
          instantly find key information buried in your audio files? <br />
          <strong className="text-highlight">brewy.ai</strong> is here to help!
        </Typography>

        <Box className="featured-section-container" sx={{ marginTop: "2rem" }}>
          {cardData.map((item) => (
            <FeaturedCard {...item} />
          ))}
        </Box>
      </Box> */}

      {/* <Section
        title="Transform Your Audio into Actionable Intelligence."
        description="Tired of sifting through hours of recordings? Wish you could instantly find key information buried in your audio files? Brewy.ai is here to help."
        centerAlignText
      >
        <Box className="featured-section-container">
          {cardData.map((item) => (
            <FeaturedCard {...item} />
          ))}
        </Box>
      </Section> */}
    </>
  );
};
