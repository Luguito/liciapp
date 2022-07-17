import React, { useEffect, useState } from 'react'
import { HeaderContainer, Title, ComparateButton, HoursMessage, TextMessage, AnswerMessages, QuestionMessages, ProyectRedirect, StatusApp, ContainerDates, 
    Dates, TitleDates, SubTitle, ContentDates, ShowDetailsDocument, DescriptionTitle, Content, ContainerComponent, Table, ContainerMessages,
    DocumentList, DocumentItem, Container, InputContainer, Label
} from './details.styled';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { navigateTo } from '../../../utils/helpers';
import { getProyectById, listBiddersAdapter } from '../adapters/list.adapter'
import { answerForomQuestion, createForomQuestion, getForom } from '../adapters/create.adapter'
import { useRouter } from 'next/router'
import { ColorLiciPrimaryActive } from '@common'
import { TreeView, TreeItem } from '@mui/lab';

/** ICONS */
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { InputAdornment, TextField } from '@mui/material';

interface Iquestion {
    question: string;
    answer: string;
}

interface IMessage {
    id: string;
    text: string
}

export const DetailsProyect = () => {
    const [tab, setTab] = useState('1')
    const steps = ['Apertura', 'Recepcion', 'Asignacion'];
    const [answer, setAnswer] = useState<IMessage>();
    const [foro, setForo] = useState<Iquestion[]>([]);
    const [questionSelected, setQuestionSelected] = useState<IMessage>({
        text: '',
        id: ''
    });

    const [name, setName] = useState([
        {
            name: 'list',
            unit: "",
            quantity: 0,
            "partial-amount": 0,
            "unit-amount": 0,
            id: '0',
            child: [],
        },
    ]);

    const [project, setProject] = useState<any>({
        question: ''
    });

    const [bidders, serBidders] = useState([]);
    const [areDocumentsVisible, setAreDocumentsVisible] = useState<boolean>(false);

    const { id } = useRouter().query;

    useEffect(() => {
        getInformation(id);
        getForo();
        getBidders(id);
    }, [])

    const goToEdit = () => {
        navigateTo(`/proyecto/edit/${id}`)
    }

    const getInformation = async id => {
        let res = await getProyectById(id);
        setProject(res?.body);
    }

    const getBidders = async id => {
        let res = await listBiddersAdapter();
        console.log(res)
        serBidders(res?.body);
    }

    const getForo = async () => {
        let res = await getForom(id);
        setForo(res?.body)
    }

    const createQuestion = async () => {
        // let res = await createForomQuestion(id, text);
        await getForo();
    }

    const answerQuestion = async () => {
        let res = await answerForomQuestion(answer.id, { answer: answer.text});
        const cleanData = {text:'', id:''}
        setAnswer(cleanData)
        setQuestionSelected(cleanData)
        await getForo();
    }

    const Item = ({ item, fn, id, setValue }) => {
       
        const unitOptions = ['M2', 'UN', 'GL', 'ML', 'M3']
    
        return (
            <TreeItem onClick={() => fn(id)} nodeId={id} style={{ marginTop: '0.7em' }} label={
                <Container>
                    <p> {id.split('.').map((i, index) => Number(i) + 1 + (id.split('.').length - 1 === index ? '' : '.'))  } </p>
                    <InputContainer>
                        <Label>Descriptor</Label>
                        
                    </InputContainer>
                    
                    <InputContainer>
                            <Label>Unidad</Label>
                            
                    </InputContainer>
                    <InputContainer>
                            <Label>Cantidad</Label>
                            
                    </InputContainer>
                    <InputContainer>
                        <Label>Valor unitario</Label>
                    </InputContainer>
                    <InputContainer>
                        <Label>Valor total</Label>
                    </InputContainer>
                </Container>
            }>
            </TreeItem>
        )
    };

    const TestItem = ({ items, fn, setValue }) => {

        useEffect(() => {
            console.log(items);
        }, []);
    
        return items.map((item, index) => (
            <>
                {
                    item.child && item.child.length > 0 ? (
                        <>
                            <Item item={item} fn={fn} id={item.id} setValue={setValue}></Item>
                            <TreeItem nodeId={item.id} label={
                                <TestItem items={item.child} fn={fn} setValue={setValue}></TestItem>
                            }>
                            </TreeItem>
                        </>
                    ) : (
                        <Item item={item} fn={fn} id={item.id} setValue={setValue}></Item>
                    )
                }
    
            </>
        ));
    }




    return (
        <ContainerComponent>
            <HeaderContainer>
                <Title>Aplicación</Title>
                <ComparateButton startIcon={<VisibilityIcon />}>
                    Comparativo
                </ComparateButton>
            </HeaderContainer>
            <StatusApp>
                <span>Abierta</span>
            </StatusApp>
            <ProyectRedirect>
                Proyecto
                <EditIcon onClick={goToEdit} style={{ fontSize: '1.1rem', marginLeft: 5, cursor: 'pointer' }} />
            </ProyectRedirect>
            <DescriptionTitle>
                {project?.name}
            </DescriptionTitle>
            <ContainerDates>
                <Dates>
                    <TitleDates>Fecha de inicio</TitleDates>
                    <ContentDates>
                        {project['project-start']}
                    </ContentDates>
                </Dates>
                <Dates>
                    <TitleDates>Fecha de cierre</TitleDates>
                    <ContentDates>
                        {project['project-end']}
                    </ContentDates>
                </Dates>
            </ContainerDates>
            <SubTitle>Alcance</SubTitle>
            <Content>
                {project?.details}
            </Content>
            {/* <Content>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Neque pariatur beatae voluptatum reiciendis doloremque
                saepe sed, facilis debitis, repellendus suscipit, reprehenderit odio nam quae.
                Rerum, enim. Obcaecati fugiat impedit totam.
            </Content> */}
            <Stepper activeStep={1} alternativeLabel style={{ marginTop: '4em' }}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepButton>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <ShowDetailsDocument onClick={() => { setAreDocumentsVisible(!areDocumentsVisible) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer'}}>
                    <PictureAsPdfIcon />
                    <p>Ver Detalles</p>
                </div>
                <div>
                    <p>Documentos</p>
                </div>
            </ShowDetailsDocument>
            { areDocumentsVisible &&
                <DocumentList>
                    {   project.documents?.map((document: any, index: number) => {
                            return (<DocumentItem key={document.id}>
                                        <a target="_blank" href={document.uri}>
                                            <PictureAsPdfIcon />
                                            <p>{`Document ${index + 1}`}</p>
                                        </a>
                                    </DocumentItem>
                            )
                        })
                    }
                </DocumentList>
            }

                {/* <TreeView defaultCollapseIcon={<ArrowRightIcon />} defaultExpandIcon={<ArrowDropDownIcon />} sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <TestItem items={name} fn={()=>{}} setValue={()=>{}}></TestItem>
                </TreeView> */}


            <TabContext value={tab} >
                <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
                    <TabList>
                        <Tab onClick={() => setTab('1')} label="Aplicaciones" value="1" style={{ marginRight: 20 }} />
                        {/* <Tab onClick={() => setTab('2')} label="Preguntas y Respuestas" value="2" style={{ marginRight: 20 }} /> */}
                        <Tab onClick={() => setTab('3')} label="Preguntas y respuesta" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Table style={{ width: '100%' }}>
                        <tr>
                            <th>Proponente</th>
                            <th>Fecha de aplicación</th>
                            <th>Valor Total</th>
                        </tr>
                        {
                            bidders?.map((bidder: any, index:number) => {
                                return (
                                    <tr key={index}>
                                        <td>{bidder.name}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                )
                            })
                        }
                    </Table>
                </TabPanel>
                {/* <TabPanel value="2">
                    In Progress
                </TabPanel> */}
                <TabPanel value="3">
                        {
                            foro.map((item: any) => {
                                return (
                                    <ContainerMessages key={item.id}>
                                        <QuestionMessages onClick={ () => setQuestionSelected({text:item.question, id: item.id}) }>
                                            {/* <HoursMessage>30 Dic 2021 / 15:00</HoursMessage> */}
                                            <TextMessage>{item.question}</TextMessage>
                                        </QuestionMessages>
                                        { item.answer &&
                                            <AnswerMessages>
                                                {/* <HoursMessage>30 Dic 2021 / 15:00</HoursMessage> */}
                                                <TextMessage>{item.answer}</TextMessage>
                                            </AnswerMessages>
                                        }
                                    
                                    </ContainerMessages>
                                )
                            })
                        }
                    {
                        foro.length ? 
                            <>
                                Responder: { questionSelected.text || 'No ha selecionado ninguna pregunta a responder' }
                                <TextField value={answer?.text} disabled={!questionSelected.text} fullWidth onChange={({ target }) => setAnswer({ text: target.value, id: questionSelected.id })} InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SendIcon sx={{ color : ColorLiciPrimaryActive, cursor: 'pointer'}} onClick={answerQuestion} />
                                        </InputAdornment>
                                    ),
                                }}></TextField>
                            </>
                            
                        : (
                            'Este proyecto aun no tiene preguntas'
                        )

                    }    
                </TabPanel>
            </TabContext>
        </ContainerComponent >
    )
}

export default DetailsProyect