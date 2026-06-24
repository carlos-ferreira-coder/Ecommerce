export interface AuthDTO {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface LoginReqDTO {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResDTO {
  user: AuthDTO;
}

export interface LogoutResDTO {
  message: string;
}

export interface RegisterReqDTO {
  name: string;
  email: string;
  password: string;
  accept: {
    terms: boolean;
    marketing: boolean;
  };
}

export interface RegisterResDTO {
  user: AuthDTO;
}
