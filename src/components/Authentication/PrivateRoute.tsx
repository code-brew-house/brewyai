import { type ReactElement } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../contexts/auth/useAuth";

interface PrivateRouteProps {
  element: ReactElement;
  redirectTo?: string;
}

export const PrivateRoute = ({
  element,
  redirectTo = "/dashboard",
}: PrivateRouteProps) => {
  const auth = useAuth();
  const {
    state: { user },
  } = auth!;

  // If user is logged in and trying to access auth pages, redirect to dashboard
  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  // Otherwise, render the protected route
  return element;
};
