import './analogTimer.css';
import { Link } from 'react-router-dom';
import clockImg from '../../assets/clock.png';

function AnalogTimerComp() {
    return (
        <>
            <header className="title">interval</header>
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
                        <path d="M260.272 178.583L270 181.752" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M263.728 165.654L273.738 167.79" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M265.827 152.444L275.997 153.515" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M266.53 139.08H276.761" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M265.844 125.716L276.014 124.644" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M263.769 112.497L273.771 110.362" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M260.32 99.568L270.048 96.3998" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M255.551 87.0696L264.889 82.8981" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M249.5 75.1443L258.357 69.9795" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M242.243 63.9141L250.513 57.8826" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M233.851 53.5128L241.45 46.647" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M224.428 44.0435L231.271 36.4129" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M214.067 35.6095L220.079 27.3125" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M202.882 28.3134L207.994 19.427" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M190.987 22.2437L195.152 12.874" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M178.536 17.4599L181.694 7.70095" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M165.641 14.0003L167.762 3.96582" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M152.464 11.9183L153.532 1.71552" stroke="#222222" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_839_0">
                            <rect width="277.234" height="277.234" fill="white" transform="translate(0.186523 0.392334)"/>
                        </clipPath>
                    </defs>
                </svg>
            </section>
        </>
    );
}

export default AnalogTimerComp;
