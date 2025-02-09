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
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { authContext } from "../providers/authProvider";
import { IUser, Role } from "../types/@types";
import { useValidateUser } from "../hooks/useValidator";

const INITIAL_USER = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  contactNumber: "",
  age: "",
  gender: "",
};

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
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
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
            error={!!errors.contactNumber}
            helperText={errors.contactNumber}
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
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formData.gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
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
  );
};

export default Signup;
