import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

const TypewriterIntro = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 style={{ fontSize: '4rem' }} className="font-semibold text-center">
      <span style={{ color: 'white' }}>I am a{' '}</span>
        <span style={{ color: '#00bfff', minWidth: '200px'}}>
          <Typewriter
            words={['student', 'tech assistant', 'web developer', 'researcher', 'programmer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterIntro;

