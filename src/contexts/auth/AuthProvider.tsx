import { useReducer, useCallback } from "react";
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
  getCurrentUser,
} from "../../api/auth";
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
    case "AUTH_TOKEN_RECEIVED":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "USER_LOADED":
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

  // Function to fetch user data
  const fetchUserData = useCallback(async (token: string) => {
    try {
      const userData = await getCurrentUser(token);
      dispatch({ type: "USER_LOADED", payload: userData });
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch({
        type: "LOGIN_ERROR",
        payload: "Failed to load user data",
      });
    }
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      try {
        console.log("Starting login process...");
        dispatch({ type: "LOGIN_START" });
        const response = await loginApi(credentials);
        console.log("Login API response:", response);

        // After receiving the token, fetch user data
        dispatch({ type: "AUTH_TOKEN_RECEIVED" });
        await fetchUserData(response.token);
      } catch (error) {
        console.error("Login error:", error);
        dispatch({
          type: "LOGIN_ERROR",
          payload:
            error instanceof Error
              ? error.message
              : "An error occurred during login",
        });
      }
    },
    [fetchUserData]
  );

  const signup = useCallback(async (credentials: SignUpCredentials) => {
    try {
      dispatch({ type: "SIGNUP_START" });
      await signupApi(credentials);
      // Don't fetch user data after signup since we don't get a token
      dispatch({ type: "LOGOUT" });
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
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
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
