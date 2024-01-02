// Header.js

import React from 'react';
import './Header.css';
import logo from './images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                {/* Aquí puedes colocar tu logo */}
                <img src={logo} alt="JobExpress" />
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contactanos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
