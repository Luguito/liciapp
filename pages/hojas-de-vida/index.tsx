import React from 'react';
import withAuth from '../../utils/withAuth'
import Layout from '../../layout';
import { CVPage } from '../../components/hojas-de-vida/hojas-de-vida'
const HojasDeVidaPage = () => {
    return (
        <Layout userName={''}>
            <CVPage></CVPage>
        </Layout>
    )
};



export default withAuth(HojasDeVidaPage);