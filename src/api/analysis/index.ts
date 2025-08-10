import axios from "axios";
import type {
  AnalysisResult,
  AudioAnalysisRequest,
  AudioAnalysisResponse,
  JobStatusType,
} from "./types";

const API_URL = import.meta.env.VITE_API_URL;

const analysisApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Add token to requests if it exists
analysisApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const audioAnalysis = async (
  data: AudioAnalysisRequest
): Promise<AudioAnalysisResponse> => {
  try {
    const response = await analysisApi.post("/audio-analysis/upload", data); // TODO: update
    console.log({ audioAnalysis: response });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to upload audio for analysis"
      );
    }
    throw error;
  }
};

export const analysisJobStatus = async (
  jobId: string
): Promise<JobStatusType> => {
  try {
    const response = await analysisApi.get(`/audio-analysis/jobs/${jobId}`);
    console.log({ jobStatus: response });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to get analysis job status"
      );
    }
    throw error;
  }
};

export const getAnalysisJobResult = async (
  jobId: string
): Promise<AnalysisResult> => {
  try {
    const response = await analysisApi.get(
      `/audio-analysis/jobs/${jobId}/results;`
    );
    console.log({ jobStatus: response });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to get analysis job result"
      );
    }
    throw error;
  }
};
