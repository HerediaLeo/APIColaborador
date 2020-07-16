import React, { useState } from 'react'
import api from '../../../services/api'
import { useEffect } from 'react'
import './consulta-styles.css'

function ConsultaColaborador() {

    const [listaColaboradores, setListaColaboradores] = useState([])

    const buscarListaColaboradores = async () => {
        return await api.get('/colaborador/findAllColab')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
    }

    const deletarColaborador = async (id) => {
        return await api.get(`/colaborador/removerColaborador/${id}`)
        .then(response => {
            setListaColaboradores(listaColaboradores.filter(elemento => elemento.id !== id))
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
    }


    useEffect(() => {
        buscarListaColaboradores()
          .then(e => setListaColaboradores(e))
      }, [])
      
    return (
        <div className="page, page-colaborador">
            {listaColaboradores.map((colaborador, index) => 
                <div className="lista-colaborador-container" key={index}>
                    <div className="atributos">
                        <p>Nome: </p>
                        <p>Email: </p>
                        <p>Contato: </p>
                        <p>CPF: </p>
                        <p>Nascimento: </p>
                        <p>Cod Setor: </p>
                        <p>Descrição Setor: </p>
                    </div>
                    <div className="dados">
                        <p>{colaborador.nome}</p>
                        <p>{colaborador.email}</p>
                        <p>{colaborador.contato}</p>
                        <p>{colaborador.cpf}</p>
                        <p>{colaborador.datanascimento}</p>
                        <p>{colaborador.cod_setor}</p>
                        <p>{colaborador.desc_setor}</p>
                    </div>
                    <button className="botao-deletar" onClick={()=>deletarColaborador(colaborador.id)}>Deletar</button>
                </div>
                
            )}
        </div>
    )
}

export default ConsultaColaborador
