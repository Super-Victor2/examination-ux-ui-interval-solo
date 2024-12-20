import './digitalTimer.css'
import { Link } from 'react-router-dom';

function digitalTimerComp() {
    return (
        <>  
        <section className='digital-timer-wrapper'>
            <header className="title">interval</header>
            <section className="digital-timer-section">
                <h1 className="digital-timer-text">Tid: </h1>
            </section>
            <section className="abort-timer-section">
                <Link to='/SetTimePage'><button className="abort-timer">Abort timer</button></Link>
            </section>
        </section>
        </>
    )
}

export default digitalTimerComp