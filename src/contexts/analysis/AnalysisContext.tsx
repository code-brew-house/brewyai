import { createContext } from "react";
import type { AnalysisProviderType } from "./types";

export const AnalysisContext = createContext({
  // state: Analysis,
});

export const AnalysisProvider = ({ children }: AnalysisProviderType) => {
  return (
    <AnalysisContext.Provider value={{}}>{children}</AnalysisContext.Provider>
  );
};
