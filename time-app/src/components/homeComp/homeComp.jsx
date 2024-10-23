import './homeComp.css'
import homeImg from '../../assets/Frame 2.png'
import { Link } from 'react-router-dom';

function homeComp() {
    return (
        <>
            <Link to='/setTimePage'><img className='home-logo' src={homeImg} alt="img" /> </Link>
        </>
    )
}

export default homeComp