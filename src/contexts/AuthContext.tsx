import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import type {
  AuthState,
  AuthAction,
  User,
  LoginCredentials,
  SignUpCredentials,
} from "../components/Authentication/types";

// Initial state
const initialState: AuthState = {
  user: null,
  loading: true, // Changed to true initially while we check for stored token
  error: null,
};

// Create context
const AuthContext = createContext<
  | {
      state: AuthState;
      login: (credentials: LoginCredentials) => Promise<void>;
      signup: (credentials: SignUpCredentials) => Promise<void>;
      logout: () => void;
      clearError: () => void;
    }
  | undefined
>(undefined);

// Auth reducer
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
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for stored token on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem("auth_token");

      if (storedToken) {
        try {
          // TODO: Replace with your actual API call to validate token and get user data
          const response = await fetch("/api/me", {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            const user: User = await response.json();
            dispatch({ type: "LOGIN_SUCCESS", payload: user });
          } else {
            // If token is invalid, remove it
            localStorage.removeItem("auth_token");
            dispatch({ type: "LOGOUT" });
          }
        } catch (error) {
          console.error("Error restoring session:", error);
          localStorage.removeItem("auth_token");
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

      // TODO: Replace with your actual API call
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const user: User = await response.json();
      dispatch({ type: "LOGIN_SUCCESS", payload: user });

      // Store the token in localStorage
      localStorage.setItem("auth_token", user.id);
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

      // TODO: Replace with your actual API call
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const user: User = await response.json();
      dispatch({ type: "SIGNUP_SUCCESS", payload: user });

      // Store the token in localStorage
      localStorage.setItem("auth_token", user.id);
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

  const logout = useCallback(() => {
    localStorage.removeItem("auth_token");
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

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
