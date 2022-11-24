import React from 'react';
import '../styles/nav.css';

export default function ColorSchemesExample() {
    return (
        <nav>
            <ul className='navlinks'>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Resume</a></li>
            </ul>
        </nav>
    );
}