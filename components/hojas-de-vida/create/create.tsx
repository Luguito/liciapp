import { TitleCreate, ContainerFlex, PurpleButton, SubTitle } from '@global-styled'
import { TextField } from '@mui/material'
import { useState } from 'react'

export function CreateCV() {
    const [proyects, setProyects] = useState([{
        name: '',
        date_start: '',
        date_end: '',
        job: ''
    }]);

    function addProject() {
        proyects.push({
            name: '',
            date_start: '',
            date_end: '',
            job: ''
        });

        setProyects(proyects);
        console.log(proyects)
    }

    return (
        <>
            <TitleCreate>
                Nueva hoja de vida
            </TitleCreate>
            <ContainerFlex>
                <TextField fullWidth placeholder="Primer Nombre" size="small"></TextField>
                <TextField fullWidth placeholder="Segundo Nombre" size="small"></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Primer Apellido" size="small"></TextField>
                <TextField fullWidth placeholder="Segundo Apellido" size="small"></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Tipo de Identificacion" size="small"></TextField>
                <TextField fullWidth placeholder="Numero de Identificacion" size="small"></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Ciudad" size="small"></TextField>
                <ContainerFlex style={{ marginTop: '0' }}>
                    <TextField fullWidth placeholder="Fecha de nacimiento" size="small"></TextField>
                    <TextField fullWidth placeholder="Experiencia" size="small"></TextField>
                </ContainerFlex>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Nivel de escolaridad" size="small"></TextField>
                <TextField fullWidth placeholder="Profesion" size="small"></TextField>
            </ContainerFlex>
            <SubTitle style={{ borderTop: '1px solid black', paddingTop: '1em' }}>
                Últimos proyectos en los que ha participado
                <PurpleButton onClick={addProject} style={{ marginLeft: '2em' }}>Add</PurpleButton>
            </SubTitle>
            {proyects.map(proyect => {
                return (
                    <ContainerFlex>
                        <TextField fullWidth placeholder="Nombre de la Empresa" size="small"></TextField>
                        <TextField fullWidth placeholder="Fecha de inicio" size="small"></TextField>
                        <TextField fullWidth placeholder="Fecha de Finalizacion" size="small"></TextField>
                        <TextField fullWidth placeholder="Cargo" size="small"></TextField>
                    </ContainerFlex>
                )
            })}
            <TextField fullWidth placeholder="Hoja de vida (PDF)" size="small" style={{ marginTop: '2em' }}></TextField>
            <PurpleButton>Siguiente</PurpleButton>
        </>
    )
}