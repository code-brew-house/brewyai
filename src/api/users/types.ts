export type AddOwnerToOrganizationRequest = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  role: "OWNER" | "ADMIN" | "AGENT";
};

export type UserType = {
  id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  organizationId: string;
  role: string;
};
