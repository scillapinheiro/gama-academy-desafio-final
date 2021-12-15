import React from 'react';
import '../styles/LandingPage.css'
import ImageSlider from '../pages/Slider.jsx';
import Whatsapp from '../assets/whatsapp.svg';
import Carol from '../assets/carolamazonitamain.jpg';
import Carol2 from '../assets/carolamazonitamain2.jpg';
import Produto from '../assets/produtomain.jpg';
import Produto2 from '../assets/produtomain2.jpg';
import { SliderData } from '../assets/SliderData';
import Um from '../assets/pedido-um.svg'
import Dois from '../assets/pedido-dois.svg'
import Tres from '../assets/pedido-tres.svg'
import Quatro from '../assets/pedido-quatro.svg'
import Previa1 from '../assets/previa1.jpeg'
import Previa2 from '../assets/previa2.jpeg'
import Previa3 from '../assets/previa3.jpeg'
import Previa4 from '../assets/previa4.jpeg'
import Previa5 from '../assets/previa5.jpeg'
import Previa6 from '../assets/previa6.jpeg'
import Previa7 from '../assets/previa7.jpeg'
import Previa8 from '../assets/previa8.jpeg'


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
                    <div className="img1">
                        <img src={Carol} alt="" />
                    </div>
                    <div className="img2">
                        <div>
                            <img src={Produto} alt="" />
                        </div>
                        <div className="gap">
                            <img src={Produto2} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="carrossel-main">
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
                </div>
                <div className="slider-componente">
                    <ImageSlider
                        slides={SliderData}
                    ></ImageSlider>
                </div>
            </section>

            <section className="passos-venda">
                <h2>Seu pedido: como funciona</h2>
                <div className="como-funciona">
                    <div className="como-funciona1">
                        <img src={Um} alt="Passo Um" />
                        <div>
                            <h4>Entendendo a necessidade</h4>
                            <p>
                                Durante a conversa com o cliente, são apresentados os produtos e de acordo com a preferência, podem ser escolhidas a cor do fio e as opções específicas de cada produto, como tamanho e material do suporte. Também é possível sugerir opções em função do ambiente do cliente.
                            </p>
                        </div>
                    </div>
                    <div className="como-funciona2">
                        <img src={Dois} alt="Passo Dois" />
                        <div>
                            <h4>Criação</h4>
                            <p>
                                Nossos produtos são todos confeccionados com fio 100% algodão, conferindo maior qualidade e melhor sensação ao toque. São peças autorais, feitas manualmente, além de serem utilizados materiais reciclados e tratados, dando aparência mais rústica ao produto final.
                            </p>
                        </div>
                    </div>
                    <div className="como-funciona3">
                        <img src={Tres} alt="Passo Três" />
                        <div>
                            <h4>Pagamento</h4>
                            <p>
                                Aceitamos pagamentos por meio de boleto, PicPay, Pix, máquina de cartão ou dinheiro.
                            </p>
                        </div>
                    </div>
                    <div className="como-funciona4">
                        <img src={Quatro} alt="Passo Quatro" />
                        <div>
                            <h4>Entrega</h4>
                            <p>
                                As peças podem ser retiradas localmente ou por entrega (para residentes em Juiz de Fora/MG) ou enviadas para demais cidades do Brasil.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="home-btn-pedido">
                <a className="button-whatsapp" href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
            </div>

            <section className="background-carol-home">
                <div className="introducao-home">
                    <h2>
                        Oi, eu sou a Carol!
                    </h2>
                    <p>
                        A idealizadora da Amazonita. A artesã por trás de todas as peças. Como uma pessoa apaixonada por artesanato, acredito que o macramê ajuda a expressar nossa personalidade e deixar os ambientes mais aconchegantes e artísticos.
                    </p>
                    <a href="./About" className="link-about"> Saiba mais sobre a Amazonita &rarr; </a>
                </div>

                <div className="carol-foto2">
                    <img src={Carol2} alt="Carol" />
                </div>
            </section>

            <div className="previa-galeria">
                <h2>Galeria</h2>
                <div className="previa-fotos">
                    <img src={Previa1} />
                    <img src={Previa2} />
                    <img src={Previa3} />
                    <img src={Previa4} />
                    <img src={Previa5} />
                    <img src={Previa6} />
                    <img src={Previa7} />
                    <img src={Previa8} />
                </div>
                <div className="link-galery">
                <a href="./Galery"> Ver galeria completa &rarr; </a>
                </div>
            </div>
        </>
    );
}

export default LandingPage;