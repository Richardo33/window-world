import React, { useState } from "react";
import {
  Box,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Divider,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Sidebar ({ logoSrc, profileSrc }){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClose = () => setAnchorEl(null);

    const handleLogout = () => {
    // Hapus data user dari localStorage
    localStorage.removeItem("loggedInUser");

    // Redirect ke halaman login / landing
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  if (isMobile) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: theme.palette.background.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1300,
        }}
      >
        {/* Logo kiri */}
        <Box onClick={() => navigate("/home")} sx={{ cursor: "pointer" }}>
          <img src={logoSrc} alt="Logo" style={{ height: 40 }} />
        </Box>

        {/* Avatar kanan */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src={profileSrc}
            sx={{
              width: 35,
              height: 35,
              border: `2px solid ${theme.palette.divider}`,
              cursor: "pointer",
            }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {/* ✅ Home Menu */}
            <MenuItem
              onClick={() => {
                navigate("/home");
                handleMenuClose();
              }}
            >
              <HomeIcon sx={{ mr: 1 }} /> Home
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleMenuClose();
              }}
            >
              <PersonIcon sx={{ mr: 1 }} /> Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/my-list");
                handleMenuClose();
              }}
            >
              <ListAltIcon sx={{ mr: 1 }} /> My List
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                handleLogout();
                handleMenuClose();
              }}
            >
              <LogoutIcon sx={{ mr: 1 }} /> Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    );
  }

  // ✅ Desktop Sidebar
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        color: theme.palette.text.primary,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 3, cursor: "pointer" }} onClick={() => navigate("/home")}>
        <img src={logoSrc} alt="Logo" style={{ height: 100 }} />
      </Box>

      {/* Profile Picture */}
      <Avatar
        src={profileSrc}
        sx={{
          width: 80,
          height: 80,
          mb: 2,
          cursor: "pointer",
          border: `2px solid ${theme.palette.divider}`,
        }}
        onClick={() => navigate("/profile")}
      />
      <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: "bold" }}>
        {user ? user.name : "Guest"}
      </Typography>

      {/* Menu */}
      <List
        sx={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ✅ Home */}
        <Tooltip title="Home" placement="right">
          <ListItemButton onClick={() => navigate("/home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="Profile" placement="right">
          <ListItemButton onClick={() => navigate("/profile")}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </Tooltip>

        <Tooltip title="My List" placement="right">
          <ListItemButton onClick={() => navigate("/my-list")}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="My List" />
          </ListItemButton>
        </Tooltip>

        <Box sx={{ flexGrow: 1 }} />
        <Divider sx={{ my: 1 }} />

        <Tooltip title="Logout" placement="right">
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </Tooltip>
      </List>
    </Box>
  );
};

export default Sidebar;
