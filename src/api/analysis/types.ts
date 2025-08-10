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

export type AudioAnalysisRequest = {
  file: File;
};

export type JobStatusType = {
  id: string;
  status: "pending" | "processing" | "completed" | "failed";
  createdAt: Date;
  updatedAt: Date;
  startedAt?: Date | null;
  completedAt?: Date | null;
  error?: string | null;
  file: FileInfoDto;
};

type FileInfoDto = {
  id: string;
  filename: string;
  size: number;
  mimetype: string;
};

export type AudioAnalysisResponse = JobStatusType;
