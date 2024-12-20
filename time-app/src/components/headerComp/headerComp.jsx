import './headerComp.css';
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';

function HeaderComp({ handleDisplayAnalog, handleDisplayDigital }) {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: {
            left: 0,
            transition: {
                duration: 0.5,
            }
        },
        closed: {
            left: -500,
            transition: {
                duration: 0.5,
            }
        }
    };

    return (
        <>
            <motion.div className="header-container">
                <motion.svg
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                    className='nav-icon' 
                    width="32" height="32" 
                    viewBox="0 0 32 32" fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="32" width="12" height="32" transform="rotate(90 32 0)" fill="white"/>
                    <rect x="32" y="14" width="8" height="32" transform="rotate(90 32 14)" fill="white"/>
                    <rect x="32" y="24" width="4" height="32" transform="rotate(90 32 24)" fill="white"/>
                    <rect x="32" y="30" width="2" height="32" transform="rotate(90 32 30)" fill="white"/>
                </motion.svg>

                <motion.ul
                    className="menu"
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        variants={menuVariants}
                        style={{ backgroundColor: 'black' }}
                >
                    <Link to="/"><motion.li className="menu-item">Home</motion.li></Link>
                    <motion.li className="menu-item" onClick={handleDisplayAnalog}>Analog</motion.li>
                    <motion.li className="menu-item" onClick={handleDisplayDigital}>Digital</motion.li>
                </motion.ul>
            </motion.div>
        </>
    );
}

export default HeaderComp;
