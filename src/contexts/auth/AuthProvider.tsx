import { useState } from "react";
import type {
  AuthProviderProps,
  AuthState,
  LoginCredentials,
  SignUpCredentials,
} from "./types";
import { loginUser, logoutUser, registerSuperOwner } from "../../api/auth";
import { AuthContext } from "./AuthContext";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState<AuthState>(initialState);

  const login = async (credentials: LoginCredentials) => {
    try {
      setState((curr) => ({ ...curr, loading: true, error: null }));

      const response = await loginUser(credentials);

      if (response?.data && response?.data?.user) {
        setState((curr) => ({
          ...curr,
          user: response?.data.user,
          loading: false,
          error: null,
        }));
      }
    } catch (error: any) {
      console.error("Error Logging In", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  const register = async (credentials: SignUpCredentials) => {
    try {
      setState((curr) => ({ ...curr, loading: true, error: null }));

      const response = await registerSuperOwner(credentials);

      setState((curr) => ({
        ...curr,
        loading: false,
        error: null,
        user: response.data.user,
      }));
    } catch (error: any) {
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
    } catch (error: any) {
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
