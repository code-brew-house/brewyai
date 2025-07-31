import axios from "axios";

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
