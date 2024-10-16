import './analogTimer.css'
import { Link } from 'react-router-dom';
import clockImg from '../../assets/clock.png'

function analogTimerComp() {
    return (
        <>
            <header className="title">interval</header>
            <section className="interval-clock-section">
                <img src={clockImg} alt="img" />
            </section>
            <section className="abort-timer-section">
                <Link to='/SetTimePage'><button className="abort-timer">Abort timer</button></Link>
            </section>
        </>
    )
}

export default analogTimerComp