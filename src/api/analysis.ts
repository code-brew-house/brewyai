import axios from "axios";

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8082/api";

interface AnalysisRequest {
  file: File;
  clientId: string;
  customPrompt?: string;
  questions?: string[];
}

interface AnalysisResponse {
  id: string;
  fileName: string;
  fileFormat: string;
  fileSize: number;
  durationInSeconds: number;
  tonalityResult: TonalityResult[];
  processingTimeMs: number;
}

type TonalityResult = {
  dominantTone?: string;
  confidenceScore?: number;
  toneDescription?: string;
  emotionalRange?: string;
  musicalKey?: string;
  additionalNotes?: string;
};

const analysisApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "",
    "Access-Control-Expose-Headers": "*",
  },
});

analysisApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const analyzeAudio = async (request: AnalysisRequest) => {
  try {
    const response = await analysisApi.post<AnalysisResponse>(
      "/audio/analyze",
      request
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to analyze audio"
      );
    }
    throw error;
  }
};
