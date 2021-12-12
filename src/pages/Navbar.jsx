import React from 'react';
import Logotipo from '../assets/logotipo.svg';
import LogoMobile from '../assets/logotipo-mobile.svg';
import MenuIcon from '../assets/menu-icon.svg';
import Whatsapp from '../assets/whatsapp.svg';
import '../styles/Navbar.css';

export function Navbar(){
    return (
        <div className="navbar container">
            <div className="logo">
                <a href="./">
                    <img src={Logotipo} alt="Amazonita Macramê logo" />
                </a>
            </div>
            <nav id="nav">
                <img id="btn-mobile" src={MenuIcon} alt="Icone de menu" />
                
                <ul id="menu">
                    <li>
                        <a href="./About">Sobre</a>
                    </li>
                    <li>
                        <a href="./Galery">Galeria</a>
                    </li>
                    <li>
                        <a href="./FAQ">Perguntas Frequentes</a>
                    </li>
                    <li className="button-whatsapp">
                        <a href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
                    </li>
                    </ul>
            </nav>
            <div className="logo-mobile">
                <a href="./">
                    <img src={LogoMobile} alt="Amazonita Macramê logo" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;