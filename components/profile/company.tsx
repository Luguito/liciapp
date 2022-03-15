import { TitleCreate, ContainerFlex, TextArea, ListDocuments, TitleDocuments, PurpleButton, ElementList, DocumentName } from '@global-styled';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// import { } from './company.styled';


export function CompanyProfile() {


    return (
        <>
            <TitleCreate>
                Empresa
            </TitleCreate>
            <ContainerFlex>
                <TextField fullWidth placeholder="Nombre de la Empresa" size="small"></TextField>
                <TextField fullWidth placeholder="NIT" size="small"></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Representante Legal" size="small"></TextField>
                <TextField fullWidth placeholder="Ciudad" size="small"></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Pais" size="small"></TextField>
                <TextField fullWidth placeholder="Dirección" size="small"></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField fullWidth placeholder="Categoria" size="small"></TextField>
                <TextField fullWidth placeholder="Especialidad" size="small"></TextField>
            </ContainerFlex>
            <TextArea placeholder="Descripción"></TextArea>
            <TitleDocuments>
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
            </ListDocuments>
            <PurpleButton style={{ marginTop: '2em' }}>Guardar</PurpleButton>
        </>
    )
}