import './App.css';
import { Box } from '@mui/material';
import { appWrapper } from '@styles/styles';
import AppNavMenu from '@navigation/AppNavMenu';

function App() {
  return (
    <Box sx={appWrapper}>
      <AppNavMenu />
    </Box>
  );
}

export default App;
