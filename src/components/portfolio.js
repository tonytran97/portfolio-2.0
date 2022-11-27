import React from 'react';
import ReadIt from '../assets/images/ReadIt.png';
import '../styles/portfolio.css';

export default function Portfolio() {
    return (
        <div className="card">
            <img className='mx-auto' src={ReadIt} alt="ReadIt Project"></img>
            <div className="card-body">
                <h5 className="card-title text-center">ReadIt</h5>
                <p className="card-text text-center">As a book lover, you can now join a community of people who share that same passion, finding many different reviews and opinions about books of all kinds.</p>
                <div className='text-center'>
                    <a href="https://sleepy-chamber-71078.herokuapp.com/" target="_blank" rel="noreferrer"> <i class="fa-solid fa-rocket fa-3x"></i></a>
                    <a href="https://github.com/tonytran97/ReadIt" target="_blank" rel="noreferrer"> <i className="fa-brands fa-github fa-3x m-3 icon-color"></i></a>
                </div>
            </div>
        </div>
    );
}