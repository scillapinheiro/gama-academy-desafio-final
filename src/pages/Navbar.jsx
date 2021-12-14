import React, { useState } from "react";
import Logotipo from "../assets/logotipo.svg";
import LogoMobile from "../assets/logotipo-mobile.svg";
import MenuIcon from "../assets/menu-icon.svg";
import Whatsapp from "../assets/whatsapp.svg";
import "../styles/Navbar.css";

export function Navbar() {
    const [open, setOpen] = useState(false);
    
  return (
    <div className="navbar container">
      <div className="logo">
        <a href="./">
          <img src={Logotipo} alt="Amazonita Macramê logo" />
        </a>
      </div>
      <nav id="nav">

        <ul id="menu" className={open ? "open-menu" : ""}>
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
            <a
              href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              rel="noreferrer"
              target="_blank"
            >
              <img src={Whatsapp} alt="Whatsapp logo" />
              Faça seu pedido
            </a>
          </li>
        </ul>
      </nav>
        <button id="btn-mobile" onClick={()=> setOpen(!open)}><img src={MenuIcon} alt="Icone de menu" /></button>
      <div className="logo-mobile">
        <a href="./">
          <img src={LogoMobile} alt="Amazonita Macramê logo" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
