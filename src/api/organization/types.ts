export type CreateOrganizationRequest = {
  name: string;
  email: string;
  contactNumber: string;
};

export type GetOrganizationByIdRequest = {
  organizationId: string;
};
