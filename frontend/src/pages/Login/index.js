import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) {
    // Cria o state do componente
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        // Como a minha chave email é igual ao meu valor email, eu não preciso dizer que email: email
        const response = await api.post('/session', { email });

        // Pega somente o id de dentro do response.date
        const { _id } = response.data

        // localStorage = é uma banco de dados do navegador
        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }



    return (
        // <> : Tag vázia = no react chamamos isso de fragment que seria uma <div> mas não aparece no HTML.
        <>
            {/* strong = deixa a palavra em negrito */}
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="text" id="email" placeholder="Seu melhor e-mail" value={email}
                    onChange={event => setEmail(event.target.value)} />
                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}