import React, { useEffect, useState } from 'react'
import {
    HeaderContainer, Title, ComparateButton, HoursMessage, TextMessage, AnswerMessages, QuestionMessages, ProyectRedirect, StatusApp, ContainerDates,
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
import { getProyectByProposalId, listBiddersAdapter, sendProposal } from '../adapters/list.adapter'
import { answerForomQuestion, createForomQuestion, getForom } from '../adapters/create.adapter'
import { useRouter } from 'next/router'
import { ColorLiciPrimaryActive } from '@common'
import { TreeView, TreeItem } from '@mui/lab';
import { TestContainer } from '../../common/utils/items';
import { TeamCVs } from '../modals/team';
import { Documents } from '../modals/documents';
import { Modal } from '@mui/material';

/** ICONS */
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { InputAdornment, TextField } from '@mui/material';
import { PurpleButton } from '@global-styled';
import { navigateTo } from "@utils/helpers";

interface Iquestion {
    question: string;
    answer: string;
}

export const DetailsProyect = () => {
    const [tab, setTab] = useState('1')
    const [teamOpen, setTeamOpen] = useState<boolean>(false);
    const [documentOpen, setDocumentOpen] = useState<boolean>(false);
    const steps = ['Apertura', 'Recepcion', 'Asignacion'];
    const [question, setQuestion] = useState<string>('');
    const [foro, setForo] = useState<Iquestion[]>([]);
    const [proposal, setProposal] = useState({});
    const [project, setProject] = useState<any>({
        question: ''
    });

    const [bidders, serBidders] = useState([]);
    const { id } = useRouter().query;

    useEffect(() => {
        getInformation(id);
    }, [])

    useEffect(() => {
        getForo(project['project-id']);
    }, [project])

    const goToEdit = () => {
        navigateTo(`/proyecto/edit/${id}`)
    }

    const getInformation = async id => {
        let res = await getProyectByProposalId(id);
        setProject(res?.body);

        res && setProposal({
            ...proposal,
            "physical-document": res.body['project-physical-document']
        })
    }

    const getBidders = async id => {
        let res = await listBiddersAdapter();
        console.log(res)
        serBidders(res?.body);
    }

    const getForo = async (projectId: string) => {
        console.log(projectId)
        let res = await getForom(projectId);
        setForo(res?.body)
    }

    const closeModal = (docs:Array<any>) => {
        setDocumentOpen(false);
        setTeamOpen(true);
        setProposal({
            ...proposal,
            documents: docs
        })
    }   

    const saveProposal = async () => {
        sendProposal(id, proposal).then(() => navigateTo('/proyectos'))
    }

    const getTecnicalSheet = (value) => {
        console.log(value)
        proposal["proposal-organization"] = [
            {
                "details-documentation": value
            }
        ]
    }

    const createQuestion = async () => {
        if (question) {
            let res = await createForomQuestion(project['project-id'], { question });
            await getForo(project['project-id']);

        }
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
                {project['project-name']}
            </DescriptionTitle>
            {/* <ContainerDates>
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
            </ContainerDates> */}
            <SubTitle>Alcance</SubTitle>
            <Content>
                {project['project-details']}
            </Content>
            <Stepper activeStep={1} alternativeLabel style={{ marginTop: '4em' }}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepButton>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <ShowDetailsDocument>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <PictureAsPdfIcon />
                    <p>Ver Detalles</p>
                </div>
                <div>
                    <p>Documentos</p>
                </div>
            </ShowDetailsDocument>
            <TabContext value={tab} >
                <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
                    <TabList>
                        <Tab onClick={() => setTab('1')} label="Requisitos de licitación" value="1" style={{ marginRight: 20 }} />
                        <Tab onClick={() => setTeamOpen(true)} label="Preguntas y respuesta" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {project['project-physical-document']?.map((document: any, index: number) => {
                        return (<DocumentItem key={document.id}>
                            <a target="_blank" href={document.uri}>
                                <PictureAsPdfIcon />
                                <p>{`Document ${index + 1}`}</p>
                            </a>
                        </DocumentItem>
                        )
                    })
                    }
                    {
                        project['proposal-organizations'] ? <>
                            <div style={{ margin: '40px 0' }}>
                                <TreeView defaultCollapseIcon={<ArrowRightIcon />} defaultExpandIcon={<ArrowDropDownIcon />} sx={{ flexGrow: 1, overflowY: 'auto' }}>
                                    <TestContainer proposal={true} fn={getTecnicalSheet} edit={project && project['proposal-organizations'][0]['details-documentation']}></TestContainer>
                                </TreeView>
                            </div>
                        </>
                            :
                            "No hay items"
                    }
                </TabPanel>
                <TabPanel value="2">
                    {
                        foro?.map((item: any) => {
                            return (
                                <ContainerMessages key={item.id}>
                                    <QuestionMessages>
                                        {/* <HoursMessage>30 Dic 2021 / 15:00</HoursMessage> */}
                                        <TextMessage>{item.question}</TextMessage>
                                    </QuestionMessages>
                                    {item.answer &&
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

                        <>
                            {!foro?.length && 'Este proyecto aun no tiene preguntas'}
                            <TextField value={question} fullWidth onChange={({ target }) => setQuestion(target.value)} InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SendIcon sx={{ color: ColorLiciPrimaryActive, cursor: 'pointer' }} onClick={createQuestion} />
                                    </InputAdornment>
                                ),
                            }}></TextField>
                        </>

                    }
                </TabPanel>
            </TabContext>
            <Modal open={teamOpen} onClose={() => { setTeamOpen(false) }}>
                <TeamCVs id={project["project-id"]} close={saveProposal}></TeamCVs>
            </Modal>
            <Modal open={documentOpen} onClose={() => { setDocumentOpen(false) }}>
                <Documents id={project["project-id"]} close={closeModal}></Documents>
            </Modal>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <PurpleButton onClick={() => setDocumentOpen(true)}>Siguiente</PurpleButton>
            </div>
        </ContainerComponent >
    )
}

export default DetailsProyect