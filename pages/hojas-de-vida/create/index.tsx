import React from 'react';
import withAuth from '@utils/withAuth'
import Layout from '../../../layout';
import { CreateCV } from '../../../components/hojas-de-vida/create/create';

const CreateHojasDeVida = () => {
    return (
        <Layout userName={''}>
            <CreateCV></CreateCV>
        </Layout>
    )
};



export default withAuth(CreateHojasDeVida);