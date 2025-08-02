interface Authority {
  authority: string;
}

export interface User {
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

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "AUTH_TOKEN_RECEIVED" }
  | { type: "USER_LOADED"; payload: User }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "SIGNUP_START" }
  | { type: "SIGNUP_ERROR"; payload: string }
  | { type: "LOGOUT" }
  | { type: "CLEAR_ERROR" };

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  username: string;
  password: string;
  fullName: string;
}
