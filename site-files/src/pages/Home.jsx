import '../App.css'
import SvgIcon from '@mui/material';
import '../assets/skills/python.svg'

const Home = () => (
    <div>
      <section class='home' id='home'>
        <h2 class='home-header'> My Portfolio</h2>
        <div class='skills'>
            <div class='row-one'>
                <SvgIcon>
                     <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                       <image height="200" width="300" href='python.svg' />
                     </svg>
                </SvgIcon>
            </div>
            <div class='row-two'>
                <img src='assets/icons' alt='' loading='lazy' class='icon icon-card' />
                <img src='assets/icons' alt='' loading='lazy' class='icon icon-card' />
                <img src='assets/icons' alt='' loading='lazy' class='icon icon-card' />
            </div>
        </div>
      </section>
    </div>
)

export default Home