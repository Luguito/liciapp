import React from 'react';
import withAuth from '../utils/withAuth'
import Layout from '../layout';
import { CompanyProfile } from '../components/profile/company'
const EmpresaPage = () => {
    return (
        <Layout userName={''}>
            <CompanyProfile></CompanyProfile>
        </Layout>
    )
};



export default withAuth(EmpresaPage);