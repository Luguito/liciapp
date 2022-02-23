import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Autocomplete, TextareaAutosize, TextField } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
/** STYLED COMPONENTS */
import { HeaderContainer, Title, DeleteButton, DatePickerContainer, ContainerInputs, ListDocuments, IconsList, ElementList, DocumentName, SubTitle, HeaderItems, NewActionButton, Item } from './edit.styled';

/** ICONS  */
import DeleteIcon from '@mui/icons-material/Delete';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import OpenWithIcon from '@mui/icons-material/OpenWith';

/** COMPONENT */
export const EditProyect = () => {
    const [value, setValue] = useState([])
    const router = useRouter();
    const { id } = router.query;

    const dummyOptions = ['Fuego', 'Peter', 'Parker', 'Francisco'];

    const handleChange = (newValue) => {
        console.log(newValue)
    }

    const triggerInputFile = () => {
        let input = document.createElement('input');

        input.type = 'file';

        input.click();
    }
    return (
        <>
            <HeaderContainer>
                <Title>
                    Editar Proyecto
                </Title>
                <DeleteButton startIcon={<DeleteIcon />}>
                    Eliminar Proyecto
                </DeleteButton>
            </HeaderContainer>
            <TextField fullWidth size="small"></TextField>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
                minRows={9}
            />
            <DatePickerContainer>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Fecha de Inicio"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} style={{ width: '50%' }} />}
                    ></DesktopDatePicker>
                    <DesktopDatePicker
                        label="Fecha de cierre"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} style={{ width: '50%' }} />}
                    ></DesktopDatePicker>
                </LocalizationProvider>
            </DatePickerContainer>
            <ContainerInputs>
                <TextField onClick={triggerInputFile} style={{ marginTop: 20, width: '50%' }}></TextField>
                <Autocomplete
                    multiple
                    id="size-small-outlined-multi"
                    style={{ width: '50%', marginTop: 20 }}
                    options={dummyOptions}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Invitados" />
                    )}
                />
            </ContainerInputs>
            <TextField fullWidth placeholder='Documentos' onClick={triggerInputFile} style={{ marginTop: 20 }}></TextField>
            {dummyOptions.map((item, index) => {
                return (
                    <ListDocuments>
                        <ElementList>
                            <DocumentName>
                                <PlagiarismIcon></PlagiarismIcon>
                                Document
                            </DocumentName>
                            <IconsList>
                                <DeleteIcon />
                                <EditIcon />
                                <RemoveRedEyeIcon />
                            </IconsList>
                        </ElementList>
                    </ListDocuments>
                )
            })}
            <SubTitle>
                Propuesta economica
            </SubTitle>
            <HeaderItems>
                <p>Descriptor</p>
                <p>Unidad</p>
                <p>Cantidad</p>
                <p>Valor unitario</p>
                <p>Valor total</p>
            </HeaderItems>
            <TreeView sx={{ height: 264, flexGrow: 1, overflowY: 'auto', marginLeft: 1 }} >
                <TreeItem nodeId="1" label={
                    <Item>
                        <p>Premilinares</p>
                        <p>m2</p>
                        <p>200</p>
                        <p>10</p>
                        <p>2000</p>
                    </Item>
                } collapseIcon={<OpenWithIcon />} expandIcon={<OpenWithIcon />}>
                    <TreeItem nodeId="2" label="Item 1" />
                </TreeItem>
                <TreeItem nodeId="2" label={
                    <Item>
                        <p>Movimiento de tierra</p>
                        <p>m2</p>
                        <p>200</p>
                        <p>10</p>
                        <p>2000</p>
                    </Item>
                } collapseIcon={<OpenWithIcon />} expandIcon={<OpenWithIcon />}>
                    <TreeItem nodeId="3" label="Hello" />
                </TreeItem>
            </TreeView>
            <NewActionButton startIcon={<AddIcon />}>Nueva Linea</NewActionButton>
            <NewActionButton startIcon={<AddIcon />}>Nuevo Item</NewActionButton>
        </>
    );
}

export default EditProyect;
