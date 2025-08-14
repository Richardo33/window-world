// src/component/ModalLogin.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ModalLogin({ open, onClose, onSwitchToRegister }) {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Cek user yang pernah register
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Akun dummy default
    const dummyUser = {
      email: "admin@gmail.com",
      password: "123456",
      name: "Admin Dummy",
      profileImage: ""
    };

    // Logika gabungan
    if (
      (storedUser && storedUser.email === email && storedUser.password === password) ||
      (email === dummyUser.email && password === dummyUser.password)
    ) {
      // Simpan user yang sedang login
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(storedUser || dummyUser)
      );

      onClose();
      navigate("/home");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Login</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
            fullWidth 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            autoComplete="off" // 🔹 Biar nggak muncul history
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
            sx={{ backgroundColor: '#FE4E30', '&:hover': { backgroundColor: '#e04329' } }}
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography variant="body2" textAlign="center">
            Don’t have an account?{' '}
            <Link
              component="button"
              underline="hover"
              onClick={() => {
                onClose();
                onSwitchToRegister();
              }}
              sx={{ color: '#FE4E30', fontWeight: 'bold' }}
            >
              Sign up here
            </Link>
          </Typography>

          {/* 🔹 Info akun dummy */}
          <Typography variant="caption" color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
            Dummy account: admin@gmail.com / 123456
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ModalLogin;
