import React from 'react';
import withAuth from '../utils/withAuth'

const UsuarioPage = () => {
    return (
        <h1>Pagina de usuario</h1>
    )
};



export default withAuth(UsuarioPage);