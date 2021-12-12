import React from 'react';
import '../styles/LandingPage.css'
import ImageSlider from '../pages/Slider.jsx';
import Whatsapp from '../assets/whatsapp.svg';
import Carol from '../assets/carolamazonitamain.jpg';
import Produto from '../assets/produtomain.jpg';
import Produto2 from '../assets/produtomain2.jpg';
import {SliderData} from '../assets/SliderData';


export function LandingPage() {
    return (
        <>
            <section className="bannermain">
                <div className="texto-header">
                    <h1>Amazonita Macramê</h1>
                    <p>Peças decorativas em macramê, produzidas artesanalmente com fios 100% algodão, de alta qualidade, trazendo design moderno, artístico e único aos ambientes</p>
                    <a className="button-whatsapp" href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
                </div>
                <div className="imagens-header">
                    <div className="img1"><img src={Carol} alt="" /></div>
                    <div className="img2"><img src={Produto} alt="" />
                    <img src={Produto2} alt="" /></div>
                </div>
            </section>

            <section className="carrosselmain">
                <div className="texto-carrossel">
                    <h2>Criamos peças de macramê autênticas de acordo com a sua necessidade</h2>
                    <p>Acreditamos que cada peça é única e gostamos de incluir nossos clientes no processo criativo. Todas as nossas criações recebem nomes de plantas, para reforçar nossos valores ligados ao meio ambiente. 
                    <br />
                    <br />
                    Em relação ao macramê como técnica, as possibilidades de criação são infinitas! Trabalhamos com produtos principalmente <strong>sob encomenda</strong>. Temos algumas peças variáveis a pronta entrega.<br />
                    Trabalhamos também com <strong>aluguel para decoração de festas, eventos e casamentos.</strong></p>
                    <div className="sugestoes">
                        <h4>Sugestões de peças populares:</h4>
                        <div className="lista-sugestoes">
                            <div>
                                <ul>
                                    <li>Paineis de parede</li>
                                    <li>Espelhos</li>
                                    <li>Mandalas</li>
                                    <li>Almofadas</li>
                                    <li>Chaveiros</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Suporte para plantas</li>
                                    <li>Luminárias</li>
                                    <li>Cortinas</li>
                                    <li>Balanço suspenso</li>
                                    <li>Prateleira</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ImageSlider
                    slides={SliderData}
                    ></ImageSlider>

                </div>
                <div className="carrossel">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </section>

            
        </>
    );
}

export default LandingPage;