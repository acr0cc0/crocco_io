import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography>
            Crocco
          </Typography>
          <Button color="inherit" href='/'>Home</Button>
          <Button color="inherit" href='projects'>Projects</Button>
          <Button color="inherit" href='about' >About</Button>
          <Divider orientation="vertical" flexItem sx={{ flexGrow: 1}} />
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ flexGrow: .04}}
          >
            <LinkedInIcon href='www.linkedin.com/in/anthony-crocco-614943243' />
          </IconButton>
          <Button color="inherit" href='login'>Login</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}