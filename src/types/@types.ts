export interface IUser {
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  patient = "Patient",
  doctor = "Doctor",
}
