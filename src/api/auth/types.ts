export type RegisterSuperOwnerRequest = {
  username: string;
  password: string;
  fullName: string;
  email: string;
  organizationName?: string;
  organizationContactNumber?: string;
  organizationEmail?: string;
};

export type RegisterSuperOwnerResponse = {
  success: boolean;
  message: string;
  data: {
    user: UserDTO;
    organization?: {
      id: string;
      name: string;
      role: string;
    };
    token: string;
    tokenType?: string;
    expiresIn?: number;
  };
};

type UserDTO = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  organizationId: string;
  role: string;
};

export type LoginSuperOwnerRequest = {
  identifier: string;
  password: string;
};

export type LoginSuperOwnerResponse = {
  message: string;
  success: boolean;
  data: {
    token: string;
    tokenType: string;
    expiresIn: number;
    user: UserDTO;
  };
};
