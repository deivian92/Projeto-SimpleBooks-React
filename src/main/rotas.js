import React from 'react'

import Home from '../views/home'
import CadastroAutor from '../views/cadastroAutor'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/cadastro-autor" component={CadastroAutor} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas