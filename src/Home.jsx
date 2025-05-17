import './Home.css';
import TypewriterIntro from './TypewriterIntro';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* Intro Section with Background Image */}
            <div className="intro-section">
                <h1 className="home-title">Hello, I'm Grace Hollenbach</h1>
                <div className="typewriter-container"> <TypewriterIntro /> </div>
                <div className="home-buttons">
                    <Link to="/about" className="home-button">About Me</Link>
                </div>
            </div>

            {/* Projects Section with White Background */}
            
            <div className="projects-section">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                    <img src={`${import.meta.env.BASE_URL}monkey.png`} alt="Project 1" className="card-image" />
                        <h3 className="card-title">AutoIntern</h3>
                        <p className="card-description">Find your internship faster!</p>
                        <a href="https://autointernfopl.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                            Check it out here ➡️
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

