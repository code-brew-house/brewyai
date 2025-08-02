export type AnalysisResult = {
  id: string;
  jobId: string;
  transcript: string;
  sentiment: string;
  metadata?: string; // TODO: update
  createdAt: Date;
  job: AnalysisJobDto;
};

type AnalysisJobDto = {
  id: string;
  status: "pending" | "processing" | "completed" | "failed";
  file: AnalysisJobFileDto;
};

type AnalysisJobFileDto = {
  filename: string;
  size: number;
};

export type AudioAnalysisResponse = {
  file: any;
  metadata?: string; // TODO: update
};
