import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Autocomplete, TextareaAutosize, TextField } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Swal from 'sweetalert2';
/** STYLED COMPONENTS */
import { HeaderContainer, NextButton, Title, DeleteButton, ContainerItems, DatePickerContainer, ContainerInputs, ListDocuments, 
    IconsList, ElementList, DocumentName, SubTitle, HeaderItems, NewActionButton, Wrapper } from './edit.styled';

/** ICONS  */
import DeleteIcon from '@mui/icons-material/Delete';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { TestContainer } from '../../common/utils/items';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { updateAdapter } from '../adapters/update.adapter'
import { navigateTo } from 'utils/helpers';
import { deleteProjectById } from '../adapters/delete.adapter ';
import { getProyectById } from '../adapters/list.adapter';
/** COMPONENT */
export const EditProyect = () => {
    const { id } = useRouter().query;
    const [item, setItem] = useState(0);
    const [itemsTemp, setItemsTemp] = useState([])
    const [project, setProject] = useState({
        name: '',
        details: '',
        'project-start': '',
        'project-end': '',
        'documents': [],
        "technical-document": [
            {
                "details-documentation":[]
            }
        ],
        'save-new-document':[],
        'physical-document': [],
        'status': "PENDING"
    });

    useEffect(() => {
        (async function () {
            let res = await getProyectById(id);
            console.log(res)
            setProject({
                ...res?.body,
                status: "PENDING",
                'physical-document': [...res?.body.documents],
                'save-new-document': []
            })
            setItemsTemp(res?.body['technical-document'][0]['details-documentation']);
        })()
    }, [])

    const triggerInputFile = (name: string) => {
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', async (e: any) => await addFile(e.target));
        console.log(project)
    }

    const addFile = async ({ files }) => {
        const documentTypeAvailables=['pdf']
        const file = files[0].name
        const fileType = file.split('.').pop();
        if(documentTypeAvailables.includes(fileType)){
            const fileName = file;
            let base: any = await convertFileToBase64(files[0]);
            let document = {
                name: fileName,
                "binary-file": base.split('base64,')[1]
            }
            setProject({
                ...project,
                'save-new-document': [...project['save-new-document'], document]
            })
        }else{
            Swal.fire("Documento invalido", "Solo se permitren documentos pdf", "warning");
        }
        
    }

    const removeDoc = (index: number, isNew = false) => {
        const docs = project.documents.filter((doc: any, i: number) => index !== i);
        let updateDocuments = {};
        if(isNew){
            updateDocuments = {'save-new-document': project['save-new-document'].filter((doc: any, i: number) => index !== i) }

        }else{
            updateDocuments = {
                documents: project.documents.filter((doc: any, i: number) => index !== i),
                'physical-document': project['physical-document'].filter((doc: any, i: number) => index !== i)
            }; 
        }
        setProject({
            ...project,
            ...updateDocuments
        });
    }

    const convertFileToBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })

    const saveValues = (value, name) => {
        setProject({
            ...project,
            [name]: value
        })
    }

    const getTecnicalSheet = (value) => {
        project['technical-document'][0]['details-documentation'] = value
    }

    const getUniqueId = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
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

        // @ts-ignore
        project['project-start'] = start.join('-');
        // @ts-ignore
        project['project-end'] = end.join('-');
    }

    const submitForm = async () => {
        /*organizations.map(org => {
            !project['organizations'].includes(org['organization-id'].id) && project['organizations'].push(org['organization-id'].id);
        })*/
        // project['organizations'] = [getUniqueId()]
        // console.log(project)
        // formatDates();
        delete project.documents;
        delete project['project-id'];
        console.log(project)
        let res = await updateAdapter(project, id);
        console.log(res)
        navigateTo('/proyecto')
    }

    const handleDelete = async () => {
        const res = await deleteProjectById(project, id as string);
        console.log(res)
        navigateTo(`/proyecto`);
    }

    return (
        <>
            <HeaderContainer>
                <Title>
                    Editar Proyecto
                </Title>
                <DeleteButton onClick={handleDelete} startIcon={<DeleteIcon />}>
                    Eliminar Proyecto
                </DeleteButton>
            </HeaderContainer>
            <TextField fullWidth size="small" value={project?.name} onChange={({ target }) => saveValues(target.value, 'name')}></TextField>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                value={project?.details}
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
            {/* <ContainerInputs>
                <Autocomplete
                    multiple
                    id="size-small-outlined-multi"
                    style={{ width: '50%', marginTop: 20 }}
                    options={guests}
                    getOptionLabel={(option) => option['full'].name}
                    onChange={(event, value) => setOrganizations(value)}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Invitados" />
                    )}
                />
            </ContainerInputs> */}
            <TextField fullWidth placeholder='Documentos' onClick={() => triggerInputFile('documents')} style={{ marginTop: 20 }}></TextField>
            <SubTitle>
                Documentos existentes:
            </SubTitle>
            {project?.documents?.map((item, index) => {
                return (
                    <ListDocuments key={index}>
                        <ElementList>
                            <DocumentName>
                                <PictureAsPdfIcon />
                                <a target="_blank" href={item.uri}>
                                    Document {index + 1}  
                                </a>
                            </DocumentName>
                            <IconsList>
                                <DeleteIcon onClick={() => removeDoc(index)} />
                                {/* <EditIcon /> */}
                                {/* <RemoveRedEyeIcon /> */}
                            </IconsList>
                        </ElementList>
                    </ListDocuments>
                )
            })}
            <Wrapper>
                { !!project['save-new-document'].length &&
                    <SubTitle>
                        Documentos Nuevos:
                    </SubTitle>
                }
                {
                    project['save-new-document']?.map((item, index) => {
                        return (
                            <ListDocuments key={index}>
                                <ElementList>
                                    <DocumentName>
                                        <PictureAsPdfIcon />
                                        <a target="_blank" >
                                            Document {index + 1}  
                                        </a>
                                    </DocumentName>
                                    <IconsList>
                                        <DeleteIcon onClick={() => removeDoc(index , true)} />
                                        {/* <EditIcon /> */}
                                        {/* <RemoveRedEyeIcon /> */}
                                    </IconsList>
                                </ElementList>
                            </ListDocuments>
                        )
                    })

                }

            </Wrapper>
            <SubTitle>
                Propuesta economica
            </SubTitle>
            <ContainerItems>
                <TestContainer fn={getTecnicalSheet} edit={itemsTemp}></TestContainer>
            </ContainerItems>
            <footer style={{ textAlign: 'right' }}>
                <NextButton onClick={submitForm}>Editar Proyecto</NextButton>
            </footer>
        </>
    );
}

export default EditProyect;