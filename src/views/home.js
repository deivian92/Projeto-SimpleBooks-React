import React from 'react'
import Card from '../components/card'

class Home extends React.Component {

    render(){
        return (            
                <div className="row">
                    <div className="col-md-6" style={ {position : 'relative', left: '300px'} }>
                        <div className="bs-docs-section">
                            <div  className='text-center'>
                                <Card title="Autores">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="bs-component">
                                                <fieldset>
                                                    <p> Bem vindo a Livraria SimpleBooks </p>
                                                    <p>Deseja adicionar o primeiro autor?</p>
                                                    <br />
                                                    <button className="btn btn-success">Adicionar</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                </div>
            </div>        
        )
        
    }
}

export default Home