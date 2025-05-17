import './Home.css';
import TypewriterIntro from './TypewriterIntro';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home(){
  return (
<div className="home-container">
    <h1 className="home-title">Hello, I'm Grace Hollenbach</h1>
    <div className="typewriter-container"> <TypewriterIntro /> </div>
    <div className="home-buttons">
        <Link to="/about" className="home-button">About Me</Link>
    </div>

</div>
  );
};

export default Home;
