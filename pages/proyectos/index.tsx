import React from 'react';
import { Projects } from '../../components/projects'
import Layout from '../../layout'
import withAuth from '../../utils/withAuth'

const MyProyectsPage = () => {
    return (
        <Layout userName={''}>
            <Projects title=''/>
        </Layout>
    )
};



export default withAuth(MyProyectsPage);