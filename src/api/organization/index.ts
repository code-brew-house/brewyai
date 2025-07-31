import axios from "axios";
import type {
  CreateOrganizationRequest,
  GetOrganizationByIdRequest,
} from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const organizationApi = axios.create({
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
organizationApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createOrganization = async (data: CreateOrganizationRequest) => {
  try {
    const response = await organizationApi.post("/organizations", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to create organization"
      );
    }
  }
};

export const getAllOrganizations = async () => {
  try {
    const response = await organizationApi.get("/organizations");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to get organizations"
      );
    }
  }
};

export const getOrganizationById = async (data: GetOrganizationByIdRequest) => {
  try {
    const response = await organizationApi.get(
      `/organization/${data.organizationId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to get organization"
      );
    }
  }
};
