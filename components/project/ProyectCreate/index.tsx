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
import Swal from 'sweetalert2';
// import { Viewer } from '@react-pdf-viewer/core';

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
import { navigateTo, base64toBlobPDF } from 'utils/helpers';
import { AddDocuments } from '@global-styled';
import { AttachFile } from '@material-ui/icons';

// Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
interface proyectType {
    name: string,
    details: string,
    'project-start': number | string | Date,
    'project-end': number | string | Date,
    'documents': object,
    "technical-document": object,
}

export const CreateProyect: FC<any> = ({ title }) => {
    const [guest, setGuest] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [docView, setDocView] = useState<string>('');
    const [isVisibleDoc, setIsVisibleDoc] = useState<boolean>(false);
    const [project, setProject] = useState<proyectType>({
        name: '',
        details: "",
        'project-start': Date.now() || "",
        'project-end': Date.now() || "",
        'documents': [],
        "technical-document": [],
    });

    const { register, handleSubmit, errors, setValue, control } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        // (async function () {
        //     let guest = await listGuestAdapter();
        //     setGuest(guest.body);
        // })()
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
        const documentTypeAvailables=['pdf']
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', async (e) => {
            const file = e.target['files'][0].name
            const fileType = file.split('.').pop();
            if(documentTypeAvailables.includes(fileType)){
                const fileName = file;
                let base: any = await convertFileToBase64(e.target['files'][0]);
                let document = {
                    name: fileName,
                    "binary-file": base.split('base64,')[1]
                }
                setDocument([...documents, document])
                project[name] = [...documents, document];
            }else{
                Swal.fire("Documento invalido", "Solo se permitren documentos pdf", "warning");
            }
        });
    }

    const removeDoc = (index: number) => {
        const docs = documents.filter((doc: any, i: number) => index !== i);
        setDocument(docs);
    }

    const saveValues = (value, name) => {
        console.log(value)
        setProject({
            ...project,
            [name]: value
        })
    }

    const formatDates = () => {

        // @ts-ignore
        let start = new Intl.DateTimeFormat('es-CO', { year: 'numeric', month: '2-digit', day: '2-digit', }).format(project['project-start']).split('/');
        // @ts-ignore
        let end = new Intl.DateTimeFormat('es-CO', { year: 'numeric', month: '2-digit', day: '2-digit', }).format(project['project-end']).split('/');

        start.splice(0, 0, start.splice(2, 1)[0]);
        start.splice(1, 0, start.splice(2, 1)[0]);

        end.splice(0, 0, end.splice(2, 1)[0]);
        end.splice(1, 0, end.splice(2, 1)[0]);

        project['project-start'] = start.join('-')
        project['project-end'] = end.join('-');
    }

    const submitForm = async () => {
        // project['organizations'] = [getUniqueId()];

        // organizations.map(org => {
        //     !project['organizations'].includes(org['organization-id'].id) && project['organizations'].push(org['organization-id'].id);
        // })

        formatDates();
        console.log(project)
    
        let res = await createAdapter(project);
        console.log(res)
        navigateTo('/proyecto')
    }

    const getTecnicalSheet = (value) => {
        console.log(value)
        project['technical-document'] = [
            {
                "details-documentation": value
            }
        ]
    }

    const getUniqueId = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }


    const convertFileToBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })


    const onSubmit = data => console.log(data);


    const viewPdfDoc = (index: number) => {
        const doc = documents.find((doc: any, i: number) => i === index);
        const docUrl = window.URL.createObjectURL(base64toBlobPDF(doc));
        setIsVisibleDoc(true);
        setDocView(docUrl);
    }

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
                        <AddDocuments onClick={() => triggerInputFile('documents')} style={{ marginTop: 20 }} endIcon={<AttachFile></AttachFile>}>Documentos</AddDocuments>
                        {documents.map((item, index) => {
                            return (
                                <ListDocuments key={index}>
                                    <ElementList>
                                        <DocumentName>
                                            <PlagiarismIcon></PlagiarismIcon>
                                            {item.name}
                                        </DocumentName>
                                        <IconsList>
                                            <DeleteIcon onClick={() => removeDoc(index)}/>
                                            {/* <RemoveRedEyeIcon  onClick={() => viewPdfDoc(index)}/> */}
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
                        <TestContainer fn={getTecnicalSheet}></TestContainer>
                    </ContainerItems>
                    <NextButton onClick={() => submitForm()}>Guardar proyecto</NextButton>
                </TabPanel>
            </TabContext>
            { isVisibleDoc 
                // <div>
                //     <Viewer fileUrl={docView} />;
                // </div>
            }
        </ContainerComponent>
    );
};

export default CreateProyect;
