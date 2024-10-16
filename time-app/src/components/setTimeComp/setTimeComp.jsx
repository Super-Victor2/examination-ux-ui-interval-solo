import './setTimeComp.css'
import { Link } from 'react-router-dom';

function setTimeComp() {
    return (
        <>
            <section className="set-time-container">
                <section className="time-wrapper">
                    <i class="icon fa-solid fa-chevron-left"></i>
                    <h1 className="time-set">10</h1>
                    <i class="icon fa-solid fa-chevron-right"></i>
                </section>
                <aside className="minutes-text-wrapper">
                    <p className="minutes-text">minutes</p>
                </aside>
            </section>
            <section className="start-time-section">
            <Link to='/AnalogTimerPage'><button className="start-timer">Start timer</button></Link>
            </section>
        </>
    )
}

export default setTimeComp