import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../../providers/authProvider";
import { IUser } from "../../types/@types";
import { motion } from "framer-motion";

const AdminProfile = () => {
  const { user, updateUser } = useContext(authContext);

  // Initialize state with user data
  const [profile, setProfile] = useState({
    fullName: user?.fullName || "Admin Name",
    email: user?.email || "",
    instagram: user?.instagram || "",
    facebook: user?.facebook || "",
    linkedin: user?.linkedin || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setProfile((prev) => ({
        ...prev,
        fullName: user.fullName,
        email: user.email,
        instagram: user.instagram || "",
        facebook: user.facebook || "",
        linkedin: user.linkedin || "",
      }));
    }
  }, [user]);

  // Handle input changes
  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleUpdate = () => {
    if (
      profile.newPassword &&
      profile.newPassword !== profile.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }

    // Ensure user exists and has an ID
    if (!user?.id) {
      alert("User ID is missing!");
      return;
    }

    // Create an updated user object with a non-optional id
    const updatedUser: IUser = {
      ...user, // Preserve existing properties including `id`
      fullName: profile.fullName,
      email: profile.email,
      instagram: profile.instagram,
      facebook: profile.facebook,
      linkedin: profile.linkedin,
      password: profile.newPassword || user.password, // Keep old password if not changed
    };

    updateUser(updatedUser);
    alert("Profile updated successfully!");
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
      <Container maxWidth="sm" className="flex flex-col items-center py-10">
        {/* Admin Avatar */}
        <Avatar
          sx={{ width: 120, height: 120, bgcolor: "#3b82f6" }}
          className="mb-4 shadow-lg"
        >
          {profile.fullName.charAt(0).toUpperCase()}
        </Avatar>

        {/* Admin Name */}
        <Typography variant="h5" className="mb-4 font-bold text-gray-900">
          {profile.fullName}
        </Typography>

        {/* Profile Form */}
        <Box className="w-full space-y-4 bg-white p-6 rounded-lg shadow-md">
          <Stack spacing={2}>
            <TextField
              label="Full Name"
              fullWidth
              variant="outlined"
              value={profile.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />

            <TextField
              label="Contact Email"
              type="email"
              fullWidth
              required
              variant="outlined"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            {/* Social Media Links */}
            <TextField
              label="Instagram Link"
              fullWidth
              variant="outlined"
              value={profile.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Instagram color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Facebook Link"
              fullWidth
              variant="outlined"
              value={profile.facebook}
              onChange={(e) => handleChange("facebook", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Facebook color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="LinkedIn Link"
              fullWidth
              variant="outlined"
              value={profile.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedIn color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Change Password Section */}
            <TextField
              label="Current Password"
              type="password"
              fullWidth
              variant="outlined"
              value={profile.currentPassword}
              onChange={(e) => handleChange("currentPassword", e.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              variant="outlined"
              value={profile.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
            />
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              variant="outlined"
              value={profile.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />

            <Button
              type="button"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "#3b82f6",
                "&:hover": { bgcolor: "#2563eb" },
              }}
              className="rounded-lg text-white"
              onClick={handleUpdate}
            >
              Update Settings
            </Button>
          </Stack>
        </Box>
      </Container>
    </motion.div>
  );
};

export default AdminProfile;
