import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Autocomplete, TextareaAutosize, TextField } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
/** STYLED COMPONENTS */
import { HeaderContainer, NextButton, Title, DeleteButton, ContainerItems, DatePickerContainer, ContainerInputs, ListDocuments, IconsList, ElementList, DocumentName, SubTitle, HeaderItems, NewActionButton } from './edit.styled';

/** ICONS  */
import DeleteIcon from '@mui/icons-material/Delete';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { TestContainer } from '../../common/utils/items';
import { listGuestAdapter } from '../adapters/list.adapter';
import { updateAdapter } from '../adapters/update.adapter'
import { navigateTo } from 'utils/helpers';

/** COMPONENT */
export const EditProyect = () => {
    const projectEditable = JSON.parse(localStorage.getItem('project'));
    const [guests, setGuest] = useState([]);
    const [documents, setDocument] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [project, setProject] = useState({
        name: projectEditable['full'].name,
        details: projectEditable['details'].description,
        'project-start': projectEditable['project-start'].date,
        'project-end': projectEditable['project-end'].end,
        'project-documents': projectEditable['project-documents'].collections,
        "technical-sheet": projectEditable['technical-sheet'].collections,
        organizations: projectEditable['organizations'].collections,
    });
    const [item, setItem] = useState(0);

    const router = useRouter();
    const { id } = router.query;

    const triggerInputFile = (name: string) => {
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', (e) => {
            setDocument([...documents, ...e.target['files']])
            project[name] = [...e.target['files']];
        });
    }

    useEffect(() => {
        (async function () {
            let guest = await listGuestAdapter();
            setGuest(guest.body);
            setDocument([...project['project-documents']])
        })()
    }, [])

    const saveValues = (value, name) => {
        if (['project-start', 'project-end'].includes(name)) {
            let date = new Intl.DateTimeFormat('es-CO', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).format(value).split('/')

            date.splice(0, 0, date.splice(2, 1)[0]);

            return setProject({
                ...project,
                [name]: date.join('-')
            })
        }

        setProject({
            ...project,
            [name]: value
        })
    }

    const getTecnicalSheet = (value) => {
        project['technical-sheet'] = value
    }

    const submitForm = async () => {
        organizations.map(org => {
            !project['organizations'].includes(org['organization-id'].id) && project['organizations'].push(org['organization-id'].id);
        })
        console.log(project)
        let res = await updateAdapter(project, id);
        console.log(res)
        navigateTo('/proyecto')
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
            <TextField fullWidth size="small" value={project.name} onChange={({ target }) => saveValues(target.value, 'name')}></TextField>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                value={project['details'].description}
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
                    options={guests}
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
            <ContainerItems>
                <TestContainer fn={getTecnicalSheet} edit={project['technical-sheet']}></TestContainer>
            </ContainerItems>
            <footer>
                <NextButton onClick={submitForm}>Edit Project</NextButton>
            </footer>
        </>
    );
}

export default EditProyect;