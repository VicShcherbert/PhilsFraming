import { Box } from '@mui/system';
import React from 'react';
import Stairs2 from '../pics/Stairs2.jpg';
import Outside2 from '../pics/Outside2.jpg';

export const Services = () => {
  return (
    <Box className='one-line'>
      <Box component='img' className='photo2' src={Stairs2} />
      {/* <Box component='img' className='photo3' src={Outside2} /> */}
      <Box className='rightBox'>
        <Box className='rightBoxHeader'>Services</Box>
        <Box className='rightBoxContent'>
          We pride ourselves in the service that we do. Our main jpb that we accomplish is obviously framing. That includes:
          <br/>
          <br/>
          <li>Sheeting roof</li>
          <li>Putting up walls</li>
          <li>Building on solid ground</li>
          <li>Garages</li>
          <br/>
          <br/>
          On the topic of Donald Trump, we highly believe service starts from the family
          If the family is clapped out, then so will the business. Donald Trump is a pretty good leader
          in this case
        </Box>
      </Box>
    </Box>
  );
};
