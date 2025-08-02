import { createContext } from "react";
import type {
  AuthState,
  LoginCredentials,
  SignUpCredentials,
} from "../../components/Authentication/types";

// Create context
export const AuthContext = createContext<
  | {
      state: AuthState;
      login: (credentials: LoginCredentials) => Promise<void>;
      register: (credentials: SignUpCredentials) => Promise<void>;
      logout: () => Promise<void>;
      clearError: () => void;
    }
  | undefined
>(undefined);
