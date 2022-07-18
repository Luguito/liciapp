import React from 'react';
import { DetailsProyect } from '../../../components/projects/ProyectDetails/index'
import Layout from '../../../layout'
import withAuth from '../../../utils/withAuth'

const DetailsPage = () => {
    return (
        <Layout userName={''}>
            <DetailsProyect />
        </Layout>
    )
};

export default withAuth(DetailsPage);