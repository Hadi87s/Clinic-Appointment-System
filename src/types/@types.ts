import { Dayjs } from "dayjs";

export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  contactNumber: string,
  age: string,
  gender: string,
  role: Role;
  instagram?: string ,
  facebook?: string,
  linkedin?: string,
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
  bookedSlot: Dayjs | null;
  symptoms: string;
}

export interface ITestimonail { 
  quote: string; 
  name: string; 
  designation: string; 
  src: string
}