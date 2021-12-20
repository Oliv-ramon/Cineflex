import { Link } from "react-router-dom";
import styled from "styled-components";

function SucessPage({purchaseInfo}) {
    const {title, hour, date, cpf, name, seats} = purchaseInfo;

    if (!seats) return "carregando...";

    return (
        <SucessSection>
            <section className="tittle">Pedido feito<br/> com sucesso!</section>
            <PuchaseInfo>
                <li>
                    <span>Filme e sessão</span>
                    {title}<br/>
                    {date} {hour}
                </li>
                <li>
                    <span>Ingressos</span>
                    {seats.map((seat) => <>Assento {seat}<br/></>)}
                </li>
                <li>
                    <span>Comprador</span>
                    Nome: {name}<br/>
                    CPF: {cpf}
                </li>
            </PuchaseInfo>
            <Link to="/" onClick={() => console.log(seats)}>Voltar pra Home</Link>
        </SucessSection>
    )
} 

const SucessSection = styled.section`
    display: flex;
    flex-direction: column;

    .tittle {
        font-weight: 700;
        color: #247A6B;
        text-align: center;
    }
    
    a {
        all: unset;
        width: 225px;
        height: 42px;
        margin: 20px auto 40px auto;

        background-color: #E8833A;
        border-radius: 3px;

        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #fff;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const PuchaseInfo = styled.ul`
    padding-left: 28px;

    li {
        padding-bottom: 25px;
        
        display: flex;
        flex-direction: column; 
        gap: 15px;
    }

    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;


    span {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: #293845;
    }
`;

export default SucessPage;