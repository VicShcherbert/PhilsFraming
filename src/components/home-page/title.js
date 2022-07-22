import React from 'react';
import { Box, Container } from '@mui/material';
import '../../styles.css';
import Logo from '../pics/logo.png';
import TransparentLogo from '../pics/transparentLogo.png';

export const Title = () => {
  return (
    <Box>
      <Box className='title'>
        <Box
          component='img'
          sx={{
            height: 200,
            width: 200,
            borderRadius: 5,
            boxShadow: 10,
            ml: 20,
            '@media (max-width: 1000px)': {
              ml: 0,
              // alignItems: 'center',
            },
            '@media (max-width: 500px)': {
              ml: 0,
              height: 175,
              width: 175,
            },
            
          }}
          src={Logo}
        ></Box>
      </Box>
      <Container sx={{mt: 10}}>Hello</Container>
    </Box>
  );
};
