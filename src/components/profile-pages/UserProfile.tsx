import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
  Box,
  IconButton,
  Snackbar,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";

const UserProfile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  return (
    <Container
      maxWidth="sm"
      className="flex flex-col items-center py-10 space-y-6"
    >
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
          {!avatar && "U"}
        </Avatar>

        <IconButton
          component="label"
          className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md"
          sx={{
            p: 1.5,
            "&:hover": { bgcolor: "#2563eb" },
          }}
        >
          <CameraAltIcon className="text-white" />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileUpload}
          />
        </IconButton>
      </div>

      {/* User Name */}
      <Typography
        variant="h5"
        className="mb-4 font-bold text-gray-900 text-center"
      >
        User Name
      </Typography>

      {/* Change Password Form */}
      <Box
        component="form"
        className="w-full space-y-4 bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <TextField
          label="Current Password"
          type="password"
          fullWidth
          required
          variant="outlined"
          className="rounded-lg"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
              },
            },
          }}
        />
        <TextField
          label="New Password"
          type="password"
          fullWidth
          required
          variant="outlined"
          className="rounded-lg"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
              },
            },
          }}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          fullWidth
          required
          variant="outlined"
          className="rounded-lg"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#3b82f6",
            "&:hover": {
              bgcolor: "#2563eb",
              transform: "scale(1.02)",
            },
            py: 1.5,
            borderRadius: "12px",
            transition: "all 0.3s ease",
          }}
          className="rounded-lg text-white shadow-md"
        >
          Update Password
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Avatar updated successfully!"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Container>
  );
};

export default UserProfile;
