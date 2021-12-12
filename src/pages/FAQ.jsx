import React from 'react';
import '../styles/FAQ.css';
import Whatsapp from '../assets/whatsapp.svg';
import '../styles/globalStyle.css'


export function FAQ() {
    return (
        <>
        <div className="backgroundfaq">
            <div className="titulofaq">
                <h1>Perguntas Frequentes</h1>
            </div>

            <div className="textofaq">
                <h4> Qual a diferença entre o galho natural tratado e a cavilha de madeira? </h4>
                <p>O galho natural tratado deixa qualquer peça mais exclusiva. Eles são únicos, não existe um galho exatamente igual ao outro, o que também torna cada painel único. Temos galhos naturais de vários tamanhos, cores, formas e espessuras. A cavilha de madeira, por sua vez, mantém um padrão, são sempre retas e mais finas que os galhos naturais, dando mais destaque ao macramê. A cavilha também é encontrada em inúmeros tamanhos diferentes.</p>
                <div className="underline"></div>

                <h4>Como faço para limpar meu produto?</h4>
                <p>Não é possível lavar, somente tirar a poeira. Para limpezas mais pontuais, recomenda-se utilizar uma escova pequena, como escova de dentes, com sabão neutro e limpar a parte suja.</p>
                <div className="underline"></div>

                <h4>Quais cuidados devo tomar para preservar minha peça?</h4>
                <p>É preciso evitar deixar a peça em ambientes externos em que possa tomar chuva ou à exposição do sol, pois pode danificá-la. As partes de madeira não podem ser molhadas, com exceção para peças com madeira envernizada.</p>
                <div className="underline"></div>

                <h4>Há algum cuidado especial para retirar a peça da embalagem?</h4>
                <p>As peças chegam enroladas para facilitar o envio, por isso podem ficar um pouco amassadas. Para retornar ao formato, é preciso somente passar a mão cuidadosamente.</p>
            </div>

            <div className="duvidalink">
                <h3>Ainda tem alguma dúvida?</h3> 
                <a className="button-whatsapp" href="https://wa.me/32999723358?text=Olá!%20Tenho%20uma%20dúvida." rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp logo" />Fale conosco</a> </div>
            </div>
        </>
    );
}

export default FAQ;