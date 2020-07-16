import React from 'react'
import api from '../../services/api'

import './form-cadastro-style.css'

class FormCadastro extends React.Component {
    
    formVazio = {
        nome: '',
        email: '',
        contato: '',
        cpf: '',
        datanascimento: '',
        cod_setor: '',
        desc_setor: ''
    }

    constructor(props) {
        super(props)

        this.state = {
            form: this.formVazio
        }
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event, tipo) {
        switch(tipo){
            case 'nome':
                this.setState({form: {...this.state.form, nome: event.target.value}})
                break
            case 'email':
                this.setState({form: {...this.state.form, email: event.target.value}})
                break
            case 'contato':
                this.setState({form: {...this.state.form, contato: event.target.value}})
                break
            case 'cpf':
                this.setState({form: {...this.state.form, cpf: event.target.value}})
                break
            case 'datanascimento':
                this.setState({form: {...this.state.form, datanascimento: event.target.value}})
                break
            case 'cod_setor':
                this.setState({form: {...this.state.form, cod_setor: event.target.value}})
                break
            case 'desc_setor':
                this.setState({form: {...this.state.form, desc_setor: event.target.value}})
                break
            default: 
                break
            }
    }
  
    render() {
        const cadastrar = async (event) => {
            event.preventDefault();
            await api.post('/colaborador/save', this.state.form)
            .then(response => {
                alert('foi adicionado aos colaboradores!')
                this.setState({form: this.formVazio})
            })
            
        }
        return (
            <form className="form-cadastro-colaborador">
                <p>
                    Nome:
                    <input type="text" value={this.state.form.nome} onChange={(event)=>this.handleChange(event, 'nome')} />
                </p>
                <p>
                    Email:
                    <input type="text" value={this.state.form.email} onChange={(event)=>this.handleChange(event, 'email')} />
                </p>
                <p>
                    Contato:
                    <input type="text" value={this.state.form.contato} onChange={(event)=>this.handleChange(event, 'contato')} />
                </p>
                <p>
                    CPF:
                    <input type="text" value={this.state.form.cpf} onChange={(event)=>this.handleChange(event, 'cpf')} />
                </p>
                <p>
                    Data nascimento:
                    <input type="text" value={this.state.form.datanascimento} onChange={(event)=>this.handleChange(event, 'datanascimento')} />
                </p>
                <p>
                    Codigo setor:
                    <input type="text" value={this.state.form.cod_setor} onChange={(event)=>this.handleChange(event, 'cod_setor')} />
                </p>
                <p>
                    Descricao setor:
                    <input type="text" value={this.state.form.desc_setor} onChange={(event)=>this.handleChange(event, 'desc_setor')} />
                </p>
            <button onClick={cadastrar}>Cadastrar</button>
            </form>
        )
    }
}

export default FormCadastro