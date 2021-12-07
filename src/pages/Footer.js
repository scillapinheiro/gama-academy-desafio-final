import React from 'react';
import WhatsappWhite from '../assets/whatsapp-white.svg'
import Email from '../assets/email.svg';
import Logo from '../assets/logo.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import '../styles/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer container">
                    <div className="contact">
                        <h3>Entre em contato</h3>
                        <div className="whatsapp">
                            <img src={WhatsappWhite} width="20" height="20" alt="Whatsapp logo" />
                            <a href="https://wa.me/52999723358?text=Olá!" target="_blank">(52) 99972-3358</a>
                        </div>
                        <div className="email">
                            <img src={Email} width="20" height="20" alt="Email" />
                            <a href="amazonitamacrame@gmail.com">amazonitamacrame@gmail.com</a>
                        </div>
                    </div>
                    <img src={Logo} width="100%" height="120" alt="Amazonita Macramê logo" />
                    <div className="social-media">
                        <h3>Redes socias</h3>
                        <div class="social-media icons">
                            <a href="#" target="_blank"><img src={Facebook} width="42" height="42" alt="Facebook logo" /></a>
                            <a href="#" target="_blank"><img src={Instagram} width="42" height="42" alt="Instagram logo" /></a>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Footer;