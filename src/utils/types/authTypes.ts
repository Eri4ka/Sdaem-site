export type SiginUpValues = {
  login: string;
  email: string;
  password: string;
  verifyPassword: string;
  recaptcha: string;
};

export type SiginInValues = {
  login: string;
  password: string;
  remember: boolean;
};

export type AuthStatusType = {
  status: string;
  message: string;
};

export type UserType = {
  id: string;
  login: string | undefined | null;
  email: string | undefined | null;
  password?: string;
  photoURL: string | null;
};
