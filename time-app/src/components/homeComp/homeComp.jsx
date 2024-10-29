import './homeComp.css'
import homeImg from '../../assets/Frame 2.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function homeComp() {
    return (
        <>
            <motion.div
                initial={{ scale: 0}}
                animate={{ scale: 1}}
                whileHover={{ scale: 1.2}}
            >
                <Link to='/setTimePage'><img className='home-logo' src={homeImg} alt="img" /> </Link>
            </motion.div>
        </>
    )
}

export default homeComp