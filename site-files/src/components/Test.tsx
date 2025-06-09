import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box>
        <Paper elevation={3}>
            <h2>What to Wear</h2>
            <p>A custom weather application that provides tailored reccomendations based on factors like temperature, humidity & wind speed. Built with React and Open Weather API</p>
        </Paper>
        <Paper elevation={3}>
            <h2>Expense Tracker</h2>
            <p>A custom expense tracking application used to keep track of my grocery spending. Leveraging Google Sheets API and React. Displays information in a custom dashboard</p>
        </Paper>
        <Paper elevation={3}>
            <h2>Caddy Tracker</h2>
            <p>A custom database solution meant to keep track of my caddy jobs in the sumemr. Tracks player, money earned, date etc. Build with Google Sheets API and React</p>
        </Paper>
        
    </Box>
  );
}
