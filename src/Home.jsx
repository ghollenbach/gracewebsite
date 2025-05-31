import './Home.css';
import TypewriterIntro from './TypewriterIntro';
import Footer from './Footer';
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
                <div class="contact-links">
                  <a href="mailto:ghollen7002@gmail.com" class="contact-item" aria-label="Send Email">
                    <img src={`${import.meta.env.BASE_URL}email.svg`} alt="Email Icon" class="contact-icon" />
                    <span>ghollen7002@gmail.com</span>
                  </a>
                  
                  <a href="http://linkedin.com/in/grace-hollenbach" target="_blank" rel="noopener noreferrer" class="contact-item" aria-label="LinkedIn Profile">
                    <img src={`${import.meta.env.BASE_URL}linkedin.svg`} alt="LinkedIn Icon" class="contact-icon" />
                    <span>LinkedIn</span>
                  </a>
                </div>

            </div>

            {/* Projects Section with White Background */}
            
            <div className="projects-section">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                    <img src={`${import.meta.env.BASE_URL}hvacapl.jpg`} alt="Project 1" className="card-image" />
                        <h3 className="card-title">Using AI for HVAC Systems</h3>
                        <p className="card-description">To conserve energy</p>
                        <a href="https://aspireshowcase.dunked.com/ai-for-efficient-hvac-control-at-apl-by-grace-hollenbach" target="_blank" rel="noopener noreferrer" className="project-link">
                            Read my poster here ➡️
                        </a>
                    </div>
                    <div className="project-card">
                    <img src={`${import.meta.env.BASE_URL}monkey.png`} alt="Project 1" className="card-image" />
                        <h3 className="card-title">AutoIntern</h3>
                        <p className="card-description">Find your internship faster!</p>
                        <a href="https://autointernfopl.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                            Use it for yourself ➡️
                        </a>
                    </div>
                    <div className="project-card">
                    <img src={`${import.meta.env.BASE_URL}oysterreef.jpg`} alt="Project 1" className="card-image" />
                        <h3 className="card-title">Using AI for Coastal Defense</h3>
                        <p className="card-description">To protect the shores</p>
                        <a href="https://aspireshowcase.dunked.com/operationalizing-ai-deep-reinforcement-learning-for-coastal-defense-by-alexander-sleeman-grace-hollenbach-and-charles-barnhart" target="_blank" rel="noopener noreferrer" className="project-link">
                            Read our poster here ➡️
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

