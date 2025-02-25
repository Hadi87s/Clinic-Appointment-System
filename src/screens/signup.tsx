import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Container,
  Snackbar,
  Alert,
  SelectChangeEvent,
  InputAdornment,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { authContext } from "../providers/authProvider";
import { IUser, Role } from "../types/@types";
import { useValidateUser } from "../hooks/useValidator";
import { motion } from "framer-motion";
import BlobBackground from "../components/blob-background/Blob";
import { Link } from "react-router-dom";
import { INITIAL_USER } from "../data/data";


const Signup = () => {
  const [formData, setFormData] = useState(INITIAL_USER);
  const { signUserUp } = useContext(authContext);
  const [success, setSuccess] = useState(false);
  const { isValid, errors } = useValidateUser(formData);
  const [errorMessage, setErrorMessage] = useState<Record<string, string>>({});

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage(errors);
      return;
    }

    const signedUser: IUser = {
      id: uuid(),
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      contactNumber: formData.contactNumber,
      age: formData.age,
      gender: formData.gender,
      role: Role.patient,
    };

    console.log(isValid);
    console.log(errors);

    if (isValid) {
      signUserUp(signedUser);
      setSuccess(true);
      setFormData(INITIAL_USER);
      setErrorMessage({});
    } else {
      setErrorMessage(errors);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  return (
    <>
    <BlobBackground sh="h-[155%] lg:h-[145%]" height="2xl:h-[135%]" src="/loginPage.svg"/>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
      }}
      >
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            mt: 5,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 5,
            boxShadow: 4,
            backgroundColor: "white",
            transition: "all 0.3s",
            fontFamily: '"Fredoka", serif',
            "&:hover": { boxShadow: 6 },
          }}
          >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mt: 2,
              color: "#1E40AF",
              fontFamily: '"Fredoka", serif',
              fontWeight: "600",
            }}
            >
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="name"
              autoFocus
              value={formData.fullName}
              onChange={handleChange}
              error={!!errorMessage.fullname}
              helperText={errorMessage.fullname}
              sx={{
                fontFamily: '"Fredoka", serif',
                "& .MuiOutlinedInput-root": {
                  fontFamily: '"Fredoka", serif',
                  "& fieldset": { borderColor: "#1E40AF" },
                  "&:hover fieldset": { borderColor: "#1E40AF" },
                  "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: '"Fredoka", serif',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errorMessage.email}
              helperText={errorMessage.email}
              sx={{
                fontFamily: '"Fredoka", serif',
                "& .MuiOutlinedInput-root": {
                  fontFamily: '"Fredoka", serif',
                  "& fieldset": { borderColor: "#1E40AF" },
                  "&:hover fieldset": { borderColor: "#1E40AF" },
                  "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: '"Fredoka", serif',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              onError={() => {
                "hi";
              }}
              error={!!errorMessage.password}
              helperText={errorMessage.password}
              sx={{
                fontFamily: '"Fredoka", serif',
                "& .MuiOutlinedInput-root": {
                  fontFamily: '"Fredoka", serif',
                  "& fieldset": { borderColor: "#1E40AF" },
                  "&:hover fieldset": { borderColor: "#1E40AF" },
                  "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: '"Fredoka", serif',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errorMessage.confirmPassword}
              helperText={errorMessage.confirmPassword}
              sx={{
                fontFamily: '"Fredoka", serif',
                "& .MuiOutlinedInput-root": {
                  fontFamily: '"Fredoka", serif',
                  "& fieldset": { borderColor: "#1E40AF" },
                  "&:hover fieldset": { borderColor: "#1E40AF" },
                  "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: '"Fredoka", serif',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contactNumber"
              label="Contact Number"
              type="tel"
              id="contactNumber"
              autoComplete="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              error={!!errorMessage.contactNumber}
              helperText="Contact number must be at least 7 digits without any special characters"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">+</InputAdornment>
                  ),
                },
              }}
              sx={{
                fontFamily: '"Fredoka", serif',
                "& .MuiOutlinedInput-root": {
                  fontFamily: '"Fredoka", serif',
                  "& fieldset": { borderColor: "#1E40AF" },
                  "&:hover fieldset": { borderColor: "#1E40AF" },
                  "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: '"Fredoka", serif',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              type="number"
              id="age"
              value={formData.age}
              onChange={handleChange}
              error={!!errorMessage.age}
              helperText={errorMessage.age}
              sx={{
                fontFamily: '"Fredoka", serif',
                "& .MuiOutlinedInput-root": {
                  fontFamily: '"Fredoka", serif',
                  "& fieldset": { borderColor: "#1E40AF" },
                  "&:hover fieldset": { borderColor: "#1E40AF" },
                  "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: '"Fredoka", serif',
                },
              }}
            />
            <FormControl
              fullWidth
              margin="normal"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#fff",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  "& fieldset": {
                    borderColor: "#1E40AF", // Change the border color here
                  },
                  "&:hover fieldset": {
                    borderColor: "#1E40AF", // Change the hover border color here
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1E40AF", // Change the focus border color here
                  },
                },
                "& .MuiInputLabel-root": {
                  fontFamily: '"Fredoka", serif',
                },
                "& .MuiSelect-select": {
                  fontFamily: '"Fredoka", serif',
                },
                "& .MuiSvgIcon-root": {
                  color: "#1E40AF", // Change the arrow color here
                },
              }}
            >
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={formData.gender}
                label="Gender"
                onChange={handleChange}
                sx={{
                  fontFamily: '"Fredoka", serif',
                  borderRadius: "10px",
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#1E40AF",
                fontFamily: '"Fredoka", serif',
                "&:hover": { backgroundColor: "#1E3A8A" },
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Typography
              variant="body2"
              sx={{ mt: 2, color: "gray", fontFamily: '"Fredoka", serif' }}
              >
              Already Signed Up?{" "}
              <Link
                className="hover:underline"
                to="/login"
                style={{
                  color: "#1E40AF",
                  fontWeight: "bold",
                  fontFamily: '"Fredoka", serif',
                }}
                >
                Login
              </Link>
            </Typography>
        </Box>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Signup successful!
          </Alert>
        </Snackbar>
      </Container>
    </motion.div>
    </>
  );
};

export default Signup;
