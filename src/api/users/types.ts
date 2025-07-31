export type AddOwnerToOrganizationRequest = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  role: "OWNER" | "ADMIN" | "AGENT";
};
