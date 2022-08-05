import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Title } from './components/home-page/title';
import { DesktopNavBar, MobileNavBar } from './components/navbar';
import { AboutUs } from './components/body/about-us';
import { Services } from './components/body/service';
import { Contact } from './components/body/contact';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });
  return (
    <Box>
      <Title width={width} />
      {width > 1000 ? <DesktopNavBar /> : <MobileNavBar />}
      <AboutUs />
      <Services />
      <Contact />
    </Box>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
