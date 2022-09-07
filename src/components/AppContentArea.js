import Box from '@mui/material/Box';
import React, { useState } from 'react';
import SideList from './SideList';
import { appContentWrapper, flexColumnGrow } from '@styles/styles';

const AppContentArea = ({ isOpen }) => {
  const sideBarWidth = isOpen ? '70px' : '250px';
  return (
    <Box component="main" sx={appContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: 'auto',
        }}
      >
        <SideList />
      </Box>
    </Box>
  );
};

export default AppContentArea;
