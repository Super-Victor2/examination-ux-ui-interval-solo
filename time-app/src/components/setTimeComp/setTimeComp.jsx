import './setTimeComp.css';
import { Link } from 'react-router-dom';
import useTimer from 'easytimer-react-hook';
import { useState, useEffect } from 'react';

function SetTimeComp() {
    const [minutes, setMinutes] = useState(0);
    const [timer] = useTimer({
        countdown: true,
        target: { minutes: 0 },
    });

    const incrementMinutes = () => {
        setMinutes((prevMinutes) => prevMinutes + 1);
    };

    const decrementMinutes = () => {
        setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 0));
    };

    const startTimer = () => {
        if (minutes > 0) {
            timer.start({
                countdown: true,
                startValues: { minutes: minutes },
            });

            console.log(`Timer started with ${minutes} minutes`);

            timer.addEventListener('secondsUpdated', () => {
                console.log('Time remaining:', timer.getTimeValues().minutes);
            });

            timer.addEventListener('targetAchieved', () => {
                console.log(`Countdown finished from ${minutes} minutes`);
            });
        }
    };

    return (
        <>
            <section className="set-time-container">
                <section className="time-wrapper">
                    <i className="icon fa-solid fa-chevron-left" onClick={decrementMinutes}></i>
                    <h1 className="time-set">{minutes}</h1>
                    <i className="icon fa-solid fa-chevron-right" onClick={incrementMinutes}></i>
                </section>
                <aside className="minutes-text-wrapper">
                    <p className="minutes-text">minutes</p>
                </aside>
            </section>
            <section className="start-time-section">
                <Link to='/TimerPage'>
                    <button className="start-timer" onClick={startTimer}>Start timer</button>
                </Link>
            </section>
        </>
    );
}

export default SetTimeComp;
