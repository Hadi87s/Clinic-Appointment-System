import { useContext, useState } from "react";
import "../App.css";
import { v4 as uuid } from "uuid";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../providers/authProvider";
import { Role } from "../types/@types";
import { validateCredentials } from "../utils/validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(authContext);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordError(!password);

    if (validateCredentials(email, password)) {
      let loggedUser;
      if (email === "Hadi@gmail.com" && password == "Hadi123@sa") {
        loggedUser = {
          id: uuid(),
          email: email,
          password: password,
          role: Role.doctor,
        };
      } else {
        loggedUser = {
          id: uuid(),
          email: email,
          password: password,
          role: Role.patient,
        };
      }

      login(loggedUser);
      navigate("/");
    } else {
      setPasswordError(true);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
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
          error={passwordError}
          helperText={passwordError ? "Wrong Email or Password" : ""}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
        <div style={{ marginTop: "15px" }}>
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
