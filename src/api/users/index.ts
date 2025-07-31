import axios from "axios";
import type { AddOwnerToOrganizationRequest } from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const usersApi = axios.create({
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
usersApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// add role as "OWNER", "ADMIN" or "AGENT" to add respective users to the organization
export const addUserToOrganization = async (
  data: AddOwnerToOrganizationRequest,
  organizationId: string
) => {
  try {
    const response = await usersApi.post(
      `/organizations/${organizationId}/users`,
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to add user to organization"
      );
    }
  }
};
