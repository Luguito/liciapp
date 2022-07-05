import React from 'react';
import withAuth from '@utils/withAuth'
import Layout from '../../../layout';
import { CreateCV } from '../../../components/hojas-de-vida/create/create';

const UpdateCV = () => {
    return (
        <Layout userName={''}>
            <CreateCV isUpdated={true}></CreateCV>
        </Layout>
    )
};



export default withAuth(UpdateCV);