import { Box } from '@mui/system';
import React from 'react';
import Stairs1 from '../pics/Stairs1.jpg';

export const AboutUs = () => {
  return (
    <Box className='leftBox'>
      <Box className='leftBoxHeader'>About Us!</Box>
      <Box className='leftBoxContent'>
        We are a construction company located in Spokane Washington. For over
        thirty years, KMP Construction has been operating in the Spokane
        community with a business mindset. We are also a non-profit
        organization, meaning that me take that money and use it to fund our
        breakfasts.
      </Box>
      <Box component='img' className="" src={Stairs1} />
    </Box>
  );
};
