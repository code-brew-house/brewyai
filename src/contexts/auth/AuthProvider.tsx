// import { useReducer, useCallback } from "react";
// import type { ReactNode } from "react";
// import type {
//   AuthState,
//   AuthAction,
//   LoginCredentials,
//   SignUpCredentials,
// } from "../../components/Authentication/types";
// import { registerSuperOwner, loginUser, logoutUser } from "../../api/auth";
// import { AuthContext } from "./AuthContext";

// // Initial state
// const initialState: AuthState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// function authReducer(state: AuthState, action: AuthAction): AuthState {
//   switch (action.type) {
//     case "LOGIN_START":
//     case "SIGNUP_START":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "AUTH_TOKEN_RECEIVED":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "USER_LOADED":
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_ERROR":
//     case "SIGNUP_ERROR":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         user: null,
//         error: null,
//       };
//     case "CLEAR_ERROR":
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// }

// // Auth Provider component
// function AuthProvider({ children }: { children: ReactNode }) {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   console.log({ user: state.user });

//   const login = useCallback(async (credentials: LoginCredentials) => {
//     try {
//       console.log("Starting login process...");

//       console.log("dispatching LOGIN_START");
//       dispatch({ type: "LOGIN_START" });

//       const response = await loginUser(credentials);
//       console.log("Login API response:", response);

//       // After receiving the token, fetch user data
//       console.log("dispatching USER_LOADED");
//       dispatch({ type: "USER_LOADED", payload: response });
//     } catch (error) {
//       console.error("Login error:", error);
//       dispatch({
//         type: "LOGIN_ERROR",
//         payload:
//           error instanceof Error
//             ? error.message
//             : "An error occurred during login",
//       });
//     }
//   }, []);

//   const register = useCallback(async (credentials: SignUpCredentials) => {
//     try {
//       dispatch({ type: "SIGNUP_START" });
//       await registerSuperOwner(credentials);
//       dispatch({ type: "LOGOUT" });
//     } catch (error) {
//       dispatch({
//         type: "SIGNUP_ERROR",
//         payload:
//           error instanceof Error
//             ? error.message
//             : "An error occurred during signup",
//       });
//     }
//   }, []);

//   const logout = useCallback(async () => {
//     localStorage.removeItem("token");
//     await logoutUser();
//     dispatch({ type: "LOGOUT" });
//   }, []);

//   const clearError = useCallback(() => {
//     dispatch({ type: "CLEAR_ERROR" });
//   }, []);

//   const value = {
//     state,
//     login,
//     register,
//     logout,
//     clearError,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export default AuthProvider;
