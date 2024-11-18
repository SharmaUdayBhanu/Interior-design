import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';

function Navbar() {
    const location = useLocation(); // Get the current route location

    return (
        <div className="Header">
            <div className="Logo">
                <img src={Logo} alt="Logo" />
                <span>Interno</span>
            </div>
            <div className="Menubar">
                <nav>
                    <Link
                        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}
                        to="/services"
                    >
                        Services
                    </Link>
                    <Link
                        className={`nav-item ${location.pathname === '/project' ? 'active' : ''}`}
                        to="/project"
                    >
                        Project
                    </Link>

                    <Link
                        className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
                        to="/about"
                    >
                        About
                    </Link>
                    
                    <Link
                        className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}
                        to="/blog"
                    >
                        Blog
                    </Link>

                    <Link
                        className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
                        to="/contact"
                    >
                        Contact
                    </Link>

                </nav>
            </div>
        </div>
    );
}

export default Navbar;
