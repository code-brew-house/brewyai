import axios from "axios";
import type {
  LoginSuperOwnerRequest,
  LoginSuperOwnerResponse,
  RegisterSuperOwnerRequest,
  RegisterSuperOwnerResponse,
} from "./types";

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "",
    "Access-Control-Expose-Headers": "*",
  },
});

// Add token to requests if it exists
authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Register super owner
export const registerSuperOwner = async (
  data: RegisterSuperOwnerRequest
): Promise<RegisterSuperOwnerResponse> => {
  try {
    const response = await authApi.post("/auth/register", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to register super owner"
      );
    }
    throw error;
  }
};

// Login user
export const loginUser = async (
  data: LoginSuperOwnerRequest
): Promise<LoginSuperOwnerResponse> => {
  try {
    const response = await authApi.post("/auth/login", data);
    console.log({ response });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to login super owner"
      );
    }
    throw error;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await authApi.post("/auth/logout");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to logout");
    }
    throw error;
  }
};
