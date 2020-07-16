import React from 'react'
import ImagemErro from './assets/erro-404.png'

function Erro() {
  return (
      <div className="page">
        <img src={ImagemErro} alt="Erro" className="img-erro"/>
        Algo deu errado, por favor tente novamente ou utilize uma url válida!
      </div>
  )
}

export default Erro
