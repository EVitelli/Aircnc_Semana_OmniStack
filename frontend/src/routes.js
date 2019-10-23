import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* 
                    path = caminho acessado pelo usuário.
                    exact = chama a rota somente se o caminho for exatamente o passado.
                */}
                <Route path='/' exact component={Login} />
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/New' component={New} />
            </Switch>
        </BrowserRouter>
    );
}