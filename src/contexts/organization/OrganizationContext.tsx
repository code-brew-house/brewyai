import { createContext } from "react";
import type { GetCurrentOrganizationRequestData, OrgState } from "./types";

export const OrganizationContext = createContext<{
  state: OrgState;
  getCurrentOrganization: (
    data: GetCurrentOrganizationRequestData
  ) => Promise<void>;
  getOrganizations: () => Promise<void>;
} | null>(null);
