import {FC} from 'react';
import { 
    ListContainer, 
    ProyectCard, 
    HeaderCard, 
    BodyCard, 
    ActionsCard, 
    Title,
    Subtitle,
    Caption,
    Description,
    Schedule,
    Paragraph,
    RightActions,
    LeftActions,
    StyledBadge
} from './list.styled'
import { 
    ColorLiciPrimaryActive, 
    ColorLiciWhite, 
    ColorLiciGrayLighten1,
    ColorLiciGrayBase
} from '@common'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { navigateTo } from '../../../../utils/helpers';

interface project {
        projectId:string;
        description: string;
        startDate: string;
        endDate: string;
        totalApplications: number;
        status?: string;
}
interface ListProps {
    projects: project[]
}

export const List: FC<any> = (props) => {
    const { projects } = props;
    console.log(props)
    const handleDelete = () => {
        console.log('delete project')
    }

    const handleEdit = (id) => {
        console.log(id);
        navigateTo(`/proyecto/edit/${id}`)
    }

    const handleDetail = id => {
        navigateTo(`/proyecto/details/${id}`)
    }

    return (
        <ListContainer>
            { projects.map((project, index) => {
                return ( 
                    <ProyectCard key={index}>
                        <HeaderCard onClick={() => handleDetail(project['project-id'].id)}>
                            <Subtitle>{project['full'].name}</Subtitle>
                            <StyledBadge badgeContent={project.totalApplications}>
                                <NotificationsIcon style={{color: ColorLiciGrayLighten1}}/>
                            </StyledBadge>
                            {false &&<Caption>Abierta</Caption>}
                        </HeaderCard>
                        <BodyCard>
                            <Description>
                                {project['details'].description}
                            </Description>
                            <Schedule>
                                <Paragraph>
                                    <Caption>Fecha de apertura</Caption>
                                    {project['project-start'].date}
                                </Paragraph>
                                <Paragraph>
                                    <Caption>Fecha de cierre</Caption>
                                    {project['project-end'].end}
                                </Paragraph>
                            </Schedule>
                        </BodyCard>
                        <ActionsCard>
                            <LeftActions>

                            </LeftActions>
                            <RightActions>
                                <DeleteForeverIcon onClick={handleDelete} style={{color: ColorLiciGrayLighten1, marginRight: '20px'}} />
                                <EditIcon onClick={() => handleEdit(project.projectId) } style={{color: ColorLiciGrayLighten1}} />
                            </RightActions>
                        </ActionsCard>
                    </ProyectCard>
                )
            })}
        </ListContainer>
    );
}