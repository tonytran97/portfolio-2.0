import React from 'react';
import Profile from '../assets/images/profilepic.png';
import '../styles/about.css';

export default function About() {
    return (
        <section className='card text-center'>
            <div className="card-header">
                About Me
            </div>
            <img className="me" src={Profile} alt="me"></img>
            <p className='card-text'>
                After devoting a significant amount of my academic career and life to pursing medicine, I have finally discovered my passion for web development and technology.
                <br />
                Currently enrolled in the University of Washington Bootcamp to become a full-stack developer.
                <br />
                I spend my free time focusing on my web development skills or exercising in the gym.
            </p>
            <div className="card-header">
                A few languages and tools that I am familiar with...
            </div>
            <ul className='card-text list'>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Heroku</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
            </ul>
        </section>
    );
}

