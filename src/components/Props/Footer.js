import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo.svg";
import Fb from "../../Assets/fb.svg";
import Tw from "../../Assets/tw.svg";
import Ln from "../../Assets/ln.svg";
import Inst from "../../Assets/inst.svg";

function Footer(props) {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="Footer-Section">
                <div className='Footer-first'>
                    <div className="Logo">
                        <img src={Logo} alt="Logo" />
                        <span>Interno</span>
                    </div>
                    <div className='footer-des'>
                        <span>
                            Bring Style to your place with our designs.
                        </span>
                    </div>
                    <div className='social'>
                        <a href="https://facebook.com"><img src={Fb} alt="fb" /></a>
                        <a href="https://twitter.com"><img src={Tw} alt="Tw" /></a>
                        <a href="https://linkedin.com"><img src={Ln} alt="Ln" /></a>
                        <a href="https://instagram.com"><img src={Inst} alt="Inst" /></a>
                    </div>
                </div >
                <div className='Footer-Second'>
                    <span>Pages</span>
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)}><p>About Us</p></Link>
                    <Link to="/project" onClick={() => window.scrollTo(0, 0)}><p>Our Projects</p></Link>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}><p>Contact Us</p></Link>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}><p>Services</p></Link>
                </div>
                <div className='Footer-Second'>
                    <span>Services</span>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}><p>Kitchen</p></Link>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}><p>Living Area</p></Link>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}><p>Bathroom</p></Link>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}><p>Dinning Hall</p></Link>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}><p>Bedroom</p></Link>
                </div>
                <div className='Footer-Second'>
                    <span>Contact</span>
                    <p>3610 Hno. ward 8 , Kartarpur</p>
                    <p>contact@design.com</p>
                    <p>123 - 456 - 7890</p>
                </div>
            </div >
            <div>
                <span className='copyright'>Copyright © Interno | Designed by Bhanu Uday Sharma</span>
            </div>
        </div >
    );
}

export default Footer;
