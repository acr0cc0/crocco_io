import '../App.css'
import { Divider, Stack } from '@mui/material';
import Cards from '../components/Paper';

const Projects = () => (
    <div>
        <section class='projects' id='projects'>
            <h2 class='projects-title'>Some of My Recent Projects</h2>
            <div class='projects-container'> 
                <Stack direction='row' spacing={3} divider={<Divider orientation='vertical' flexItem />}>
                <div class='project-container project-card'>
                    <Cards square={false} elevation={3}>
                        <h3>Project 1</h3>
                        <p>Description of Project 1</p>
                    </Cards>
                </div>
                <div class='project-container project-card'>
                    <Cards square={false} elevation={3}>
                        <h3>Project 2</h3>
                        <p>Description of Project 2</p>
                    </Cards>
                    </div>
                    <div class='project-container project-card'>
                    <Cards square={false} elevation={3}>
                        <h3>Project 3</h3>
                        <p>Description of Project 3</p>
                    </Cards>
                    </div>
                </Stack>
            </div>
        </section>
    </div>
)

export default Projects