import React from 'react'

import { withRouter } from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'

import AutorService from '../service/autorService'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
class CadastroAutor extends React.Component {

    state = {
        nome: '',
        dataDeNascimento: '',
        biografia: ''
    }

    constructor(){
        super();
        this.service = new AutorService();
    }

    cadastrar = () => {
        const autor = {
            nome: this.state.nome,
            dataDeNascimento: this.dataDeNascimento,
            biografia: this.biografia
        }
        
        this.service.salvar(autor)
            .then(response => {
                mensagemSucesso('Autor cadastrado com sucesso!')
                this.props.history.push('/home')
            }).catch(error => {
                mensagemErro(error.response)
            })
    }

    cancelar = () => {
        this.props.history.push('/home')
    }

    render(){
        return (        
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
                            <button onClick={ this.cancelar } type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                   </div>
                </div>            
            </Card>        
        )
    }
}

export default withRouter(CadastroAutor)