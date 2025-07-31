export type RegisterSuperOwnerRequest = {
  username: string;
  password: string;
  fullName: string;
  email: string;
};

export type RegisterSuperOwnerResponse = {
  username: string;
  fullName: string;
  email: string;
};

export type LoginSuperOwnerRequest = {
  identifier: string;
  password: string;
};

export type LoginSuperOwnerResponse = {
  token: string;
};
