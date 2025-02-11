import { useMemo } from "react";
import { useAppointments } from "../providers/appointmentsProvider";
import dayjs from "dayjs";
import { AppointmentStatus } from "../types/@types";

export const useStatisticsCard = () => {
  const { state } = useAppointments();

  const [todayStart, todayEnd] = useMemo(() => [
    dayjs().startOf('day'),
    dayjs().endOf('day')
  ], [dayjs().startOf('day').valueOf()]); // Dependency: daily timestamp

  const todayAppointments = useMemo(() => 
    state.appointments.filter((appointment) => {
      const bookedDate = dayjs(appointment.bookedSlot);
      return bookedDate.isAfter(todayStart) && bookedDate.isBefore(todayEnd);
    }),
    [state.appointments, todayStart, todayEnd]
  );

  const [pendingAppointments, confirmedAppointments] = useMemo(() => [
    todayAppointments.filter(a => a.status === AppointmentStatus.PENDING).length,
    todayAppointments.filter(a => a.status === AppointmentStatus.CONFIRMED).length
  ], [todayAppointments]);

  const appointmentsPerDay = useMemo(() => 
    state.appointments.reduce((acc, appointment) => {
      const date = appointment.bookedSlot.split('T')[0]; // Extract YYYY-MM-DD
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    [state.appointments]
  );

  const chartData = useMemo(() => 
    Object.entries(appointmentsPerDay).map(([date, count]) => ({
      date,
      count
    })),
    [appointmentsPerDay]
  );

  return {
    todayAppointments,
    pendingAppointments,
    confirmedAppointments,
    chartData
  }
}