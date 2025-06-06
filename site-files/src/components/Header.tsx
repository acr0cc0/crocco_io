import React from "react";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <header className="head">
            <div className="head-content">
                <h1 className="name">Crocco</h1>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

