import React, { useEffect, useState } from 'react';
import '../styles/Galery.css'
import Whatsapp from '../assets/whatsapp.svg';
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

            {/* <img> {produtos[0]?.link_img} </img> */}
            <div className="fotos-galeria">
                <>
                    <div className="catalogo">
                        {produtos?.map(({ id_produto, produto, categoria1, categoria2, id_categoria1, id_categoria2, preco1, desc_produto, preco2, link_img }) => (

                            <div key={id_produto} className="card">
                                <img src={link_img} alt={"produto" + id_produto}></img>
                                <p>{produto}</p>
                                    <p>{categoria1}</p>
                                    <p>{preco1}{desc_produto}</p>
                                    <p>{categoria2}</p>
                                    <p>{preco2}</p>
                            </div>

                        ))}

                    </div>
                </>
            </div>

            <div className="duvidalink">
                <h3>Gostou de algum trabalho?</h3>
                <a className="button-whatsapp" href="https://wa.me/32999723358?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Faça seu pedido</a>
            </div>
        </>
    );
}

export default Galery;