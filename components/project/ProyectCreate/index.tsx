import { ContainerComponent, TitleCreate, SubTitleCreate, ContainerButton, DatePickerContainer, HeaderCreate, NextButton, TitleContainer, CustomInput, TextArea, InputDate, DocumentInput, DobleContainer, ContainerInputs, ListDocuments, ElementList, DocumentName, IconsList, HeaderItems } from './create.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Autocomplete, Box, Button, Tab, Tabs, TextareaAutosize, TextField } from '@mui/material'
import { schema } from './create.schema';
import { FC, useEffect, useState } from 'react';
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

import { createAdapter } from '../adapters/create.adapter';
import { listGuestAdapter } from '../adapters/list.adapter';
import { navigateTo } from 'utils/helpers';

export const CreateProyect: FC<any> = ({ title }) => {
    const [guest, setGuest] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [project, setProject] = useState({
        name: '',
        details: "",
        'project-start': Date.now() || "",
        'project-end': Date.now() || "",
        'project-documents': [],
        "technical-sheet": [],
        organizations: [],
    });

    const { register, handleSubmit, errors, setValue, control } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        (async function () {
            let guest = await listGuestAdapter();
            setGuest(guest.body);
        })()
        register({ name: 'name' });
        register({ name: 'details' });
        register({ name: 'project-start' });
        register({ name: 'project-end' });
        register({ name: 'legal-documents' });
        register({ name: 'document-proposals' });

    }, [])



    const [documents, setDocument] = useState([]);
    const [tab, setTab] = useState('1')

    const triggerInputFile = (name: string) => {
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', (e) => {
            setDocument([...documents, ...e.target['files']])
            project[name] = [...e.target['files']];
        });
    }

    const saveValues = (value, name) => {
        setProject({
            ...project,
            [name]: value
        })
    }

    const formatDates = () => {
        let start = new Intl.DateTimeFormat('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(project['project-start']).split('/');

        let end = new Intl.DateTimeFormat('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(project['project-end']).split('/');

        start.splice(0, 0, start.splice(2, 1)[0]);
        end.splice(0, 0, end.splice(2, 1)[0]);

        project['project-start'] = start.join('-')
        project['project-end'] = end.join('-');
    }

    const submitForm = async () => {
        organizations.map(org => {
            !project['organizations'].includes(org['organization-id'].id) && project['organizations'].push(org['organization-id'].id);
        })

        formatDates(); 
        console.log(project)
        let res = await createAdapter(project);
        console.log(res)
        // navigateTo('/proyecto')
    }

    const getTecnicalSheet = (value) => {
        project['technical-sheet'] = value
    }

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
                            <Autocomplete
                                multiple
                                id="size-small-outlined-multi"
                                style={{ width: '50%', marginTop: 20 }}
                                options={guest}
                                getOptionLabel={(option) => option['full'].name}
                                onChange={(event, value) => setOrganizations(value)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Invitados" />
                                )}
                            />
                        </ContainerInputs>
                        <TextField fullWidth placeholder='Documentos' onClick={() => triggerInputFile('project-documents')} style={{ marginTop: 20 }}></TextField>
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
                    <HeaderItems>
                        <p>Descriptor</p>
                        <p>Unidad</p>
                        <p>Cantidad</p>
                        <p>Valor unitario</p>
                        <p>Valor total</p>
                    </HeaderItems>
                    <ContainerItems>
                        <TestContainer fn={getTecnicalSheet}></TestContainer>
                    </ContainerItems>
                    <NextButton onClick={() => submitForm()}>Guardar proyecto</NextButton>
                </TabPanel>
            </TabContext>
        </ContainerComponent>
    );
};

export default CreateProyect;
