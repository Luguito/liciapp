import React from 'react';
import Login from "../components/auth/components/login";
import EmptyLayout from "../layout/empty-layout"


const LoginPage = () => {
    return (
        <EmptyLayout userName={''}>
            <Login /> 
        </EmptyLayout>
    )
};

export default LoginPage;