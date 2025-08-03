import type { ReactNode } from "react";
import type { User } from "../../components/Authentication/types";

export type LoginCredentials = {
  identifier: string;
  password: string;
};

export type SignUpCredentials = {
  email: string;
  username: string;
  password: string;
  fullName: string;
};

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

export type AuthProviderProps = {
  children: ReactNode;
};
