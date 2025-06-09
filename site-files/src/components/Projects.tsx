import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Projects() {
  return (
    <div>

    <Box>
        
        <Paper elevation={3} sx={{bgcolor: '#f8f8f8', margin: "1rem", padding: "1rem"}}>
            <h3>What to Wear</h3>
            <p>A custom weather application that provides tailored reccomendations based on factors like temperature, humidity & wind speed. Built with React and Open Weather API</p>
            <Button variant="text" href="/wtw">Check it Out!</Button>
        </Paper>
        <Paper elevation={3} sx={{bgcolor: '#f8f8f8', margin: "1rem", padding: "1rem"}}>
            <h3>Expense Tracker</h3>
            <p>A custom expense tracking application used to keep track of my grocery spending. Leveraging Google Sheets API and React. Displays information in a custom dashboard</p>
            <Button variant="text" href="/grocery">Check it Out!</Button>
        </Paper>
        <Paper elevation={3} sx={{bgcolor: '#f8f8f8', margin: "1rem", padding: "1rem"}}>
            <h3>Caddy Tracker</h3>
            <p>A custom database solution meant to keep track of my caddy jobs in the sumemr. Tracks player, money earned, date etc. Build with Google Sheets API and React</p>
            <Button variant="text" href="/caddy">Check it Out!</Button>
        </Paper>
        <Paper elevation={3} sx={{bgcolor: '#f8f8f8', margin: "1rem", padding: "1rem"}}>
          <h4>To see all of my projects, be sure to visit my GitHub!</h4>
          <Button variant="text" href="https://github.com/acr0cc0">My GitHub!</Button>
        </Paper>
    </Box>
    </div>
  );
}
