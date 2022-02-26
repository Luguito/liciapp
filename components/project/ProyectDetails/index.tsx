import React, { useState } from 'react'
import { HeaderContainer, Title, ComparateButton, ProyectRedirect,StatusApp, ContainerDates, Dates, TitleDates, SubTitle, ContentDates, ShowDetailsDocument, DescriptionTitle, Content, ContainerComponent, Table } from './details.styled';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { navigateTo } from '../../../utils/helpers';

/** ICONS */
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const DetailsProyect = () => {
    const [tab, setTab] = useState('1')
    const steps = ['Apertura', 'Recepcion', 'Asignacion'];

    const goToEdit = id => {
        navigateTo(`/proyecto/edit/${id}`)
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
                <EditIcon onClick={goToEdit} style={{ fontSize: '1.1rem', marginLeft: 5, cursor: 'pointer'}} />
            </ProyectRedirect>
            <DescriptionTitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore debitis ipsum adipisci libero quibusdam nam incidunt ab deleniti autem nostrum expedita laborum, optio reprehenderit deserunt accusantium magnam in porro rem.
            </DescriptionTitle>
            <ContainerDates>
                <Dates>
                    <TitleDates>Fecha de inicio</TitleDates>
                    <ContentDates>
                        30 Dic 2021
                    </ContentDates>
                </Dates>
                <Dates>
                    <TitleDates>Fecha de cierre</TitleDates>
                    <ContentDates>
                        30 Enero 2021
                    </ContentDates>
                </Dates>
            </ContainerDates>
            <SubTitle>Alcance</SubTitle>
            <Content>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Neque pariatur beatae voluptatum reiciendis doloremque
                saepe sed, facilis debitis, repellendus suscipit, reprehenderit odio nam quae.
                Rerum, enim. Obcaecati fugiat impedit totam.
            </Content>
            <Content>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Neque pariatur beatae voluptatum reiciendis doloremque
                saepe sed, facilis debitis, repellendus suscipit, reprehenderit odio nam quae.
                Rerum, enim. Obcaecati fugiat impedit totam.
            </Content>
            <Stepper alternativeLabel style={{ marginTop: '4em' }}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <ShowDetailsDocument>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
                        <Tab onClick={() => setTab('1')} label="Aplicaciones" value="1" style={{ marginRight: 20 }} />
                        <Tab onClick={() => setTab('2')} label="Preguntas y Respuestas" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Table style={{ width: '100%' }}>
                        <tr>
                            <th>Proponente</th>
                            <th>Fecha de aplicación</th>
                            <th>Valor Total</th>
                        </tr>
                        <tr>
                            <td>Constructora SAS</td>
                            <td>20 enero 2022</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>Constructora SAS</td>
                            <td>20 enero 2022</td>
                            <td>2000</td>
                        </tr>
                    </Table>
                </TabPanel>
                <TabPanel value="2">
                    In Progress
                </TabPanel>
            </TabContext>
        </ContainerComponent>
    )
}

export default DetailsProyect