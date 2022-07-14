import React from 'react';
import { Box } from '@mui/material';
import '../../styles.css';

export const Title = () => {
  return (
    <Box className='title'>
      <Box
        sx={{
          fontSize: '40px',
          pt: 20,
          color: 'red',
          opacity: 1, 
        }}
      >
        Phil's Construction
      </Box>
    </Box>
  );
};
