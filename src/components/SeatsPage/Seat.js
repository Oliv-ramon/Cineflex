import styled from "styled-components";
import { useState, } from 'react';

function Seat({id, isAvailable, checkedState: {seatsChecked, setSeatsChecked}, children: [name]}) {

    const [selected, setSelected] = useState(false);

    function selectSeat({classList, innerText: seat}) {
        const [id]  = [...classList].slice(-1)

        if (isAvailable) {
            if (!selected) {
                setSelected(true)
                setSeatsChecked([...seatsChecked, {id, seat}])
            } else {
                setSelected(false)
                setSeatsChecked(seatsChecked.filter((s) => s !== id))
            }
        } else {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <SeatElement
            style={isAvailable ? {bgColor: "#C3CFD9", bdColor: "#808F9D"} : {bgColor: "#FBE192", bdColor: "#F7C52B"}}
            className={selected ? `selected ${id}` : `${id}`}
            onClick={({target}) => selectSeat(target)}
        >
            {name}
        </SeatElement>
    )
}

const SeatElement = styled.li`
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

    &.selected {
        background-color: #8DD7CF;
        border: 1px solid #1AAE9E;
    }	

`;

export default Seat;
