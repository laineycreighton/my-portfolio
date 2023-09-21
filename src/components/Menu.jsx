//----- IMPORTS -----//
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

//CSS
import '../assets/css/Menu.css';

//Images
import open from '../assets/images/menu.svg';
import close from '../assets/images/x.svg';

//----- EXPORTS -----//
export default function Menu() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    const openMenu = () => {
        setMenuVisible(true);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    //Return
    return (
        //---------- MENU ----------//
        <div className='nav-menu'>

            {/*-- Nav --*/}
            {!isMenuVisible && (
                <button className='menu-open' onClick={openMenu} >
                    <img src={open} alt='open menu' />
                </button>
            )}

            {isMenuVisible && (
                <nav>
                    <button className='menu-close' onClick={closeMenu} >
                        <img src={close} alt='close menu' />
                    </button>
                    <div className='menu-links'>
                        <Link className='home-link' to="/dev">home</Link>
                        <Link className='about-link' to="/dev">about</Link>
                        <Link className='projects-link' to="/dev">projects</Link>
                        <Link className='skills-link' to="/dev">skills</Link>
                        <Link className='contact-link' to="/dev">contact</Link>
                    </div>
                </nav>
            )}
        </div>
    );
}