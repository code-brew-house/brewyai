import { createContext, useContext } from "react";
import { AnalysisProviderType } from "./types";

const AnalysisContext = createContext({
  // state: Analysis,
});

export const AnalysisProvider = ({ children }: AnalysisProviderType) => {};

export const useAnalysis = () => {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
