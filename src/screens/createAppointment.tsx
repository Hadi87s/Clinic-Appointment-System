import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  Snackbar,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useAppointmentForm } from "../hooks/useAppointmentForm";
import { FormData } from "../types/@types";

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

        <TextField
          label="Patient Name"
          variant="outlined"
          fullWidth
          error={!!errors.patientName}
          helperText={errors.patientName?.message}
          {...register("patientName", { required: "Patient name is required" })}
        />

        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          error={!!errors.contact}
          helperText={errors.contact?.message}
          {...register("contact", {
            required: "Contact number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid contact number (10 digits required)",
            },
          })}
        />

        <TextField
          label="Age"
          variant="outlined"
          type="number"
          fullWidth
          error={!!errors.age}
          helperText={errors.age?.message}
          {...register("age", {
            required: "Age is required",
            min: {
              value: 0,
              message: "Age must be a positive number",
            },
          })}
        />

        <Controller
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.gender}>
              <InputLabel>Gender</InputLabel>
              <Select {...field} label="Gender" value={field.value || ""}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errors.gender && (
                <Typography variant="caption" color="error">
                  {errors.gender.message}
                </Typography>
              )}
            </FormControl>
          )}
        />

        <Controller
          name="appointmentDateTime"
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
                  return date.hour() < 9 || date.hour() >= 17 && bookedSlots.includes(date.toISOString());
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
  );
}
