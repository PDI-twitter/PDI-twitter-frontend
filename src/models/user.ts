export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string | null;
  name: string | null;
  accessToken: string;
  refreshToken: string;
}
