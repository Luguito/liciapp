import { ContainerComponent, TitleCreate, SubTitleCreate, ContainerButton, DatePickerContainer, HeaderCreate, NextButton, TitleContainer, CustomInput, TextArea, InputDate, DocumentInput, DobleContainer, ContainerInputs, ListDocuments, ElementList, DocumentName, IconsList } from './create.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Autocomplete, Box, Button, Tab, Tabs, TextareaAutosize, TextField } from '@mui/material'
import { schema } from './create.schema';
import { FC, useState } from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TestContainer } from '../../common/utils/items';
import { ContainerItems } from '../ProyectEdit/edit.styled'
/** ICONS */
import DeleteIcon from '@mui/icons-material/Delete';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import { createAdapter } from '../adapters/create.adapter'

export const CreateProyect: FC<any> = ({ title }) => {
    const [project, setProject] = useState({
        name: '',
        details: "",
        'project-start': "",
        'project-end': "",
        'legal-documents': [],
        'document-proposals': []
    });
    const [documents, setDocument] = useState([]);
    const [tab, setTab] = useState('1')


    const dummyOptions = ['Fuego', 'Peter', 'Parker', 'Francisco'];

    const handleChange = (newValue) => {
        console.log(newValue)
    }

    const triggerInputFile = (name: string) => {
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', (e) => {
            name === 'document-proposals' && setDocument([...documents, ...e.target['files']])
            project[name] = [...e.target['files']];
        });
    }

    const saveValues = (value, name) => {
        project[name] = value;
        console.log(project)
    }

    const submitForm = async () => {
        console.log(project)
        let organizationId = JSON.parse(localStorage.getItem('user'))['organization-id'];
        let res = await createAdapter(`/evaluator/api/v1/project/${organizationId}/create`, project);
        console.log(res)
    }
    // const { register, handleSubmit, errors, setValue, control } = useForm({
    //     // resolver: yupResolver(schema)
    // })

    const onSubmit = data => console.log(data);

    return (
        <ContainerComponent>
            <HeaderCreate>
                <TitleContainer>
                    <TitleCreate>
                        Nuevo Proyecto
                    </TitleCreate>
                    /
                    <SubTitleCreate>
                        Información general
                    </SubTitleCreate>
                </TitleContainer>
                <div>
                    <span onClick={() => setTab('1')}>{tab !== '1' ? '2' : '1'}</span>
                    /
                    <span onClick={() => setTab('2')}>2</span>
                </div>
            </HeaderCreate>
            <TabContext value={tab}>
                <TabPanel value="1">
                    <form>
                        <TextField fullWidth placeholder='Nombre del proyecto' size="small" onChange={({ target }) => saveValues(target.value, 'name')}></TextField>

                        <TextArea
                            aria-label="empty textarea"
                            placeholder="Descripción"
                            style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
                            minRows={9}
                            onChange={({ target }) => saveValues(target.value, 'details')}
                        />
                        <DatePickerContainer>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Fecha de Inicio"
                                    inputFormat="MM/dd/yyyy"
                                    value={project['project-start']}
                                    onChange={(value) => saveValues(value, 'project-start')}
                                    renderInput={(params) => <TextField {...params} style={{ width: '50%' }} />}
                                ></DesktopDatePicker>
                                <DesktopDatePicker
                                    label="Fecha de cierre"
                                    inputFormat="MM/dd/yyyy"
                                    value={project['project-end']}
                                    onChange={(value) => saveValues(value, 'project-end')}
                                    renderInput={(params) => <TextField {...params} style={{ width: '50%' }} />}
                                ></DesktopDatePicker>
                            </LocalizationProvider>
                        </DatePickerContainer>
                        <ContainerInputs>
                            <TextField onClick={() => triggerInputFile('legal-documents')} style={{ marginTop: 20, width: '50%' }} placeholder="Ficha técnica"></TextField>
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
                        <TextField fullWidth placeholder='Documentos' onClick={() => triggerInputFile('document-proposals')} style={{ marginTop: 20 }}></TextField>
                        {documents.map((item, index) => {
                            return (
                                <ListDocuments key={index}>
                                    <ElementList>
                                        <DocumentName>
                                            <PlagiarismIcon></PlagiarismIcon>
                                            {item.name}
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
                        <ContainerButton>
                            <NextButton onClick={() => setTab('2')}>Siguiente</NextButton>
                        </ContainerButton>
                    </form>
                </TabPanel>
                <TabPanel value="2">
                    <ContainerItems>
                        <TestContainer></TestContainer>
                    </ContainerItems>
                    <NextButton onClick={() => submitForm()}>Guardar proyecto</NextButton>
                </TabPanel>
            </TabContext>
        </ContainerComponent>
    );
};

export default CreateProyect;
