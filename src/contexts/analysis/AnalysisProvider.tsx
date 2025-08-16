import { useState } from "react";
import { AnalysisContext } from "./AnalysisContext";
import type { AnalysisProviderType, AnalysisState } from "./types";
import {
  analysisJobStatus,
  audioAnalysis,
  getAnalysisJobResult,
} from "../../api/analysis";

const initialState: AnalysisState = {
  loading: false,
  error: null,
  jobStatus: null,
  analysisResult: null,
};

export const AnalysisProvider = ({ children }: AnalysisProviderType) => {
  const [state, setState] = useState<AnalysisState>(initialState);

  const uploadAudio = async (file: File) => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await audioAnalysis({ file });

      setState((curr) => ({
        ...curr,
        loading: false,
        jobStatus: response,
      }));
    } catch (error: unknown) {
      console.error("Error uploading audio", error);
      setState((curr) => ({ ...curr, loading: false, error: String(error) }));
    }
  };

  const checkAnalysisJobStatus = async (jobId: string) => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await analysisJobStatus(jobId);

      setState((curr) => ({
        ...curr,
        loading: false,
        jobStatus: response,
      }));

      return response;
    } catch (error: unknown) {
      console.error("Error checking analysis job status", error);
      setState((curr) => ({ ...curr, loading: false, error: String(error) }));
      throw error;
    }
  };

  const getAnalysisResult = async (jobId: string) => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await getAnalysisJobResult(jobId);

      setState((curr) => ({
        ...curr,
        loading: false,
        analysisResult: response,
      }));
    } catch (error: unknown) {
      console.error("Error getting analysis result", error);
      setState((curr) => ({ ...curr, loading: false, error: String(error) }));
    }
  };

  return (
    <AnalysisContext.Provider
      value={{ state, uploadAudio, checkAnalysisJobStatus, getAnalysisResult }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};
