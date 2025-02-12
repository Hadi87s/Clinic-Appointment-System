import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
  Box,
  IconButton,
  Snackbar,
  Stack
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState, useContext } from "react";
import { authContext } from "../../providers/authProvider";

const UserProfile = () => {
  const { user, updateUser } = useContext(authContext);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setAvatar(e.target.result as string);
          setOpenSnackbar(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!user) {
      setError("User not found. Please log in again.");
      return;
    }

    if (passwords.currentPassword !== user.password) {
      setError("Current password is incorrect.");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    const updatedUser = { ...user, password: passwords.newPassword };
    updateUser(updatedUser); // Update the context with new password
    setOpenSnackbar(true);
    setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <Container maxWidth="sm" className="flex flex-col items-center py-10 space-y-6">
      {/* Avatar Upload Section */}
      <div className="relative group">
        <Avatar
          sx={{
            width: 120,
            height: 120,
            bgcolor: "#3b82f6",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
          className="mb-4 shadow-lg ring-4 ring-blue-100"
          src={avatar || undefined}
        >
          {!avatar && user?.fullName?.[0]}
        </Avatar>

        <IconButton
          component="label"
          className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md"
          sx={{ p: 1.5, "&:hover": { bgcolor: "#2563eb" } }}
        >
          <CameraAltIcon className="text-white" />
          <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
        </IconButton>
      </div>

      {/* User Name */}
      <Typography variant="h5" className="mb-4 font-bold text-gray-900 text-center">
        {user?.fullName || "User Name"}
      </Typography>

      {/* Change Password Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="w-full space-y-4 bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <Stack spacing={2}>
          <TextField
            label="Current Password"
            name="currentPassword"
            type="password"
            fullWidth
            required
            variant="outlined"
            value={passwords.currentPassword}
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
          />
          <TextField
            label="New Password"
            name="newPassword"
            type="password"
            fullWidth
            required
            variant="outlined"
            value={passwords.newPassword}
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
          />
          <TextField
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            fullWidth
            required
            variant="outlined"
            value={passwords.confirmPassword}
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#3b82f6",
              "&:hover": { bgcolor: "#2563eb", transform: "scale(1.02)" },
              py: 1.5,
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
            className="rounded-lg text-white shadow-md"
          >
            Update Password
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Password updated successfully!"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Container>
  );
};

export default UserProfile;
