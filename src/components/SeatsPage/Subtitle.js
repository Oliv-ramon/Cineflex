import styled from "styled-components";

function Subtitle() {
    return (
        <Subs>
            <SeatStatus>
                <Item style={{bgColor: "#8DD7CF", bdColor: "#1AAE9E"}}/>
                <span>Selecionado</span>
            </SeatStatus>
            <SeatStatus>
                <Item style={{bgColor: "#C3CFD9", bdColor: "#808F9D"}}/>
                <span>Disponível</span>
            </SeatStatus>
            <SeatStatus>
                <Item style={{bgColor: "#FBE192", bdColor: "#F7C52B"}}/>
                <span>Indisponível</span>
            </SeatStatus>
        </Subs>
    )
}

const Subs = styled.ul`
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
`;

const Item = styled.li`
    height: 26px;
	width: 26px;
    margin-bottom: 12px;
	border-radius: 12px;

    background-color: ${({style: {bgColor}}) => bgColor};
    border: 1px solid ${({style: {bdColor}}) => bdColor};

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;

    display: flex;
    justify-content: center;
    align-items: center;	

`;

export default Subtitle;