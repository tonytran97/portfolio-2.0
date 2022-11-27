import React from 'react';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className='card text-center'>
            <section>
                <h4>Contact</h4>
                <a href="mailto:tonytran_97@live.com"> <i className="fa-regular fa-envelope fa-2x m-3 icon-color"></i></a>
                <a href="https://github.com/tonytran97" target="_blank" rel="noreferrer"> <i className="fa-brands fa-github fa-2x m-3 icon-color"></i></a>
                <a href="https://www.linkedin.com/in/tony-tran-2b8aa4242/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin fa-2x m-3 icon-color"></i></a>
            </section>
        </footer>
    );
}