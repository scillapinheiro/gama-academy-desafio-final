import React from 'react';
import '../styles/About.css';
import Carol from '../assets/carolamazonita.JPG';
import Pedra from '../assets/fotomao.JPG';
import Selo from '../assets/selo.png';
import BannerAbout from '../assets/banner-about.svg';
import Whatsapp from '../assets/whatsapp-white.svg';
import Sustentavel from '../assets/sustentabilidade-icon.svg';
import Cliente from '../assets/cliente-icon.svg';
import Transparencia from '../assets/transparencia.svg';

export function About() {
    return (
        <>
            <div>
                <section className="background-carol-about">
                    <div className="introducao-about">
                        <h1>
                            Oi, eu sou a Carol!
                        </h1>
                        <p>
                            A idealizadora da Amazonita. A artesã por trás de todas as peças. Como uma pessoa apaixonada por artesanato, acredito que o macramê ajuda a expressar nossa personalidade e deixar os ambientes mais aconchegantes e artísticos.
                            <br />
                            <br />
                            As peças são feitas manualmente, com muito cuidado e atenção aos detalhes. Outro ponto muito importante para mim é a sustentabilidade. Gosto de trabalhar com materiais naturais e evitar o uso de plástico.
                        </p>
                    </div>

                    <div className="carol-foto">
                        <img src={Carol} alt="Carol" />
                    </div>
                </section>

                <section className="nossa-historia">
                    <h2>Nossa história</h2>
                    <p>
                        A Amazonita Macramê surgiu em 2016 como projeto para criação de uma marca, exigido numa disciplina da faculdade de Publicidade e Propaganda. O foco da empresa era voltado para acessórios, como pulseiras e colares.
                        <br />
                        <br />
                        Após um longo hiato, retornamos em 2021 com nova identidade visual, novos materiais e novos produtos, focados na decoração de interiores, mas mantendo a qualidade, a criatividade e a dedicação em todas as nossas criações.
                        <br />
                        <br />
                        Nosso nome é inspirado pela pedra Amazonita, uma pedra esverdeada, que recebeu esse nome como forma de homenagem ao rio Amazonas. Diz a lenda que os indígenas que moravam às margens do rio foram os primeiros a encontrar essa pedra tão especial. Possui uma poderosa ação filtrante, além de ser considerada um amuleto que atrai energias boas e afasta as ruins.
                    </p>

                    <div>
                        <img src={Pedra} className="pedra-foto"  alt="..."  />

                        <img src={Selo} className="selo-amazonita"  alt="..."  />
                    </div>
                </section>

                <div className="banner-about">
                    <img src={BannerAbout} alt="Logo Amazonita"  />
                </div>

                <section className="nossos-valores">
                    <h2>Nossos valores</h2>
                    <div className="valores">
                        <div className="valores-icons">
                            <img src={Sustentavel}  alt="..."  />
                            <h4>Sustentabilidade</h4>
                            <p>Utilizamos materiais reciclados em nossas peças e evitamos o uso de plástico em nossos produtos e embalagens</p>
                        </div>

                        <div className="valores-icons">
                            <img src={Cliente} alt="..." />
                            <h4>Foco no cliente</h4>
                            <p>Prezamos pelo entendimento da necessidade do cliente para oferecer os produtos que mais se adequam</p>
                        </div>

                        <div className="valores-icons">
                            <img src={Transparencia} alt="..." />
                            <h4>Transparência</h4>
                            <p>Gostamos de mostrar nosso processo de criação e trazer clareza às principais dúvidas</p>
                        </div>
                    </div>
                </section>

                <div className="about-pedido">
                    <h3>Se interessou pelo que oferecemos?</h3>
                    <a className="button-whatsapp" href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
                </div>
            </div>
        </>
    );
}

export default About;