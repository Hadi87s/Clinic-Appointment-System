import { Appointment } from "../types/@types";

export enum AppointmentActionKind {
  ADD = "ADD_APPOINTMENT",
}

export type AppointmentState = {
  appointments: Appointment[];
};
export const INITIAL_APPOINTMENT: AppointmentState = {
  appointments: [],
};

export type AppointmentAction = {
  type: AppointmentActionKind;
  payload: { appointment: Appointment };
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
    default:
      return state;
  }
};
