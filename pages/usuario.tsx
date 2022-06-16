import React from 'react';
import withAuth from '../utils/withAuth'
import Layout from '../layout'
import { UserComponent } from 'components/user';
const UsuarioPage = () => {
    return (
        <Layout userName={''}>
            <UserComponent></UserComponent>
        </Layout>
    )
};



export default withAuth(UsuarioPage);