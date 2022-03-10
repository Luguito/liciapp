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
import { createAdapter } from '../adapters/create.adapter';
import { useRolePermission } from '@utils/permissionRole';
export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
    const [value, setValue] = React.useState(0);
    const [list, setList] = React.useState([]);
    const currentUser = useRolePermission();

    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
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
                {
                    currentUser?.role === 'BE:ADMIN' && <CustomButton onClick={handleNewProject}>
                        <AddIcon style={{ color: ColorLiciWhite, fontSize: 'large' }} />
                        NUEVO PROYECTO
                    </CustomButton>
                }
            </HeaderContainer>

            <Box sx={{ width: '100%' }}>
                <TabsRow>
                    <Box >
                        <NewTabs value={value} onChange={handleChange}  >
                            <NewTab label='Abiertas' {...a11yProps(0)} />
                            <NewTab label='Cerradas' {...a11yProps(1)} />
                        </NewTabs>
                    </Box>
                    <Caption>Aplicaciones {value === 0 ? 'activas' : 'inactivas'}: {list.length}</Caption>
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
