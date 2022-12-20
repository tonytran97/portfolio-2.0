import React from 'react';
import ReadIt from '../assets/images/ReadIt.png';
import TextEditor from '../assets/images/text-editor.png';
import WhatsForDinner from '../assets/images/whats-for-dinner.png';
import WeatherDashboard from '../assets/images/weather-dashboard.png';
import WorkDayScheduler from '../assets/images/work-day-scheduler.png';
import RockPaperScissors from '../assets/images/rock-paper-scissors.png';
import GoMode from '../assets/images/GoMode.png';
import '../styles/portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            name: 'GoMode',
            description: 'GoMode, is a place to find, post, and take on volunteer opportunities in your community.',
            link: "https://gomodez.herokuapp.com/",
            repo: "https://github.com/zshep/Fortress_of_Solitude",
            image: GoMode,
        },
        {
            name: 'ReadIt',
            description: 'As a book lover, you can now join a community of people who share that same passion, finding many different reviews and opinions about books of all kinds.',
            link: "https://sleepy-chamber-71078.herokuapp.com/",
            repo: "https://github.com/tonytran97/ReadIt",
            image: ReadIt,
        },
        {
            name: 'Text Editor',
            description: 'This is a simple text editor application that is able to run both online and offline.',
            link: "https://blooming-spire-38699.herokuapp.com/",
            repo: "https://github.com/tonytran97/text_editor",
            image: TextEditor,
        },
        {
            name: 'WhatsForDinner',
            description: `Can't decide what to eat? WhatsForDinner generates meal and drink recipes at the click of a button.`,
            link: "https://tonytran97.github.io/WhatsForDinner/",
            repo: "https://github.com/tonytran97/WhatsForDinner",
            image: WhatsForDinner,
        },
        {
            name: 'Weather Dashboard',
            description: 'Looking to travel? This weather application generates current and future forecasts of cities within the US.',
            link: "https://tonytran97.github.io/Weather-Dashboard/",
            repo: "https://github.com/tonytran97/Weather-Dashboard",
            image: WeatherDashboard,
        },
        {
            name: 'Work Day Scheduler',
            description: 'Need an application to keep track of events for work? This application will assist in tracking your daily events.',
            link: "https://tonytran97.github.io/Work_Day_Scheduler/",
            repo: "https://github.com/tonytran97/Work_Day_Scheduler",
            image: WorkDayScheduler,
        },
        {
            name: 'Rock Paper Scissors',
            description: 'Need an application to keep track of events for work? This application will assist in tracking your daily events.',
            link: "https://tonytran97.github.io/Rock_Paper_Scissors/",
            repo: "https://github.com/tonytran97/Rock_Paper_Scissors",
            image: RockPaperScissors,
        },
    ]
    return (
        <div>
            {projects.map((project, idx) => (
                <div className='card project' key={idx}>
                    <img className='mx-auto mt-1' src={project.image} alt={project.name + ' Project'}></img>
                    <div className="card-body">
                        <h5 className="card-title text-center">{project.name}</h5>
                        <p className="card-text text-center">{project.description}</p>
                        <div className='text-center'>
                            <a href={project.link} target="_blank" rel="noreferrer"> <i className="fa-solid fa-rocket fa-3x"></i></a>
                            <a href={project.repo} target="_blank" rel="noreferrer"> <i className="fa-brands fa-github fa-3x m-3 icon-color"></i></a>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}