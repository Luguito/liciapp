import React from 'react';
import { EditProyect } from '../../../components/project/ProyectEdit/index'
import Layout from '../../../layout'
import withAuth from '../../../utils/withAuth'

const EditPage = () => {
    return (
        <Layout userName={''}>
            <EditProyect />
        </Layout>
    )
};



export default withAuth(EditPage);