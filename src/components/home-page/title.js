import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import '../../styles.css';
import Logo from '../pics/logo.png';
import TransparentLogo from '../pics/transparentLogo.png';
import { TitleInfoBox } from './info-box';

export const Title = ({width}) => {
  

  return (
    <Box>
      <Box className='title'>
        <Box component='img' className='logo' src={Logo} />
        {width > 1000 ? <TitleInfoBox /> : null}
      </Box>
    </Box>
  );
};
