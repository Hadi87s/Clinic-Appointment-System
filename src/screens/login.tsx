import { useContext, useState } from "react";
import "../App.css";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../providers/authProvider";

import { validateCredentials } from "../hooks/useValidator";
import { IUser } from "../types/@types";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const { login, singedUpUsers } = useContext(authContext);

  const logUserIn = (signedUser: IUser) => {
    login(signedUser);
    navigate("/");
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError(!password);

    if (validateCredentials(email)) {
      singedUpUsers.forEach((signedUser) => {
        signedUser.email === email && signedUser.password === password
          ? logUserIn(signedUser)
          : null;
      });
    } else {
      setEmailError(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          mt: 10,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
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
          gutterBottom
          sx={{
            color: "#1E40AF",
            fontWeight: "600",
            fontFamily: '"Fredoka", serif',
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "gray", mb: 2, fontFamily: '"Fredoka", serif' }}
        >
          Login to continue managing your appointments
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? "Invalid email address." : ""}
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
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#1E40AF",
            fontFamily: '"Fredoka", serif',
            "&:hover": { backgroundColor: "#1E3A8A" },
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Login
        </Button>

        <Typography
          variant="body2"
          sx={{ mt: 2, color: "gray", fontFamily: '"Fredoka", serif' }}
        >
          Don't have an account?{" "}
          <Link
            className="hover:underline"
            to="/signup"
            style={{
              color: "#1E40AF",
              fontWeight: "bold",
              fontFamily: '"Fredoka", serif',
            }}
          >
            Signup
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
