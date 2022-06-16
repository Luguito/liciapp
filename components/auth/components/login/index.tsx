import React, { useState } from 'react';
import CardForm from './cardForm';
import { loginAdapter } from "./adapters/login.adapter";
import { navigateTo, setToken } from "../../../../utils/helpers";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { APP_ACTIONS } from '../../../../store/actions/app.actions'
import { useDispatch } from 'react-redux';

import { 
    LoginContainer, 
    BackgroundComplement, 
} from './login.styled'

interface LoginProps {
    backgroundImage?: string
}

const Login = (props: LoginProps) => {
    const dispatch = useDispatch();
    const [ alertVisible, setAlertVisible ] = useState(false);
    const MySwal = withReactContent(Swal)
    const onSubmit = async (payload) => {
        const response = await loginAdapter(payload);

        const accessToken = response?.body["id-token"];

        if (accessToken) {
            dispatch({type: APP_ACTIONS.SET_USER , user: response?.body['license-token']})
            setToken('token', accessToken);
            setToken('user', JSON.stringify(response?.body['license-token']))
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