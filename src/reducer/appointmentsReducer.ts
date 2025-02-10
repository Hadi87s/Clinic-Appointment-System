import { Appointment } from "../types/@types";

export enum AppointmentActionKind {
  ADD = "ADD_APPOINTMENT",
  UPDATE = "UPDATE_APPOINTMENT",
}

export type AppointmentState = {
  appointments: Appointment[];
};

export const INITIAL_APPOINTMENT: AppointmentState = {
  appointments: [],
};

export type AppointmentAction =
  | { type: AppointmentActionKind.ADD; payload: { appointment: Appointment } }
  | {
      type: AppointmentActionKind.UPDATE;
      payload: { id: string; updatedData: Partial<Appointment> };
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
