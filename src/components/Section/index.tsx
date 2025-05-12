import type { SectionProps } from "./types";

export const Section = ({
  title,
  description,
  rightContainer,
  children,
}: SectionProps) => {
  return (
    <section>
      <div className="flexContainer">
        <div className="leftContainer">
          <div>{title}</div>
          <div>{description}</div>
        </div>
        <div className="rightContainer">{rightContainer}</div>
      </div>
      <div>{children}</div>
    </section>
  );
};
