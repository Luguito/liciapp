import React, { FC, useEffect } from 'react';

import { ProjectContainer, HeaderContainer, Title, CustomButton, NewTab, NewTabs, TabsRow, Caption } from './projectList.styled';
import { ProjectListProps } from './projectList';
import { } from '@common'
import AddIcon from '@mui/icons-material/Add';
import {
    ColorLiciWhite
} from '@common';
import Box from '@mui/material/Box';
import { TabPanel } from './tabPanel'
import { List } from './List'
import { navigateTo } from '../../../utils/helpers';
import { listAdapter } from '../adapters/list.adapter';
import { useDispatch } from 'react-redux';
import { createAdapter} from '../adapters/create.adapter';

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
    const [value, setValue] = React.useState(0);
    const [list, setList] = React.useState([]);
    const dispatch = useDispatch();
    const payload = {

        "name": "Projecto 3",
        "details": "Projecto 3",
        "project-start": "2022-02-02",
        "project-end": "2022-12-02",
        "project-documents": [
            {
                "document": "test-1"
            }
        ],
        "technical-sheet": [
            {
                "test": "test-1"
            }
        ],
        "organizations": [
            "32b41014-833e-48bb-9800-4ab34c9cc7eec"
        ]
    }
    useEffect(() => {
        (async function () {
            // let create = await createAdapter(payload); 
            // console.log(create);
            let res = await listAdapter();
            setList([...res.body]);
            // dispatch({ type: "APP.INIT_LIST", list: res.body });
        })()
    }, [])

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
                <CustomButton
                    onClick={handleNewProject}
                >
                    <AddIcon style={{ color: ColorLiciWhite, fontSize: 'large' }} />
                    NUEVO PROYECTO
                </CustomButton>
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
                    <List projects={list} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <List projects={list} />
                </TabPanel>
            </Box>

        </ProjectContainer>
    );
};
