import { createContext, useContext } from "react";
import { usePersistentReducer } from "../hooks/usePersistentReducer";
import {
  AppointmentAction,
  appointmentReducer,
  AppointmentState,
  INITIAL_APPOINTMENT,
} from "../reducer/appointmentsReducer";

interface AppointmentsContextType {
  state: AppointmentState;
  dispatch: React.Dispatch<AppointmentAction>;
}

const AppointmentsContext = createContext<AppointmentsContextType | null>(null);

export function AppointmentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = usePersistentReducer(
    "appointments",
    appointmentReducer,
    INITIAL_APPOINTMENT
  );

  return (
    <AppointmentsContext.Provider value={{ state, dispatch }}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (context === null) {
    throw Error("useAppointments must be used within a AppointmentsProvider");
  }
  return context;
};
