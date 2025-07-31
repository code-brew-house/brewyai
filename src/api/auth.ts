import axios from "axios";

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface Authority {
  authority: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: Authority[];
}

// Types for our requests and responses
interface SignupData {
  email: string;
  password: string;
  name: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  expiresIn: number;
}

// Create an axios instance with default config
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

// Get current user data
export const getCurrentUser = async (token: string): Promise<User> => {
  try {
    const response = await authApi.get<User>("/users/me", {
      headers: { token },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user data"
      );
    }
    throw error;
  }
};

// Signup API wrapper
export const signup = async (data: SignupData): Promise<AuthResponse> => {
  try {
    const response = await authApi.post<AuthResponse>("/auth/signup", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Signup failed");
    }
    throw error;
  }
};

// Login API wrapper
export const login = async (data: LoginData): Promise<AuthResponse> => {
  try {
    console.log("Making login API request with:", { username: data.username });
    const response = await authApi.post<AuthResponse>("/auth/login", data);
    console.log("Raw API response:", response.data);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Login API error:", error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
    throw error;
  }
};

// Logout API wrapper
export const logout = async (): Promise<void> => {
  try {
    await authApi.post("/auth/logout");
    localStorage.removeItem("token");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Logout failed");
    }
    throw error;
  }
};
