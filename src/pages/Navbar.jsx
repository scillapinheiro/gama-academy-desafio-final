import React from 'react';
import Logotipo from '../assets/logotipo.svg';
import Whatsapp from '../assets/whatsapp-white.svg';
import '../styles/Navbar.css'

export function Navbar(){
    return (
        <nav className="navbar container">
            <div className="logo">
                <a href="./">
                    <img src={Logotipo} alt="Amazonita Macramê logo" />
                </a>
            </div>
            <div className="navbar nav">
                <ul className="nav">
                    <li>
                        <a href="./About">Sobre</a>
                    </li>
                    <li>
                        <a href="./Galery">Galeria</a>
                    </li>
                    <li>
                        <a href="./FAQ">Perguntas Frequentes</a>
                    </li>
                    </ul>
                <a className="button-whatsapp" href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
            </div>
        </nav>
    );
}

export default Navbar;