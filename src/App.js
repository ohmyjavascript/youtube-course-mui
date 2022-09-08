import './App.css';
import { Box } from '@mui/material';
import { appWrapper } from '@styles/styles';
import AppNavMenu from '@navigation/AppNavMenu';
import AppContentArea from '@components/AppContentArea';
import React from 'react';
import SearchContext from './context/SearchContext';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [search, setSearch] = React.useState('javascript');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onSearch = (val) => {
    setSearch(val);
  };

  return (
    <Box sx={appWrapper}>
      <SearchContext.Provider
        value={{
          searchText: search,
          onSearch: onSearch,
        }}
      >
        <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
        <AppContentArea isOpen={mobileOpen} />
      </SearchContext.Provider>
    </Box>
  );
}

export default App;
