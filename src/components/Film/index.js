import "./style.css";
import {get} from "axios"
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from "../App/Footer";


function Film() {
    const {filmId} = useParams();
    const [info, setInfo] = useState(null);


    useEffect(() => {
        const promisse = get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${filmId}/showtimes`);

        promisse.then(({data}) => {setInfo(data)
            console.log(data)})
    },[])

    if ( info===null ) return 'carregando...'

    return (
        <>
            <section className="tittle">Selecione o horário</section>
            <ul className="times-list">
                {info.days.map(({weekday, date, showtimes}) => (
                    <li className="time">
                        <span className="day">
                            {weekday} - {date}
                        </span>
                        <ul>
                            {showtimes.map(({id, name}) => <Link to={`/assentos/${id}`} className="hour">{name}</Link>)}
                        </ul>
                    </li>
                ))}
            </ul>
            <Footer url={info.posterURL} title={info.title} showtimes={info.showtimes}/>
        </>
    )
}

export default Film