import React from 'react';
import Logotipo from '../assets/logotipo.svg';
import Whatsapp from '../assets/whatsapp-green.svg';
import '../styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar container">
                <div className="logo">
                    <a href="./">
                        <img src={Logotipo} width="100%" height="25" alt="Amazonita Macramê logo" />
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
                        <li>
                            <a className="budget" href="https://wa.me/52999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento." target="_blank"><img src={Whatsapp} width="11" height="11" alt="Whatsapp logo" />Solicite um Orçamento</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;