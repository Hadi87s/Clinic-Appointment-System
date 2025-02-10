import { Appointment } from "../types/@types";

export enum AppointmentActionKind {
  ADD = "ADD_APPOINTMENT",
  REMOVE = "REMOVE_APPOINTMENT",
  UPDATE = "UPDATE_APPOINTMENT",
}

export type AppointmentState = {
  appointments: Appointment[];
  id: string;
};

export const INITIAL_APPOINTMENT: AppointmentState = {
  appointments: [],
  id: "",
};


export type AppointmentAction =
  | { type: AppointmentActionKind.ADD; payload: { appointment: Appointment } }
  | {
      type: AppointmentActionKind.UPDATE;
      payload: { id: string; updatedData: Partial<Appointment> };
    }; 
| 
    {
      type: AppointmentActionKind.REMOVE;
      payload: { id: string; };
    };


export const appointmentReducer = (
  state: AppointmentState,
  action: AppointmentAction
): AppointmentState => {
  switch (action.type) {
    case AppointmentActionKind.ADD:
      return {
        ...state,
        appointments: [...state.appointments, action.payload.appointment],
      };
    case "REMOVE_APPOINTMENT": {
      return {
        ...state,
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== action.payload.id
        ),
      };
    }
    case AppointmentActionKind.UPDATE:
      return {
        ...state,
        appointments: state.appointments.map((appointment) =>
          appointment.id === action.payload.id
            ? { ...appointment, ...action.payload.updatedData }
            : appointment
        ),
      };
    default:
      return state;
  }
};
