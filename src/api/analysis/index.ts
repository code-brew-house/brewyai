import axios from "axios";
import type { AudioAnalysisResponse } from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const analysisApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // "Access-Control-Allow-Credentials": "true",
    // "Access-Control-Allow-Headers": "",
    // "Access-Control-Expose-Headers": "*",
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

export const audioAnalysis = async (data: AudioAnalysisResponse) => {
  try {
    const response = await analysisApi.post("", data); // TODO: update
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to upload audio for analysis"
      );
    }
  }
};
