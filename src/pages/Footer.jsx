import React from 'react';
import Whatsapp from '../assets/whatsapp.svg';
import Email from '../assets/email.svg';
import Logo from '../assets/logo.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import '../styles/Footer.css'

export function Footer() {
    return (
        <>
            <div className="footer container">
                <div className="contact">
                    <h3>Entre em contato</h3>
                    <div className="whatsapp">
                        <img src={Whatsapp} alt="Whatsapp logo" />
                        <a href="https://wa.me/32999723358?text=Olá!" rel="noreferrer" target="_blank">(32) 99972-3358</a>
                    </div>
                    <div className="email">
                        <img src={Email} alt="Email" />
                        <a href="mailto:amazonitamacrame@gmail.com">amazonitamacrame@gmail.com</a>
                    </div>
                </div>
                <div className="logo">
                    <img src={Logo} alt="Amazonita Macramê logo" />
                </div>
                <div className="social-media">
                    <h3>Redes sociais</h3>
                    <div className="social-media icons">
                        <a className="facebook-icon" href="https://www.facebook.com/amazonita.macrame/" rel="noreferrer" target="_blank">
                            <img src={Facebook} alt="Facebook logo" />
                        </a>

                        <a className="instagram-icon" href="https://www.instagram.com/amazonitamacrame/" rel="noreferrer" target="_blank">
                            <img src={Instagram} alt="Instagram logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;