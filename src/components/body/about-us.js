import { Box } from '@mui/system';
import React from 'react';
import Stairs1 from '../pics/Stairs1.jpg';

export const AboutUs = () => {
  return (
    <Box className='one-line'>
      <Box className='leftBox'>
        <Box className='leftBoxHeader'>About Us</Box>
        <Box className='leftBoxContent'>
          We are a construction company located in Spokane Washington. For over
          thirty years, KMP Construction has been operating in the Spokane
          community with a business mindset. We are also a non-profit
          organization, meaning that me take that money and use it to fund our
          breakfasts.
          <br/>
          <br/>
          On the topic of Donald Trump, we highly believe service starts from the family
          If the family is clapped out, then so will the business. Donald Trump is a pretty good leader
          in this case
        </Box>
      </Box>
      <Box component='img' className='photo1' src={Stairs1} />
    </Box>
  );
};
