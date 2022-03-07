import React from 'react';
import { CreateProyect } from '../../components/project/ProyectCreate'
import Layout from '../../layout'
import withAuth from '../../utils/withAuth'

const NewProjectsPage = () => {
    return (
        <Layout userName={''}>
            <CreateProyect></CreateProyect>
        </Layout>
    )
};



export default withAuth(NewProjectsPage);