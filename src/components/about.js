import React from 'react';
import Profile from '../assets/images/profilepic.png';
import '../styles/about.css';

export default function About() {
    return (
        <section className='card text-center'>
            <div className="card-header mb-1">
                About Me
            </div>
            <img className="me" src={Profile} alt="me"></img>
            <p className='card-text mb-1'>
                After devoting a significant amount of my academic career and life to pursing medicine, I have finally discovered my passion for web development and technology.
                <br />
                Currently enrolled in the University of Washington Bootcamp to become a full-stack developer.
                <br />
                I spend my free time focusing on my web development skills or exercising in the gym.
            </p>
        </section>
    );
}

