import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box, Typography, Link } from '@mui/material';

function ModalRegister({ open, onClose, onSwitchToLogin }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = () => {
    const userData = { name, email, password }; // ✅ simpan password juga
    localStorage.setItem("user", JSON.stringify(userData));
    onClose();
    window.location.reload();
  };


  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Register</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} autoComplete="off"/>
          <TextField label="Email" type="email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
          <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#FE4E30', '&:hover': { backgroundColor: '#e04329' } }}
            fullWidth
            onClick={handleRegister}
          >
            Register
          </Button>

          <Typography variant="body2" textAlign="center">
            Already have an account?{' '}
            <Link
              component="button"
              variant="body2"
              underline="hover"
              onClick={() => {
                onClose();
                onSwitchToLogin();
              }}
              sx={{ color: '#FE4E30', fontWeight: 'bold' }}
            >
              Login here
            </Link>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}


export default ModalRegister;
