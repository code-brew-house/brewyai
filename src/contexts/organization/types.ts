import type { ReactNode } from "react";

export type OrganizationProviderProps = {
  children: ReactNode;
};

export type GetCurrentOrganizationRequestData = {
  organizationId: string;
};

export type OrgState = {
  currentOrganization: any;
  allOrganizations: any[];
  loading: boolean;
  error?: any;
};
