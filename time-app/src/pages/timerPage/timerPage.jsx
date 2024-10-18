import DigitalTimer from "../../components/digitalTimerComp/digitalTimer"
import AnalogTimer from "../../components/analogTimerComp/analogTimer"
import HeaderComp from "../../components/headerComp/headerComp";
import TimeStop from "../../components/timesStopComp/timesStop"
import Timer from 'easytimer.js';
import { useState, useEffect } from 'react';

const timer = new Timer()

function timerPage({ time }) {
    const [timeLeft, setTimeLeft] = useState();
    const [displayAnalog, setDisplayAnalog] = useState(false)
    const [displayDigital, setDisplayDigital] = useState(true)
    
    useEffect(() => {
        console.log(time)
        timer.start({
            countdown: true, 
            startValue: {minutes: time}
        });
        timer.addEventListener('minutesUpdated', function (e) {
            setTimeLeft(timer.getTimeValues().minutes);
        });
        timer.addEventListener('targetAchieved', () => {
            timer.reset();
        })
    })

    const handleDisplayDigital = () => {
        setDisplayAnalog(false)
        setDisplayDigital(true)
    }

    const handleDisplayAnalog = () => {
        setDisplayAnalog(true)
        setDisplayDigital(false)
    }
    
    return (
        <>
        <HeaderComp handleDisplayAnalog={handleDisplayAnalog} handleDisplayDigital={handleDisplayDigital}   />
            <AnalogTimer display={displayAnalog} time={timeLeft} />
            <DigitalTimer display={displayDigital} time={timeLeft} />

        </>
    )
}

export default timerPage