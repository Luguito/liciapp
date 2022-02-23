import React, { FC } from 'react';

import { ProjectContainer, HeaderContainer, Title, button, NewTab, NewTabs, TabsRow, Caption} from './projectList.styled';
import { ProjectListProps } from './projectList';
import {  } from '@common'
import AddIcon from '@mui/icons-material/Add';
import {
    ColorLiciWhite
} from '@common';
import Box from '@mui/material/Box';
import { TabPanel } from './tabPanel'
import { List } from './List'
import { navigateTo } from '../../../utils/helpers';



export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
    
    const [value, setValue] = React.useState(0);  

    const fakeData: any= [
        {
            projectId:'123457987',
            description: 'ESPECIFICACIONES PARA EL REDISEÑO, SUMINISTRO E INSTALACIÓN DEL SISTEMA AIRE ACONDICIONADO DEL COMEDOR…',
            startDate: '2021-12-30',
            endDate: '2022-01-20',
            totalApplications: 1,
        },
        {
            projectId:'123457987',
            description: 'ESPECIFICACIONES PARA EL REDISEÑO, SUMINISTRO E INSTALACIÓN DEL SISTEMA…',
            startDate: '2021-12-10',
            endDate: '2022-03-01',
            totalApplications: 3,
        },
        {
            projectId:'123457987',
            description: 'ESPECIFICACIONES PARA EL REDISEÑO, SUMINISTRO E INSTALACIÓN DEL SISTEMA…',
            startDate: '2021-12-10',
            endDate: '2022-03-01',
            totalApplications: 3,
        },
    ];

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleNewProject = () => {
        navigateTo('/proyecto/nuevo')
    }

    return (
        <ProjectContainer>
            <HeaderContainer>
                <Title>Proyectos</Title>
                <Button
                    size='Medium'
                    onClick={handleNewProject}
                >
                    <AddIcon style={{color: ColorLiciWhite, fontSize: 'large'}}/>
                    NUEVO PROYECTO
                </Button>
            </HeaderContainer>

            <Box sx={{ width: '100%' }}>
                <TabsRow>
                    <Box >
                        <NewTabs value={value} onChange={handleChange}  >
                            <NewTab label='Abiertas' {...a11yProps(0)} />
                            <NewTab label='Cerradas' {...a11yProps(1)} />
                        </NewTabs>
                    </Box>
                    <Caption>Aplicaciones {value === 0 ? 'activas' : 'inactivas'}: 40</Caption>
                </TabsRow>

                <TabPanel value={value} index={0}>
                    <List projects={fakeData} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <List projects={fakeData} />
                </TabPanel>
            </Box>
            
        </ProjectContainer>
    );
};
