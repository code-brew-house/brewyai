import type { ReactNode } from "react";
import type { AnalysisResult, JobStatusType } from "../../api/analysis/types";

export type AnalysisState = {
  loading: boolean;
  error?: string | null;
  jobStatus: JobStatusType | null;
  analysisResult: AnalysisResult | null;
};

export type AnalysisContextType = {
  state: AnalysisState;
  uploadAudio: (file: File) => Promise<void>;
  checkAnalysisJobStatus: (jobId: string) => void;
  getAnalysisResult: (jobId: string) => void;
};

export type AnalysisProviderType = {
  children: ReactNode;
};
