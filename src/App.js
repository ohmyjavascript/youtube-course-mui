import './App.css';
import { Box } from '@mui/material';
import { appWrapper } from '@styles/styles';
import AppNavMenu from '@navigation/AppNavMenu';
import AppContentArea from '@components/AppContentArea';

function App() {
  return (
    <Box sx={appWrapper}>
      <AppNavMenu />
      <AppContentArea isOpen={false} />
    </Box>
  );
}

export default App;
