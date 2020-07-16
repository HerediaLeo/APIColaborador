import React from 'react'
import { Link } from "react-router-dom"

import './header-style.css'
import Logo from './assets/logo.png'

const Header = () => {
    return (
        <div className="header-container">
                <Link to="/" className="logo-texto">
                    <img src={Logo} alt="nada" className="header-logo"/>
                    <span className="nome-icone-header">Heredia</span>
                </Link>
            <div className="itens-menu">
                <Link to="/">Home</Link>
                <Link to="/colaborador-cadastro">Cadastro</Link>
                <Link to="/colaborador-consulta">Consulta</Link>
            </div>
            <div className="icon-header">
                {/* <EcoIcon style={{ color: green[500], fontSize: 40 }} /> */}
            </div>
        </div>
    )
}

export default Header