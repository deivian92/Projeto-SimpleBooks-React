import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'
class CadastroAutor extends React.Component {

    state = {
        nome: '',
        dataDeNascimento: '',
        biografia: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }



    render(){
        return (
        <div className="container">
            <Card title ="Cadastro de Autor"> 
               <div className="row">
                   <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                        id="inputNome"
                                        className="form-control"
                                        name="nome" 
                                        onChange={e => this.setState({ nome: e.target.value })}/>

                            </FormGroup>   
                            <FormGroup label="Data de Nascimento: *" htmlFor="inputNome">
                                <input type="text"
                                       id="inputDataDeNascimento"
                                       className="form-control"
                                       name="dataDeNascimento"
                                       onChange={e => this.setState({ dataDeNascimento: e.target.value })} />
                            </FormGroup> 
                            <FormGroup label="Biografia: " htmlFor="textareaBiografia">
                                <textarea id="textareaBiografia"                                        
                                        className="form-control"
                                        name="biografia"                                       
                                        onChange={e => this.setState({ biografia: e.target.value })} />
                            </FormGroup>
                            <button onClick={ this.cadastrar } type="button" className="btn btn-success">Salvar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                   </div>
                </div>            
            </Card>
        </div>
        )
    }
}

export default CadastroAutor