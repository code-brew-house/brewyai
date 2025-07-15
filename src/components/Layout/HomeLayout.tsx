import type { LayoutProps } from "./types";

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-violet-100)",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
