import { createContext, useContext, useState, type ReactNode } from "react";
import type {
  AuthState,
  LoginCredentials,
  SignUpCredentials,
} from "../../components/Authentication/types";
import { loginUser, logoutUser, registerSuperOwner } from "../../api/auth";

const AuthContext = createContext<{
  state: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: SignUpCredentials) => Promise<void>;
  logout: () => Promise<void>;
} | null>(null);

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState<AuthState>(initialState);

  const login = async (credentials: LoginCredentials) => {
    try {
      setState((curr) => ({ ...curr, loading: true, error: null }));

      const response = await loginUser(credentials);
      console.log({ response });

      setState((curr) => ({
        ...curr,
        user: response.data,
        loading: false,
        error: null,
      }));
    } catch (error) {
      console.error("Error Logging In", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  const register = async (credentials: SignUpCredentials) => {
    try {
      setState((curr) => ({ ...curr, loading: true, error: null }));

      const response = await registerSuperOwner(credentials);
      console.log({ response });

      setState((curr) => ({
        ...curr,
        loading: false,
        error: null,
        user: response.data,
      }));
    } catch (error) {
      console.error("Error Registering", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setState((curr) => ({
        ...curr,
        loading: false,
        error: null,
        user: null,
      }));
    } catch (error) {
      console.error("Error Logging Out", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
