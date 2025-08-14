import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ModalLogin({ open, onClose, onSwitchToRegister }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Cek input kosong
    if (!email.trim() || !password.trim()) {
      Swal.fire({
        target: document.body,
        timer: 1500,
        icon: "warning",
        title: "Oops...",
        text: "Please enter both email and password!",
      });
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const dummyUser = {
      email: "admin@gmail.com",
      password: "123456",
      name: "Admin Dummy",
      profileImage: "",
    };

    if (
      (storedUser &&
        storedUser.email === email &&
        storedUser.password === password) ||
      (email === dummyUser.email && password === dummyUser.password)
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(storedUser || dummyUser)
      );
      // Tidak ada alert, langsung tutup modal & redirect
      onClose();
      navigate("/home");
    } else {
      Swal.fire({
        target: document.body,
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password!",
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Login
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FE4E30",
              "&:hover": { backgroundColor: "#e04329" },
            }}
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography variant="body2" textAlign="center">
            Don’t have an account?{" "}
            <Link
              component="button"
              underline="hover"
              onClick={() => {
                onClose();
                onSwitchToRegister();
              }}
              sx={{ color: "#FE4E30", fontWeight: "bold" }}
            >
              Register here
            </Link>
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            textAlign="center"
            sx={{ mt: 1 }}
          >
            Dummy account: admin@gmail.com / 123456
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ModalLogin;
