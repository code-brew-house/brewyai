import type { LayoutProps } from "./types";
import homeBg from "../../assets/home-bg-1.svg";

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
};
