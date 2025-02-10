import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useAppointmentForm } from "../hooks/useAppointmentForm";
import { FormData } from "../types/@types";
import { motion } from "framer-motion";

export default function CreateAppointment() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {
    formMethods: {
      register,
      handleSubmit,
      formState: { errors },
      control,
    },
    bookedSlots,
    isTimeDisabled,
    validateDateTime,
    handleSubmitLogic,
  } = useAppointmentForm();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleSubmitLogic(data);
    setShowConfirmation(true);
  };

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    }}
  > 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: 600,
          margin: "auto",
          padding: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Book Appointment
        </Typography>

        <Controller
          name="bookedSlot"
          control={control}
          rules={{
            required: "Appointment time is required",
            validate: (value) => validateDateTime(value) || true,
          }}
          render={({ field, fieldState: { error } }) => (
            <DateTimePicker
              label="Appointment Date & Time"
              value={field.value}
              onChange={field.onChange}
              minDateTime={dayjs().startOf("minute")}
              maxDateTime={dayjs().add(30, "day").endOf("day")}
              shouldDisableTime={(date, view) => {
                if (view === "hours") {
                  const allMinutes = [0, 30];
                  return allMinutes.every((minute) =>
                    isTimeDisabled(date.set("minute", minute))
                  );
                }
                if (view === "minutes") {
                  return (
                    date.hour() < 9 ||
                    (date.hour() >= 17 &&
                      bookedSlots.includes(date.toISOString()))
                  );
                }
                return false;
              }}
              minutesStep={30}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!error,
                  helperText:
                    error?.message ||
                    "Available slots between 9 AM - 5 PM (30-minute intervals)",
                },
                field: { clearable: true },
              }}
            />
          )}
        />

        <TextField
          label="Symptoms Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          error={!!errors.symptoms}
          helperText={errors.symptoms?.message}
          {...register("symptoms", {
            required: "Symptoms description is required",
          })}
        />

        <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
          Book Appointment
        </Button>

        <Snackbar
          open={showConfirmation}
          autoHideDuration={6000}
          onClose={() => setShowConfirmation(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Appointment booked successfully!
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
    </motion.div>
  );
}
