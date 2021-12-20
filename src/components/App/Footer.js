import styled from "styled-components"

function Footer({url, title, day, date}) {

    return (
        <FilmSelected>
            <div>
                <img src={url} alt='film poster'/>
            </div>
            <p>
                {title}<br/>
                {day ? `${day} - ${date}` : day}
            </p>
        </FilmSelected>
    )
}

const FilmSelected = styled.footer`
    width: 100%;
    height: 117px;
    padding-left: 10px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;
    gap: 10px;

    position: fixed;
    bottom: 0;
    left: 0;

    div {
        width: 64px;
        height: 89px;
        
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 48px;
            height: 72px; 
        }
    }

    p {
        font-family: Roboto;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        color: #293845;
    }
`

export default Footer