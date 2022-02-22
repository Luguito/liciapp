import React, { useState } from 'react';
import CardForm from './cardForm';
import { loginAdapter } from "./adapters/login.adapter";
import { navigateTo, setToken } from "../../../../utils/helpers";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { 
    LoginContainer, 
    BackgroundComplement, 
} from './login.styled'

interface LoginProps {
    backgroundImage?: string
}

const Login = (props: LoginProps) => {
    const [ alertVisible, setAlertVisible ] = useState(false);
    const MySwal = withReactContent(Swal)
    const onSubmit = async (payload) => {
        const response = await loginAdapter('/evaluator/api/login', payload);
        const accessToken = response?.body?.accessToken;
        if (accessToken) {
            setToken(accessToken);
            navigateTo('/');
        } else {
            await MySwal.fire({
                title: 'Upps!',
                text: 'Usuario o contraseña invalidos',
                icon: 'warning',
                iconColor:'#3f51b5',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3f51b5'
              })
            setAlertVisible(true);
        }

    }

    return(
        <LoginContainer>
            <BackgroundComplement src="/assets/background-complement.svg" />
            <CardForm submitForm={onSubmit}/>
            
        </LoginContainer>

    )
}

export default Login;