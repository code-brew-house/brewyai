import { useReducer, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import type {
  AuthState,
  AuthAction,
  LoginCredentials,
  SignUpCredentials,
} from "../../components/Authentication/types";
import {
  login as loginApi,
  signup as signupApi,
  logout as logoutApi,
} from "../../api/auth";
import axios from "axios";
import { AuthContext } from "./AuthContext";

// Initial state
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
    case "SIGNUP_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_ERROR":
    case "SIGNUP_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        error: null,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

// Auth Provider component
function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for stored token on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await axios.get("/api/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
          } else {
            localStorage.removeItem("token");
            dispatch({ type: "LOGOUT" });
          }
        } catch (error) {
          console.error("Error restoring session:", error);
          localStorage.removeItem("token");
          dispatch({ type: "LOGOUT" });
        }
      } else {
        dispatch({ type: "LOGOUT" });
      }
    };

    initializeAuth();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      dispatch({ type: "LOGIN_START" });
      const response = await loginApi(credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.user });
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "An error occurred during login",
      });
    }
  }, []);

  const signup = useCallback(async (credentials: SignUpCredentials) => {
    try {
      dispatch({ type: "SIGNUP_START" });
      const response = await signupApi(credentials);
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.user });
    } catch (error) {
      dispatch({
        type: "SIGNUP_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "An error occurred during signup",
      });
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutApi();
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error during logout:", error);
      // Still clear local state even if the API call fails
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: "CLEAR_ERROR" });
  }, []);

  const value = {
    state,
    login,
    signup,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
