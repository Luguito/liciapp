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

export const CreateProyect: FC<any> = ({ title }) => {
    const [value, setValue] = useState([]);
    const [documents, setDocument] = useState([]);
    const [tab, setTab] = useState('1')


    const dummyOptions = ['Fuego', 'Peter', 'Parker', 'Francisco'];

    const handleChange = (newValue) => {
        console.log(newValue)
    }

    const triggerInputFile = () => {
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', (e) => {
            setDocument([...documents, ...e.target['files']])
            console.log(documents)
        });

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
                        <TextField fullWidth placeholder='Nombre del proyecto' size="small"></TextField>

                        <TextArea
                            aria-label="empty textarea"
                            placeholder="Descripción"
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
                            <TextField onClick={triggerInputFile} style={{ marginTop: 20, width: '50%' }} placeholder="Ficha técnica"></TextField>
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
                </TabPanel>
            </TabContext>
        </ContainerComponent>
    );
};

export default CreateProyect;
