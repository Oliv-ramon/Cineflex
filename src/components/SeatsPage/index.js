import Footer from "../App/Footer";
import styled from "styled-components";

function SeatsPage () {
    const seatsArr = [...Array(50).keys()]

    return (
        <>    
            <section className="tittle">Selecione o(s) assento(s)</section>
            <Seats>
                {seatsArr.map(num => <Seat color="#C3CFD9" borderColor="#808F9D">{num < 9 ? `0${++num}` : ++num}</Seat>)}
            </Seats>
            <Subtittle>
                <SeatStatus>
                    <Seat color="#8DD7CF" borderColor="#1AAE9E"/>
                    <span>Selecionado</span>
                </SeatStatus>
                <SeatStatus>
                    <Seat color="#C3CFD9" borderColor="#808F9D"/>
                    <span>Disponível</span>
                </SeatStatus>
                <SeatStatus>
                    <Seat color="#FBE192" borderColor="#F7C52B"/>
                    <span>Indisponível</span>
                </SeatStatus>
            </Subtittle>
            <Form>
                <label>Nome do comprador:</label>
                <input placeholder="Digite seu nome..."/>
                <label>CPF do comprador:</label>
                <input placeholder="Digite seu CPF..."/>
            </Form>
            <Button>Reservar assento(s)</Button>
            <Footer></Footer>
        </>
    )
}

const Seats = styled.ul`
    padding: 0 24px;

    display: flex;
	justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 7px;
`

const Seat = styled.li`
    height: 26px;
	width: 26px;
    margin-bottom: 12px;
	border-radius: 12px;

    background-color: ${({color}) => color};
    border: 1px solid ${({borderColor}) => borderColor};

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;

    display: flex;
    justify-content: center;
    align-items: center;	

`
const Subtittle = styled.ul`
    padding-top: 8px;
    display: flex;
	justify-content: space-evenly;
`

const SeatStatus = styled.li`
    display: flex;
    align-items: center;	
    flex-direction: column;

    span {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

    li {
        margin-bottom: 8px;
    }
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

const Button = styled.button`   
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
    text-align: center;
    color: #fff;
`

export default SeatsPage