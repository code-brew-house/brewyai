import { useContext } from "react";
import { OrganizationContext } from "./OrganizationContext";

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
