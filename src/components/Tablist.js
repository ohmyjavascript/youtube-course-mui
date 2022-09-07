import { tabItems } from '@data/app.data';
import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const TabList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {tabItems.map((item) => {
          return <Tab key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;
