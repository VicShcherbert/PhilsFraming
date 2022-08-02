import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';

export const DesktopNavBar = () => {
  return (
    <AppBar position='static' style={{ background: '#2E3B55' }}>
      <Container sx={{ padding: 0 }}>
        <Box sx={{ float: 'right', mr: 10 }}>
          <Toolbar disableGutters>
            <Box
              color='inherit'
              sx={{
                m: 2,
                fontSize: 20,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                Home
              </Link>
            </Box>
            <Box
              color='inherit'
              sx={{
                m: 2,
                fontSize: 20,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                About Us
              </Link>
            </Box>
            <Box
              color='inherit'
              sx={{
                m: 1.5,
                fontSize: 20,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                Services
              </Link>
            </Box>
            <Box
              color='inherit'
              sx={{
                m: 1.5,
                fontSize: 20,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                Contact
              </Link>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export const MobileNavBar = () => {
  return (
    <AppBar position='static' style={{ background: '#2E3B55' }}>
      <Container sx={{ padding: 0 }}>
        <Box sx={{ float: 'left', ml: 4 }}>
          <Toolbar disableGutters sx={{}}>
            <Box
              color='inherit'
              sx={{
                m: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                Home
              </Link>
            </Box>
            <Box
              color='inherit'
              sx={{
                m: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                About Us
              </Link>
            </Box>
          </Toolbar>
        </Box>
        <Box sx={{ float: 'right', mr: 4 }}>
          <Toolbar disableGutters sx={{}}>
            <Box
              color='inherit'
              sx={{
                m: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                Services
              </Link>
            </Box>
            <Box
              color='inherit'
              sx={{
                m: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link href=''  underline='none' color={'inherit'}>
                Contact
              </Link>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};
