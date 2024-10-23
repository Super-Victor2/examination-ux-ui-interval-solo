import './setTimeComp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function SetTimeComp() {
    const [minutes, setMinutes] = useState(0);

    const increaseMinutes = () => {
        setMinutes(prevMinutes => prevMinutes + 1);
    };

    const decreaseMinutes = () => {
        if (minutes > 0) {
            setMinutes(prevMinutes => prevMinutes - 1);
        }
    };

    return (
        <>
            <section className="set-time-container">
                <section className="time-wrapper">
                    <i className="icon fa-solid fa-chevron-left" onClick={decreaseMinutes}></i>
                    <h1 className="time-set">{minutes}</h1>
                    <i className="icon fa-solid fa-chevron-right" onClick={increaseMinutes}></i>
                </section>
                <aside className="minutes-text-wrapper">
                    <p className="minutes-text">minutes</p>
                </aside>
            </section>
            <section className="start-time-section">
                <Link to='/TimerPage' state={{ time: minutes }}>
                    <button className="start-timer">Start timer</button>
                </Link>
            </section>
        </>
    );
}

export default SetTimeComp;