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

function ModalRegister({ open, onClose, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // state untuk pesan error

  const handleRegister = () => {
    // Reset error dulu setiap submit
    setError("");

    // Validasi form kosong
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields must be filled out!");
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validasi panjang password
    if (password.length < 6) {
      setError("Password should be at least 6 characters long!");
      return;
    }

    // Simpan user baru
    const newUser = { name, email, password, profileImage: "" };
    localStorage.setItem("user", JSON.stringify(newUser));

    // Tutup modal & pindah ke login tanpa alert popup
    onClose();
    onSwitchToLogin();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Register
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
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

          {/* Tampilkan error di bawah input */}
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: -1 }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FE4E30",
              "&:hover": { backgroundColor: "#e04329" },
            }}
            fullWidth
            onClick={handleRegister}
          >
            Register
          </Button>

          <Typography variant="body2" textAlign="center">
            Already have an account? {" "}
            <Link
              component="button"
              variant="body2"
              underline="hover"
              onClick={() => {
                onClose();
                onSwitchToLogin();
              }}
              sx={{ color: "#FE4E30", fontWeight: "bold" }}
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ModalRegister;
