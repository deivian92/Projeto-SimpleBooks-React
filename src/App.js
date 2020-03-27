import React from 'react';

import CadastroAutor from './views/cadastroAutor'

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'
class App extends React.Component {
render(){
  return(
  <div className="container">
    <CadastroAutor />
  </div>
  )
}
  
}

export default App;