import './timerPage.css';
import HeaderComp from '../../components/headerComp/headerComp';
import Timer from 'easytimer.js';
import TimeStopComp from '../../components/timesStopComp/timesStop'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useTransform, useTime } from "framer-motion";

const timer = new Timer();

function TimerPage() {
    const [displayAnalog, setDisplayAnalog] = useState(true)
    const [displayDigital, setDisplayDigital] = useState(false)
    const location = useLocation();
    const { time } = location.state || { time: 0 };
    const [timeLeft, setTimeLeft] = useState();
    const [timerEnded, setTimerEnded] = useState(false);
    const totalSeconds = time * 60;
    const animationTime = useTime();
    const rotation = useTransform(animationTime, [0, totalSeconds * 1000], [0, 360]);

    useEffect(() => {
        timer.start({
            countdown: true,
            startValues: {minutes: time}
        });

        timer.addEventListener('secondsUpdated', function (e) {
            setTimeLeft(timer.getTimeValues().toString());
        });

        timer.addEventListener('targetAchieved', () => {
            timer.stop();
            timer.pause();
            setTimerEnded(true);
        })
    });

    const handleDisplayAnalog = () => {
        setDisplayAnalog(true);
        setDisplayDigital(false);
    }

    const handleDisplayDigital = () => {
        setDisplayAnalog(false);
        setDisplayDigital(true);
    }


    return (
        <>
            <HeaderComp handleDisplayAnalog={handleDisplayAnalog} handleDisplayDigital={handleDisplayDigital} />
            <header className="title">Interval</header>

            {!timerEnded ? (
                <>
                    {displayDigital && (
                        <section className="digital-timer-section">
                            <h1 className="digital-timer-text">{timeLeft}</h1>
                        </section>
                    )}

                    {displayAnalog && (
                        <section className="interval-clock-section">
                            <svg width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_839_0)">
                                    <path d="M139.169 11.158V0.89389" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M125.848 11.8468L124.78 1.64398" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M112.672 13.9288L110.551 3.89429" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M99.7856 17.3884L96.627 7.62946" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M87.3342 22.1722L83.1685 12.8036" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M75.4397 28.2419L70.3279 19.3555" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M64.2472 35.5209L58.2351 27.2239" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M53.8787 43.9403L47.035 36.3169" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M44.4409 53.3931L36.8419 46.5274" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M36.0409 63.7873L27.7628 57.7559" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M28.7699 75.0082L19.912 69.88" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M22.7044 86.9256L13.3582 82.7541" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M17.9131 99.417L8.18542 96.2482" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M14.4569 112.345L4.44696 110.209" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M12.3588 125.556L2.1886 124.484" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M11.6569 138.92H1.42566" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M12.3435 152.284L2.17334 153.355" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M14.4188 165.502L4.41644 167.638" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M17.8673 178.43L8.13965 181.599" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M22.6357 190.929L13.2972 195.1" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M28.6859 202.854L19.8281 207.982" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M35.9417 214.083L27.6713 220.114" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M44.3341 224.484L36.7351 231.35" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M53.7566 233.953L46.9129 241.584" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M64.1175 242.387L58.1055 250.684" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M75.3024 249.682L70.1906 258.568" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M87.1816 255.767L83.0235 265.135" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M99.633 260.566L96.4744 270.325" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M112.519 264.041L110.391 274.075" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M125.688 266.138L124.62 276.341" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M139.009 266.85V277.106" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M152.33 266.153L153.398 276.364" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M165.506 264.071L167.635 274.106" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M178.393 260.619L181.551 270.378" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M190.852 255.828L195.01 265.204" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M202.738 249.758L207.85 258.645" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M213.931 242.479L219.943 250.784" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M224.3 234.067L231.143 241.691" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M233.737 224.607L241.344 231.473" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M242.145 214.213L250.415 220.244" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M249.416 202.992L258.274 208.128" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M255.481 191.074L264.82 195.246" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M260.265 178.583L269.993 181.759" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M263.722 165.654L273.732 167.79" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M265.82 152.443L275.991 153.515" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M266.523 139.079H276.754" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M265.836 125.715L276.006 124.644" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M263.761 112.496L273.764 110.359" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M260.312 99.5686L269.04 96.4001" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M255.526 87.0771L263.883 82.9058" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M249.475 75.1528L257.333 69.9754" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M242.221 63.9232L249.492 57.8917" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M233.828 53.5214L240.473 46.6574" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M224.406 44.0516L230.249 36.4205" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M214.044 35.6173L218.967 27.3152" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M202.86 28.3213L206.878 19.435" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M190.982 22.2361L194.14 12.8775" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M178.531 17.4523L180.711 7.68839" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M165.644 14.0031L166.743 3.83467" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <motion.g
                                        style={{ originX: '50%', originY: '50%'}}
                                        animate={{ rotate: rotation }}
                                        transition={{
                                            duration: totalSeconds,
                                            ease: "linear"
                                        }}
                                    
                                    >
                                        <ellipse cx="7.98555" cy="7.9858" rx="7.98555" ry="7.9858" transform="matrix(1 -7.0755e-09 0.00359053 0.999994 131 131)" fill="black"/>
                                        <rect width="3.99278" height="125.223" rx="1.99639" transform="matrix(1 -7.0755e-09 0.00359053 0.999994 136.6 15.8)" fill="black"/>
                                        <ellipse cx="4.98563" cy="4.98578" rx="4.98563" ry="4.98578" transform="matrix(1 -7.0755e-09 0.00359053 0.999994 134.011 134)" fill="#555555"/>
                                        <rect width="2" height="125.223" rx="1" transform="matrix(1 -7.0755e-09 0.00359053 0.999994 137.55 14.78)" fill="#555555"/>
                                    </motion.g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_839_0">
                                        <rect width="278" height="278" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </section>
                    )}
                    
                    <section className="abort-timer-section">
                        <Link to='/SetTimePage'><button className="abort-timer">Abort timer</button></Link>
                    </section>
                </>
            ) : (
                <TimeStopComp />
            )}

            
        </>
    );
}

export default TimerPage;
