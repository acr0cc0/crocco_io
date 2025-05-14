import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography>
            Crocco
          </Typography>
          <Button color="inherit" href='/home/'>Home</Button>
          <Button color="inherit" href='/projects/'>Projects</Button>
          <Button color="inherit" href='/about/'>About</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}