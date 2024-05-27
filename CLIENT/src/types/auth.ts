export interface SignupResponse extends SignupRequest {
  access_token: string;
  refresh_token: string;
}

export interface SignupRequest {
  name: string;
  gender: Gender;
  email: string;
  password: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}

export type SigninResponse = Partial<SignupResponse>;
export type CurrentResponse = Partial<SignupResponse>;
export type RefreshTokenResponse = Partial<SignupResponse>;

export enum Gender {
  PRIA = "PRIA",
  PEREMPUAN = "PEREMPUAN",
}
