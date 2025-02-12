import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Lista de Afazeres</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/sobre">Sobre</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle ={
    color: '#fff',
}

export default Header;
