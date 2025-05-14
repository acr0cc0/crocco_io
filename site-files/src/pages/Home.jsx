import '../App.css'

const Home = () => (
    <div>
      <section class='home' id='home'>
        <h2 class='home-header'> My Portfolio</h2>
        <div class='skills'>
            <div class='row-one'>
                <img src='assets/icons' alt='' loading='lazy' class='icon icon-card' />
                <img src='assets/icons' alt='' loading='lazy' class='icon icon-card' />
                <img src='assets/icons' alt='' loading='lazy' class='icon icon-card' />
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