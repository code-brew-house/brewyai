import { Box, Icon, Typography } from "@mui/material";
import { Section } from "./HomeSection";
import "./keyFeaturesStyles.css";
import {
  CloudUpload,
  Speed,
  QuestionAnswer,
  Security,
  Psychology,
  RecordVoiceOver,
  Download,
  Api,
} from "@mui/icons-material";

const keyFeaturesData = [
  {
    title: "Seamless Audio Upload",
    description: "Easily upload various audio formats.",
    icon: CloudUpload,
  },
  {
    title: "Lightning-Fast AI Transcription",
    description: "Accurate speech-to-text in minutes.",
    icon: Speed,
  },
  {
    title: "Intelligent Q&A",
    description: "Ask natural language questions about your audio content.",
    icon: QuestionAnswer,
  },
  {
    title: "Secure & Confidential",
    description: "Your audio data is treated with the utmost privacy.",
    icon: Security,
  },
  {
    title: "Sentiment Analysis",
    description: "Understand the tone and emotion within your audio.",
    icon: Psychology,
  },
  {
    title: "Speaker Diarization",
    description: "Identify who said what.",
    icon: RecordVoiceOver,
  },
  {
    title: "Export Options",
    description: "Download your transcriptions in various formats.",
    icon: Download,
  },
  {
    title: "API Access",
    description: "Integrate Brewy.ai's power into your own applications.",
    icon: Api,
  },
];

const KeyFeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <Box className="key-feature-card">
      <Icon component={icon} color="primary" />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

const SectionTitle = () => {
  return (
    <h2 className="featured-section-title">
      <span className="underlined-text-highlight">
        Revolutionizing Business
      </span>
      &nbsp;with AI Technology
    </h2>
  );
};

export const KeyFeatures = () => {
  return (
    <Section
      title={<SectionTitle />}
      description="Optimize processes, improve decision-making and foster innovation. Stay ahead in a rapidly changing business landscape."
      tag="Features"
      tagColor="var(--color-violet-300)"
    >
      <Box className="key-features-container">
        {keyFeaturesData.map((item) => (
          <KeyFeatureCard {...item} />
        ))}
      </Box>
    </Section>
  );
};
