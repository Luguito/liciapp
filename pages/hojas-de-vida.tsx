import React from 'react';
import withAuth from '../utils/withAuth'
import Layout from '../layout'
const HojasDeVidaPage = () => {
    return (
        <Layout userName={''}>
            <h1>Pagina de hojas de vida</h1>
        </Layout>
    )
};



export default withAuth(HojasDeVidaPage);