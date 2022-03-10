import React from 'react';
import withAuth from '../utils/withAuth'
import Layout from '../layout'
const UsuarioPage = () => {
    return (
        <Layout userName={''}>
            <h1>Pagina de usuario</h1>
        </Layout>
    )
};



export default withAuth(UsuarioPage);