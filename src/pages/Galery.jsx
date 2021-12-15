import React, { useEffect, useState } from 'react';
import '../styles/Galery.css'
import Whatsapp from '../assets/whatsapp.svg';
import Previa9 from '../assets/previa9.JPG'
import Previa10 from '../assets/previa10.JPG'
import Previa11 from '../assets/previa11.JPG'
import { Api } from '../services/api';

export function Galery() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        Api.get('/produtos').then((res) => {
            setProdutos(res.data);
        });
    }, []);

    console.log(produtos);

    return (
        <>
            <div className="background-galeria">
                <div className="titulo-galeria">
                    <h1>Galeria</h1>
                </div>
            </div>
            
            <div className="fotos-galeria">
                <>
                    <div className="catalogo">
                        {produtos?.map(({ id_produto, produto, categoria1, categoria2, preco1, desc_produto, preco2, link_img }) => (

                            <div key={id_produto} className="card">
                                <img src={link_img} alt={produto}></img>
                                <p>{produto}</p>
                                <p>{categoria1} {preco1} {desc_produto}</p>
                                <p>{categoria2} {preco2}</p>
                            </div>
                        ))}
                        <div className="card">
                            <img src={Previa9} alt="Cartões de visita e pedra Amazonita" />
                            <p>Cartões de visita e pedra Amazonita</p>
                        </div>
                        <div className="card">
                            <img src={Previa10} alt="Cavilhas de madeira usadas nas peças" />
                            <p>Cavilhas de madeira usadas nas peças</p> 
                        </div>
                        <div className="card">
                            <img src={Previa11} alt="Cores de fios disponíveis" />
                            <p>Cores de fios disponíveis</p>
                        </div>
                    </div>
                </>
            </div>

            <div className="duvidalink">
                <h3>Gostou de algum trabalho?</h3>
                <a className="button-whatsapp" href="https://wa.me/5532999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
            </div>
        </>
    );
}

export default Galery;