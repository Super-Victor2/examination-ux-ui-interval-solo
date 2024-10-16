import './digitalTimer.css'
import { Link } from 'react-router-dom';

function digitalTimerComp() {
    return (
        <>
            <header className="title">interval</header>
            <section className="digital-timer-section">
                <h1 className="digital-timer-text">7:32</h1>
            </section>
            <section className="abort-timer-section">
                <Link to='/SetTimePage'><button className="abort-timer">Abort timer</button></Link>
            </section>
        </>
    )
}

export default digitalTimerComp