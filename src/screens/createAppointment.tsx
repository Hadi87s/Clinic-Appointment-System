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
    console.log(data.bookedSlot);

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
      style={{
        backgroundImage: `url(${"../../../public/landingBackground.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100vw] h-[100vh] absolute inset-0 flex justify-center content-center"
    >
      <div className="mt-25 p-4 bg-white rounded-2xl h-fit min-w-xl transition-shadow duration-150 shadow-md hover:shadow-lg">
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
              fontFamily: '"Fredoka", serif', // Apply Fredoka font to the entire form
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: '"Fredoka", serif',
                fontWeight: "600",
                color: "#1E40AF",
              }}
              className=""
            >
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
                      sx: {
                        fontFamily: '"Fredoka", serif', // Apply Fredoka font
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px", // Add border radius
                          "& fieldset": {
                            borderColor: "#1E40AF", // Change border color
                          },
                          "&:hover fieldset": {
                            borderColor: "#1E40AF", // Change hover border color
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1E40AF", // Change focused border color
                          },
                        },
                        "& label": { fontFamily: '"Fredoka", serif' }, // Label text
                        "& input": { fontFamily: '"Fredoka", serif' }, // Input text
                      },
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
              sx={{
                fontFamily: '"Fredoka", serif', // Apply Fredoka font
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Add border radius
                  "& fieldset": {
                    borderColor: "#1E40AF", // Change border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#1E40AF", // Change hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1E40AF", // Change focused border color
                  },
                },
                "& label": { fontFamily: '"Fredoka", serif' }, // Label text
                "& input": { fontFamily: '"Fredoka", serif' }, // Input text
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                fontFamily: '"Fredoka", serif', // Apply Fredoka font
                borderRadius: "10px", // Add border radius
                backgroundColor: "#1E40AF", // Change button color
                "&:hover": {
                  backgroundColor: "#1E3A8A", // Change hover color
                },
              }}
            >
              Book Appointment
            </Button>
            <Snackbar
              open={showConfirmation}
              autoHideDuration={6000}
              onClose={() => setShowConfirmation(false)}
            >
              <Alert
                severity="success"
                sx={{
                  width: "100%",
                  fontFamily: '"Fredoka", serif', // Apply Fredoka font
                  borderRadius: "10px", // Add border radius
                }}
              >
                Appointment booked successfully!
              </Alert>
            </Snackbar>
          </Box>
        </LocalizationProvider>
      </div>
    </motion.div>
  );
}
