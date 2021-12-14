import React, { useEffect, useState } from 'react';
import '../styles/Galery.css'
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
            <div>
                    <p>{produtos[0]?.nome}</p>
            </div>

            {/* {produtos?.map(({ preco, descricao }) => (
          preco
        ))} */}
        </>
    );
}

export default Galery;