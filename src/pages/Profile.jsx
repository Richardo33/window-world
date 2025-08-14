// src/pages/Profile.jsx
import React, { useState } from "react";
import { Box, Typography, Avatar, TextField, Button, Paper } from "@mui/material";
import Sidebar from "../component/Sidebar"; 
import logo from "../assets/Icon.png";
import profilePic from "../assets/Vector1.png";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const [name, setName] = useState(storedUser.name || "User Name");
  const [email, setEmail] = useState(storedUser.email || "user@example.com");
  const [profileImage, setProfileImage] = useState(storedUser.profileImage || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = { name, email, profileImage };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        logoSrc={logo}
        profileSrc={profileImage || profilePic}
        onProfileClick={() => console.log("Profile clicked")}
        onMyListClick={() => console.log("My List clicked")}
        onLogoutClick={() => console.log("Logout clicked")}
      />

      {/* Konten utama */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, sm: "240px" },
          mt: { xs: "60px", sm: 0 },
          height: "100vh",
          display: "flex", // 🔹 Flexbox untuk posisi tengah
          justifyContent: "center", // 🔹 Horizontal center
          alignItems: "center", // 🔹 Vertical center
          p: 2,
        }}
      >
        <Paper sx={{ p: 4, width: "100%", maxWidth: 600 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
            My Profile
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Avatar
              src={profileImage || profilePic}
              sx={{ width: 100, height: 100, border: "3px solid #ddd" }}
            />
          </Box>

          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ mb: 3 }}
          >
            Upload Profile Picture
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </Button>

          <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Save Changes
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Profile;