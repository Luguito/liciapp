import { useState, useEffect } from 'react';
import { TitleCreate, ContainerFlex, TextArea, PurpleButton } from '@global-styled';
import { TextField } from '@mui/material';
import { schema } from './creat.schema';
import { getKey } from '@utils/helpers';
import { updateAdapter, getCompanyInfo } from './adapters/update.adapter';

export function CompanyProfile() {
    const [profile, setProfile] = useState<any>({});
    const orgID = JSON.parse(getKey('user'))["organization-id"]


    useEffect(() => {
        getCompanyInfo(orgID).then(({ body }) => setProfile(body))
    }, []);

    const setValues = (label: string, value: string) => setProfile({ ...profile, [label]: value });

    const handleSubmit = () => {
        schema.isValid(profile).then(async v => await updateAdapter(orgID, profile));
        // navigateTo('/hojas-de-vida')
    };

    return (
        <>
            <TitleCreate>
                Empresa
            </TitleCreate>
            <ContainerFlex>
                <TextField value={profile.name} fullWidth placeholder="Nombre de la Empresa" size="small" onChange={(e) => setValues('name', e.target.value)}></TextField>
                <TextField value={profile['legal-id']} fullWidth placeholder="NIT" size="small" onChange={(e) => setValues('legal-id', e.target.value)}></TextField>
                <TextField value={profile['email']} fullWidth placeholder="Email" size="small" onChange={(e) => setValues('email', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={profile['legal-rep']} fullWidth placeholder="Representante Legal" size="small" onChange={(e) => setValues('legal-rep', e.target.value)}></TextField>
                <TextField value={profile['city']} fullWidth placeholder="Ciudad" size="small" onChange={(e) => setValues('city', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={profile['country']} fullWidth placeholder="Pais" size="small" onChange={(e) => setValues('country', e.target.value)}></TextField>
                <TextField value={profile['address']} fullWidth placeholder="Dirección" size="small" onChange={(e) => setValues('address', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={profile['category']} fullWidth placeholder="Categoria" size="small" onChange={(e) => setValues('category', e.target.value)}></TextField>
                <TextField value={profile['specialty']} fullWidth placeholder="Especialidad" size="small" onChange={(e) => setValues('specialty', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={profile['cellphone']} fullWidth placeholder="Celular" size="small" onChange={(e) => setValues('cellphone', e.target.value)}></TextField>
                <TextField value={profile['phone']} fullWidth placeholder="Telefono" size="small" onChange={(e) => setValues('phone', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={profile['url']} fullWidth placeholder="Url" size="small" onChange={(e) => setValues('url', e.target.value)}></TextField>
                <TextField value={profile['license']} fullWidth placeholder="Tipo" size="small" onChange={(e) => setValues('license', e.target.value)}></TextField>
            </ContainerFlex>
            <TextArea value={profile['details']} placeholder="Descripción" onChange={(e) => setValues('details', e.target.value)}></TextArea>
            {/* <TitleDocuments>
                Documentacion
                <PurpleButton>Agregar Documento</PurpleButton>
            </TitleDocuments>
            <ListDocuments>
                <ElementList>
                    <DocumentName>Camara de Comercio</DocumentName>
                </ElementList>
                <ElementList>
                    <DocumentName>RUT</DocumentName>
                </ElementList>
                <ElementList>
                    <DocumentName>Estatutos</DocumentName>
                </ElementList>
                <ElementList>
                    <DocumentName>Documento</DocumentName>
                </ElementList>
            </ListDocuments> */}
            <PurpleButton style={{ marginTop: '2em' }} onClick={() => handleSubmit()}>Guardar</PurpleButton>
        </>
    )
}