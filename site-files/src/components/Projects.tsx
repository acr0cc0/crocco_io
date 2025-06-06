import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "What to Wear",
            description: "A custom weather application that provides tailored reccomendations based on factors like temperature, humidity & wind speed. Built with React and Open Weather API"
        },
        {
            title: "Expense Tracker",
            description: "A custom expense tracking application used to keep track of my grocery spending. Leveraging Google Sheets API and React. Displays information in a custom dashboard"
        },
        {
            title: "Caddy Tracker",
            description: "A custom database solution meant to keep track of my caddy jobs in the sumemr. Tracks player, money earned, date etc. Build with Google Sheets API and React"
        },
    ]
    
    return (
        <section id="projeects" className="projects">
            <div className="projects-content">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* img goes here */}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects