import React, { useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery, Button } from '@mui/material';
import Logo from '../assets/Icon.png';
import Bookshelf from '../assets/Vector1.png';
import ModalRegister from '../component/ModalRegister';
import ModalLogin from '../component/ModalLogin';

function Landing() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  return (
    <>
      <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {!isSmallScreen && (
          <Box
            component="img"
            src={Bookshelf}
            alt="Bookshelf"
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              width: 'auto',
              objectFit: 'cover',
              zIndex: 1
            }}
          />
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isSmallScreen ? 'center' : 'flex-start',
            height: '100%',
            gap: 4,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: 500,
              p: 3,
              ml: isSmallScreen ? 0 : 10,
              textAlign: isSmallScreen ? 'center' : 'left',
              borderRadius: 2
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                width: isSmallScreen ? 250 : 400,
                mx: isSmallScreen ? 'auto' : 0
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, px: isSmallScreen ? 2 : 0 }}
            >
              Sign-up now and subscribe to enjoy all the cool and latest books – The best book rental service provider in Indonesia
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mt: 3,
                justifyContent: isSmallScreen ? 'center' : 'flex-start'
              }}
            >
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: '#FE4E30',
                  '&:hover': { backgroundColor: '#e34327' }
                }}
                onClick={handleOpenRegister}
              >
                Register
              </Button>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: '#555',
                  '&:hover': { backgroundColor: '#333' }
                }}
                onClick={handleOpenLogin}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal Register */}
      <ModalRegister 
        open={openRegister} 
        onClose={() => setOpenRegister(false)} 
        onSwitchToLogin={handleOpenLogin} 
      />

      {/* Modal Login */}
      <ModalLogin 
        open={openLogin} 
        onClose={() => setOpenLogin(false)} 
        onSwitchToRegister={handleOpenRegister} 
      />
    </>
  );
}

export default Landing;
