import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'


export default function Dashboard() {
    /* useEffect
     * Recebe como parâmetro uma função e um array de dependências.
     * array = pode conter várias variáveis que ao serem alteradas executará a função.
     * Quando passamos um array vázio, significa que a função será executada somente uma vez.
     * Não pode receber uma função async.
     */
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: {
                    user_id
                }
            });
            setSpots(response.data)
            console.log(spots)
        };
        loadSpots();
    }, [])


    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</span>
                    </li>
                ))}
            </ul>

            <Link to='/new'>
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}