import { useContext } from "react";
import { AnalysisContext } from "./AnalysisContext";

export const useAnalysis = () => {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
