import React from 'react';
import withAuth from '../utils/withAuth'
import Layout from '../layout'
const EmpresaPage = () => {
    return (
        <Layout userName={''}>
            <h1>Pagina de empresa</h1>
        </Layout>
    )
};



export default withAuth(EmpresaPage);