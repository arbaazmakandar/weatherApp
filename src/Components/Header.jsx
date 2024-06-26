import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#000000", margin:"2px", width:"99.5%"}}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;