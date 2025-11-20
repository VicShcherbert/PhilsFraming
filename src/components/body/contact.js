import { Box } from '@mui/system';
import React from 'react';

export const Contact = () => {
  return (
    <Box className='contact' id='contact'>
      <Box className='contact-box'>
        <Box className='contact-header'>Contact us today!</Box>
        <Box className='contact-header'><a href="tel:5093858714"></a>(509) 385-8714</Box>
        {/* <Box className='designer-footer'>VS | 2023</Box> */}
      </Box>
    </Box>
  );
};
