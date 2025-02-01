import { useState } from "react";
import "../App.css";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError(!email);
    setPasswordError(!password);

    if (email && password) {
      // Add your login logic here (e.g., authentication API call)
      console.log("Email:", email, "Password:", password);
      navigate("/");
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
          error={emailError}
          helperText={emailError ? "Email is required" : ""}
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
          helperText={passwordError ? "Password is required" : ""}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
