import React from "react";
import "./About.css";

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus orci neque, sed congue risus interdum sit amet.</p>
                </div>
                <div className="about-img">
                    {/* img goes here  */}
                </div>
            </div>
        </section>
    )
}

export default About