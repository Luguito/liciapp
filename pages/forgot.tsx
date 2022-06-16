import React from 'react';
import EmptyLayout from "../layout/empty-layout"
import Forgot from '../components/auth/components/forgot/forgot';

const ForgotPage = () => {
    return (
        <EmptyLayout userName={''}>
            <Forgot /> 
        </EmptyLayout>
    )
};

export default ForgotPage;