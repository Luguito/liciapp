import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { 
    Card,
    Title,
    SubTitle,
    Button,
    ContainerButton,
    ContainerField,
    Logo,
    LogoContainer,
    Caption
} from '../login.styled'
import { 
    CardContent, 
    FormControl, 
    OutlinedInput, 
    InputLabel, 
    InputAdornment, 
    IconButton
} from '@material-ui/core';
import {  APP_ACTIONS } from "../../../../../store/actions/app.actions";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { LoginProps } from "./cardForm.types";
import { navigateTo } from "@utils/helpers";

const CardForm: React.FC<LoginProps> = ({ submitForm }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: '',
        isPasswordVisible: false,
    }); 


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, isPasswordVisible: !values.isPasswordVisible });
    };

    const handleSubmit = () => {
        const { email, password } = values
        /*dispatch({
            type: APP_ACTIONS.LOGIN_REQUEST, 
            payload: { email, password }
          });*/
        submitForm({ email, password })
    }

    return(
        <Card >
            <LogoContainer>
                {<Logo src="/assets/logo.svg"></Logo>}
                <Caption>Decisiones acertadas</Caption>
            </LogoContainer>
            <CardContent>
                <Title>Iniciar sesíon</Title>
                <SubTitle>Esta a un click de poder participar en los procesos disponibles</SubTitle>
            </CardContent>
            <form noValidate autoComplete="off">
                <ContainerField>
                    <FormControl fullWidth variant="outlined" margin='dense'>
                        <InputLabel htmlFor="usuario">Usuario</InputLabel>
                        <OutlinedInput
                            id="usuario"
                            value={values.email}
                            onChange={handleChange('email')}
                            labelWidth={70}
                        />
                    </FormControl>
                </ContainerField>
                <ContainerField>
                    <FormControl variant="outlined" margin='dense'>
                        <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.isPasswordVisible ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {values.isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </ContainerField>
                <SubTitle onClick={() => navigateTo('/forgot')}>Olvidaste la contraseña?</SubTitle>
                <ContainerButton >
                    <Button 
                        variant="contained" 
                        size="medium" 
                        color="primary"
                        onClick={handleSubmit}
                    >
                        INICIAR SESIÓN
                    </Button>
                </ContainerButton>
            </form>
        </Card>    
    )
}

export default CardForm;