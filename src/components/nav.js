import React from 'react';
import '../styles/nav.css';

export default function Nav() {
    return (
        <header>
            <nav>
                <h3>Hi, I'm Tony Tran</h3>
                <ul className='navlinks'>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}