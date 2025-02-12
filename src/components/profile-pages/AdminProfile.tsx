import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useState } from "react";

const AdminProfile = () => {
  const [email, setEmail] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    facebook: "",
    linkedin: "",
  });

  const handleSocialChange = (platform: string, value: string) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  return (
    <Container maxWidth="sm" className="flex flex-col items-center py-10">
      {/* Admin Avatar */}
      <Avatar
        sx={{ width: 120, height: 120, bgcolor: "#3b82f6" }}
        className="mb-4 shadow-lg"
      >
        A
      </Avatar>

      {/* Admin Name */}
      <Typography variant="h5" className="mb-4 font-bold text-gray-900">
        {/* TODO: Replace with actual admin's name */}
        Admin Name
      </Typography>

      {/* Admin Email Field */}
      <Box className="w-full space-y-4 bg-white p-6 rounded-lg shadow-md">
        <TextField
          label="Contact Email"
          type="email"
          fullWidth
          required
          variant="outlined"
          className="rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Social Media Links */}
        <TextField
          label="Instagram Link"
          fullWidth
          variant="outlined"
          className="rounded-lg"
          value={socialLinks.instagram}
          onChange={(e) => handleSocialChange("instagram", e.target.value)}
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
          className="rounded-lg"
          value={socialLinks.facebook}
          onChange={(e) => handleSocialChange("facebook", e.target.value)}
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
          className="rounded-lg"
          value={socialLinks.linkedin}
          onChange={(e) => handleSocialChange("linkedin", e.target.value)}
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
          required
          variant="outlined"
          className="rounded-lg"
        />
        <TextField
          label="New Password"
          type="password"
          fullWidth
          required
          variant="outlined"
          className="rounded-lg"
        />
        <TextField
          label="Confirm New Password"
          type="password"
          fullWidth
          required
          variant="outlined"
          className="rounded-lg"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: "#3b82f6", "&:hover": { bgcolor: "#2563eb" } }}
          className="rounded-lg text-white"
        >
          Update Settings
        </Button>
      </Box>
    </Container>
  );
};

export default AdminProfile;
