import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { useAppointments } from "../providers/appointmentsProvider";
import { AppointmentActionKind } from "../reducer/appointmentsReducer";
import { v4 as uuid } from "uuid";
import { authContext } from "../providers/authProvider";
import { Appointment, AppointmentStatus, FormData } from "../types/@types";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export const useAppointmentForm = () => {
  const { state, dispatch } = useAppointments();
  const { user } = useContext(authContext);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const formMethods = useForm<FormData>({
    defaultValues: {
      patientName: "",
      contact: "",
      age: 0,
      gender: "",
      appointmentDateTime: null,
      symptoms: "",
    },
  });

  useEffect(() => {
    setBookedSlots(
      state.appointments.map((appointment) => appointment.bookedSlot)
    );
  }, [state.appointments]);

  const validateDateTime = (date: Dayjs | null): string | true => {
    if (!date) return "Appointment time is required";

    const now = dayjs();
    const thirtyDaysLater = dayjs().add(30, "day").endOf("day");

    // Past date validation
    if (date.isBefore(now)) {
      return "Cannot select past dates/times";
    }

    // 30-day limit validation
    if (date.isAfter(thirtyDaysLater)) {
      return "Cannot book beyond 30 days";
    }

    // Clinic hours validation
    const hour = date.hour();
    if (hour < 9 || hour >= 17) {
      return "Outside clinic hours (9 AM - 5 PM)";
    }

    // 30-minute interval validation
    const minute = date.minute();
    if (minute !== 0 && minute !== 30) {
      return "Appointments must be in 30-minute intervals";
    }

    // Booked slots validation
    const isBooked = bookedSlots.some((slot) => {
      const start = dayjs(slot);
      const end = dayjs(slot).add(30, "minute");
      return date.isBetween(start, end, null, "[)");
    });

    if (isBooked) return "This slot is already booked";

    return true;
  };

  const isTimeDisabled = (date: Dayjs) => {
    return validateDateTime(date) !== true;
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const appointment: Appointment = {
      id: uuid(),
      ...data,
      status: AppointmentStatus.PENDING,
      bookedSlot: data.appointmentDateTime?.toISOString()!,
      patientId: user?.id || "",
    };
    dispatch({ type: AppointmentActionKind.ADD, payload: { appointment } });
    formMethods.reset();
  };

  return {
    formMethods,
    bookedSlots,
    isTimeDisabled,
    validateDateTime,
    handleSubmitLogic: onSubmit,
  };
};
