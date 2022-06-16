import React, { useState } from 'react';
import { Card, Title, Button, ContainerButton, ContainerField, Logo, LogoContainer, Caption } from '../login/login.styled';
import { LoginContainer, BackgroundComplement } from '../login/login.styled'
import { CardContent, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { loginAdapter } from './adapters/forgot.adapter';

const Forgot = () => {
    const [form, setForm] = useState({});
    const [changeType, setChangeType] = useState(false);

    const setFields = (field: string, e) => setForm({ ...form, [field]: e.target.value });

    const handleSubmit = async () => await loginAdapter(form);
    return (
        <LoginContainer>
            <BackgroundComplement src="/assets/background-complement.svg" />
            <Card >
                <LogoContainer>
                    {<Logo src="/assets/logo.svg"></Logo>}
                    <Caption>Decisiones acertadas</Caption>
                </LogoContainer>
                <CardContent>
                    <Title>Reestablecer contraseña</Title>
                </CardContent>
                <form noValidate autoComplete="off">
                    <ContainerField>
                        <FormControl fullWidth variant="outlined" margin='dense'>
                            <InputLabel htmlFor="usuario">Email</InputLabel>
                            <OutlinedInput id="usuario" labelWidth={70} onChange={(e) => setFields('email', e)} />
                        </FormControl>
                    </ContainerField>
                    <ContainerField>
                        <FormControl variant="outlined" margin='dense'>
                            <InputLabel htmlFor="outlined-adornment-password">Nueva Contraseña</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={changeType ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setChangeType(!changeType)}
                                            edge="end"
                                        >
                                            {changeType ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                                onChange={(e) => setFields('new-password', e)}
                            />
                        </FormControl>
                    </ContainerField>
                    <ContainerField>
                        <FormControl fullWidth variant="outlined" margin='dense'>
                            <InputLabel htmlFor="contrasena">Contraseña</InputLabel>
                            <OutlinedInput id="contrasena" labelWidth={70} onChange={(e) => setFields('password', e)} />
                        </FormControl>
                    </ContainerField>
                    <ContainerButton >
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            size="medium"
                            color="primary">
                            Reestablecer
                        </Button>
                    </ContainerButton>
                </form>
            </Card>

        </LoginContainer>

    )
}

export default Forgot;