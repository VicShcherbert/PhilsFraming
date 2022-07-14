import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Title } from './components/home-page/title';

const App = () => {
  return (
    <Box>
      <Title />
    </Box>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
