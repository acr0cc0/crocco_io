import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            C R O C C O
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ flexGrow: 0.01}} />
          <Button color="inherit" href='/'>Home</Button>
          <Button color="inherit" href='projects'>Projects</Button>
          <Button color="inherit" href='about' >About</Button>
          <Divider orientation="vertical" flexItem sx={{ flexGrow: 1}} />
          <IconButton 
            aria-label="redirect" onClick={event =>  window.location.href='https://www.linkedin.com/in/anthony-crocco-614943243/'}
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
            sx={{ flexGrow: .04}}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            aria-label="redirect" onClick={event =>  window.location.href='https://github.com/acr0cc0'}
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
            sx={{ flexGrow: .04}}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}