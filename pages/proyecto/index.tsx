import React from 'react';
import { Project } from '../../components/project'
import Layout from '../../layout'
import withAuth from '../../utils/withAuth'

const ProjectsPage = () => {
    return (
        <Layout userName={''}>
            <Project title=''/>
        </Layout>
    )
};



export default withAuth(ProjectsPage);