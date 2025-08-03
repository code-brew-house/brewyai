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
      console.log({ uploadAudioContext: response });

      setState((curr) => ({
        ...curr,
        loading: false,
        jobStatus: response,
      }));
    } catch (error: any) {
      console.error("Error uploading audio", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  const checkAnalysisJobStatus = async (jobId: string) => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await analysisJobStatus(jobId);
      console.log({ checkAnalysisJobStatusContext: response });

      setState((curr) => ({
        ...curr,
        loading: false,
        jobStatus: response,
      }));
    } catch (error: any) {
      console.error("Error checking analysis job status", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  const getAnalysisResult = async (jobId: string) => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await getAnalysisJobResult(jobId);
      console.log({ analysisResultContext: response });

      setState((curr) => ({
        ...curr,
        loading: false,
        analysisResult: response,
      }));
    } catch (error: any) {
      console.error("Error Logging In", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
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
