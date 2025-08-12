import { useState } from "react";
import {
  type OrgState,
  type GetCurrentOrganizationRequestData,
  type OrganizationProviderProps,
} from "./types";
import { OrganizationContext } from "./OrganizationContext";
import {
  getAllOrganizations,
  getOrganizationById,
} from "../../api/organization";

const initialState: OrgState = {
  currentOrganization: null,
  allOrganizations: [],
  loading: false,
  error: null,
};

export const OrganizationProvider = ({
  children,
}: OrganizationProviderProps) => {
  const [state, setState] = useState<OrgState>(initialState);

  const getCurrentOrganization = async (
    data: GetCurrentOrganizationRequestData
  ) => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await getOrganizationById(data);
      console.log({ response });

      setState((curr) => ({
        ...curr,
        currentOrganization: response.data,
        loading: false,
        error: null,
      }));
    } catch (error) {
      console.error("Error in fetching current organization", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  const getOrganizations = async () => {
    try {
      setState((curr) => ({ ...curr, loading: true }));
      const response = await getAllOrganizations();
      console.log({ response });

      setState((curr) => ({
        ...curr,
        loading: false,
        allOrganizations: response.data,
      }));
    } catch (error) {
      console.error("Error in fetching organizations", error);
      setState((curr) => ({ ...curr, loading: false, error: error }));
    }
  };

  return (
    <OrganizationContext.Provider
      value={{
        state,
        getCurrentOrganization,
        getOrganizations,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
