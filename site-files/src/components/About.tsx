import React from "react";
import "./About.css";

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>I am a recent graduate of Manhattanville College with Bachelor's in Computer Science. Currently pursuing a Master's of science in Data Science from Fairfield University, I have an interest in most things tech related. From tinkering with the latest LLM to buidling custom computers, I work with a range of technologies on a daily basis.</p>
                    <p>Currently a teacher of AP Computer Science A at Koble Cathedral Preparatory School, I put my skills and expereince to the test daily in order to help the next generation of programmers.</p>
                </div>
                <div className="about-img">
                    {/* img goes here  */}
                </div>
            </div>
        </section>
    )
}

export default About