// useMemo = observa o valor de uma variável e quando esta altera ele gera um valor para outra variável
import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg'
import api from '../../services/api'
import './styles.css'

export default function New({history}) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    /* useMemo
     * Recebe como parâmetro uma função e um array de dependências.
     */
    const preview = useMemo(() => {
        // URL.createObjectURL =  cria uma URL temporário para um arquivo que ainda não foi feito o upload
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault();
        const user_id = localStorage.getItem('user');
        
        // Envia os dados em formato multipart
        const data = new FormData();
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);
        
        await api.post('/spots', data,{
            headers:{
                user_id
            }
        });

        history.push('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                {/* event.target.files[0] = pega a imagem que foi selecionada pelo usuário */}
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="select img" />
            </label>
            <label htmlFor="company">Empresa *</label>
            <input
                id="company"
                placeholder="Sua empresa inclível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Tecnologias * <span>-- separadas por vírgula --</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">Valor da diária * <span>-- em branco para GRATUITO --</span> </label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <button className="btn" type="submit">Cadastrar</button>
        </form>
    )
}