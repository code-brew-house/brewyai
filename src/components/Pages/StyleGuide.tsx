import { useState } from "react";
import { Section } from "../Section";
import "./StyleGuide.css";

interface ColorSwatch {
  name: string;
  variable: string;
  value: string;
}

const violetPalette: ColorSwatch[] = [
  {
    name: "Violet 100",
    variable: "--color-violet-100",
    value: "oklch(0.943 0.029 294.588)",
  },
  {
    name: "Violet 200",
    variable: "--color-violet-200",
    value: "oklch(0.894 0.057 293.283)",
  },
  {
    name: "Violet 300",
    variable: "--color-violet-300",
    value: "oklch(0.811 0.111 293.571)",
  },
  {
    name: "Violet 400",
    variable: "--color-violet-400",
    value: "oklch(0.702 0.183 293.541)",
  },
  {
    name: "Violet 500",
    variable: "--color-violet-500",
    value: "oklch(0.606 0.25 292.717)",
  },
  {
    name: "Violet 600",
    variable: "--color-violet-600",
    value: "oklch(0.541 0.281 293.009)",
  },
  {
    name: "Violet 700",
    variable: "--color-violet-700",
    value: "oklch(0.491 0.27 292.581)",
  },
  {
    name: "Violet 800",
    variable: "--color-violet-800",
    value: "oklch(0.432 0.232 292.759)",
  },
  {
    name: "Violet 900",
    variable: "--color-violet-900",
    value: "oklch(0.38 0.189 293.745)",
  },
];

const orangePalette: ColorSwatch[] = [
  {
    name: "Orange 100",
    variable: "--color-orange-100",
    value: "oklch(0.954 0.038 75.164)",
  },
  {
    name: "Orange 200",
    variable: "--color-orange-200",
    value: "oklch(0.901 0.076 70.697)",
  },
  {
    name: "Orange 300",
    variable: "--color-orange-300",
    value: "oklch(0.837 0.128 66.29)",
  },
  {
    name: "Orange 400",
    variable: "--color-orange-400",
    value: "oklch(0.75 0.183 55.934)",
  },
  {
    name: "Orange 500",
    variable: "--color-orange-500",
    value: "oklch(0.705 0.213 47.604)",
  },
  {
    name: "Orange 600",
    variable: "--color-orange-600",
    value: "oklch(0.646 0.222 41.116)",
  },
  {
    name: "Orange 700",
    variable: "--color-orange-700",
    value: "oklch(0.553 0.195 38.402)",
  },
  {
    name: "Orange 800",
    variable: "--color-orange-800",
    value: "oklch(0.47 0.157 37.304)",
  },
  {
    name: "Orange 900",
    variable: "--color-orange-900",
    value: "oklch(0.408 0.123 38.172)",
  },
];

const grayPalette: ColorSwatch[] = [
  {
    name: "Gray 100",
    variable: "--color-gray-100",
    value: "oklch(0.967 0.003 264.542)",
  },
  {
    name: "Gray 200",
    variable: "--color-gray-200",
    value: "oklch(0.928 0.006 264.531)",
  },
  {
    name: "Gray 300",
    variable: "--color-gray-300",
    value: "oklch(0.872 0.01 258.338)",
  },
  {
    name: "Gray 400",
    variable: "--color-gray-400",
    value: "oklch(0.707 0.022 261.325)",
  },
  {
    name: "Gray 500",
    variable: "--color-gray-500",
    value: "oklch(0.551 0.027 264.364)",
  },
  {
    name: "Gray 600",
    variable: "--color-gray-600",
    value: "oklch(0.446 0.03 256.802)",
  },
  {
    name: "Gray 700",
    variable: "--color-gray-700",
    value: "oklch(0.373 0.034 259.733)",
  },
  {
    name: "Gray 800",
    variable: "--color-gray-800",
    value: "oklch(0.278 0.033 256.848)",
  },
  {
    name: "Gray 900",
    variable: "--color-gray-900",
    value: "oklch(0.21 0.034 264.665)",
  },
];

const ColorSwatchComponent = ({ swatch }: { swatch: ColorSwatch }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(swatch.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy color value:", err);
    }
  };

  return (
    <div className="swatch-container">
      <div
        className="color-swatch"
        onClick={handleClick}
        style={{
          backgroundColor: `var(${swatch.variable})`,
          cursor: "pointer",
          position: "relative",
        }}
      >
        {copied && <div className="copy-feedback">Copied!</div>}
      </div>
      <div className="swatch-info">
        <span className="swatch-name">{swatch.name}</span>
        <span className="swatch-variable">{swatch.variable}</span>
      </div>
    </div>
  );
};

const ColorPalette = ({
  title,
  palette,
}: {
  title: string;
  palette: ColorSwatch[];
}) => {
  return (
    <div className="color-palette">
      <h3>{title}</h3>
      <div className="swatch-grid">
        {palette.map((swatch) => (
          <ColorSwatchComponent key={swatch.name} swatch={swatch} />
        ))}
      </div>
    </div>
  );
};

export const StyleGuide = () => {
  return (
    <Section
      title="Style Guide"
      description="Color palettes and design tokens"
      withoutTopMargin
    >
      <div className="style-guide">
        <ColorPalette title="Primary Palette" palette={violetPalette} />
        <ColorPalette title="Secondary Palette" palette={orangePalette} />
        <ColorPalette title="Neutral Palette" palette={grayPalette} />
      </div>
    </Section>
  );
};
