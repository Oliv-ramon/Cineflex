import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {get} from 'axios';
import styled from "styled-components";
import "./style.css"


function Films() {
    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        const promisse = get("https://mock-api.driven.com.br/api/v4/cineflex/movies")

        promisse.then(({data}) => setFilmList(data))
    }, [])

    if (!filmList) {
        return "...carregando"
    } else {
        return (
            <>    
                <section className="tittle">Selecione o filme</section>
                <FilmsList>
                    {filmList.map(({id, posterURL}) => (
                        <Link to={`/sessoes/${id}`}>
                            <img src={posterURL} alt="film poster"/>
                        </Link>
                    ))}
                </FilmsList>
            </>
        )
    }
}

const FilmsList = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    a {
        height: 209px;
        width: 145px;
        margin-bottom: 11px;
        
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 193px;
            width: 129px;  
        }
    }
`

export default Films