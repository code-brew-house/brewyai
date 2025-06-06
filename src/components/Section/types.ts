export type SectionProps = {
  tag?: string;
  title: string;
  description: string;
  rightContainer?: React.ReactNode;
  children: React.ReactNode;
  withoutTopMargin?: boolean;
  centerAlignText?: boolean;
};
