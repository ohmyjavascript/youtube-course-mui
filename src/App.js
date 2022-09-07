import './App.css';
import { Box } from '@mui/material';
import { appWrapper } from '@styles/styles';
import AppNavMenu from '@navigation/AppNavMenu';
import AppContentArea from '@components/AppContentArea';
import React from 'react';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={appWrapper}>
      <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
      <AppContentArea isOpen={mobileOpen} />
    </Box>
  );
}

export default App;
