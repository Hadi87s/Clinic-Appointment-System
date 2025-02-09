import { Dayjs } from "dayjs";

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  contactNumber: string,
  age: string,
  gender: string,
  role: Role;
}

export enum Role {
  patient = "Patient",
  doctor = "Doctor",
}

export enum AppointmentStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
}

export interface Appointment {
  id: string;
  patientId: string; // Links to User.id
  patientName: string;
  contact: string;
  age: number;
  gender: string;
  bookedSlot: string;
  symptoms: string;
  status: AppointmentStatus;
  notes?: string; // Optional doctor notes
}

export interface FormData {
  patientName: string;
  contact: string;
  age: number;
  gender: string;
  appointmentDateTime: Dayjs | null;
  symptoms: string;
}
