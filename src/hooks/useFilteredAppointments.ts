import { Appointment } from "../types/@types";

const useFilteredAppointments = (
  appointments: Appointment[],
  statusFilter: string,
  searchQuery: string
): Appointment[] => {
  return appointments.filter(
    (appointment) =>
      (statusFilter === "All" ||
        appointment.status.toString() === statusFilter) &&
      appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default useFilteredAppointments;
