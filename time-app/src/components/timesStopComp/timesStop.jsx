import './timeStop.css'
import { Link } from 'react-router-dom';
import alarmImg from '../../assets/alarm icon.png'

function timeStopComp() {
    return (
        <>
            <section className="time-stop-bg-section">
                <section className="time-stop-wrapper">
                    <img src={alarmImg} alt="img" />
                    <h1 className="clock-time-stop-text">Times up!</h1>
                </section>
                <section className="set-new-timer-section">
                <Link to='/SetTimePage'><button className="set-new-timer">Set new timer</button></Link>
            </section>
            </section>
            
        </>
    )
}

export default timeStopComp