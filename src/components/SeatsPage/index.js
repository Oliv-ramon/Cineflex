import Footer from "../App/Footer";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {get, post} from "axios";
import Subtitle from "./Subtitle";
import Seat from "./Seat";

function SeatsPage ({purchaseInfo}) {
    const {sectionId} = useParams();
    const [info, setInfo] = useState(null);
    const [seatsChecked, setSeatsChecked] = useState([])
    const [cpf, setCpf] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        const promisse = get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sectionId}/seats`);

        promisse.then(({data}) => {setInfo(data)
            console.log(data)})
    }, [])

    if (info === null) return 'carregando...'
        
    return (
        <Container className="container">    
            <section className="tittle">Selecione o(s) assento(s)</section>
            <Seats>
                {info.seats.map(({id, name, isAvailable}) => 
                    <Seat id={id} isAvailable={isAvailable} checkedState={{seatsChecked, setSeatsChecked}}>
                        {name}{console.log()}
                    </Seat>)}
            </Seats>
            <Subtitle></Subtitle>
            <Form>section
                <label>Nome do comprador:</label>
                <input value={name} onChange={({target: {value}}) => setName(value)} placeholder="Digite seu nome..."/>
                <label>CPF do comprador:</label>
                <input value={cpf} onChange={({target: {value}}) => setCpf(value)} placeholder="Digite seu CPF..."/>
            </Form>
            <Link to={"/sucesso"} onClick={() => reserveSeats(seatsChecked, cpf, name, purchaseInfo)}>Reservar assento(s)</Link>
            <Footer url={info.movie.posterURL} title={info.movie.title} day={info.day.weekday} date={info.day.date} purchaseInfo={purchaseInfo}/>   
        </Container>
    )
}

function reserveSeats(seatsChecked, cpf, name, purchaseInfo) {
    const promisse = post(`https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`, {
        ids: seatsChecked.map(({id}) => id),
        name,
        cpf,
    });

    promisse.then(() => {console.log("OK")
        purchaseInfo.cpf = cpf
        purchaseInfo.name = name
        purchaseInfo.seats = seatsChecked.map(({seat}) => seat)
    })
    promisse.catch(() => alert("Ouve algum erro ao reservar os assentos, tente novamente"))
}

const Seats = styled.ul`
    padding: 0 24px;

    display: flex;
	justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 7px;
`

const Form = styled.form`
    padding: 41px 24px 34px 24px;

    display: flex;
    flex-direction: column;

    label {
        padding-bottom: 2px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }

    input {
        all: unset;
        height: 51px;
        padding: 0 16px;
        margin-bottom: 7px;
    
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        ::placeholder {
            font-family: Roboto;
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 21px;
        }
    }
`

const Container = styled.section`
    padding: 0;

    a {
        all: unset;
        width: 225px;
        height: 42px;
        margin: 0 auto;

        background-color: #E8833A;
        border-radius: 3px;

        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;
    }
` 

export default SeatsPage