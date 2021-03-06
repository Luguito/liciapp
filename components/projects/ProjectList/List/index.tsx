import { FC } from 'react';
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
import { navigateTo, truncateText } from '../../../../utils/helpers';
import { useRolePermission } from '../../../../utils/permissionRole';
import { deleteProjectById } from '../../adapters/delete.adapter ';
import Swal from 'sweetalert2';
interface project {
    projectId: string;
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
    const { projects, onChange } = props;
    const currentUser = useRolePermission();
    console.log(props)
    
    const handleDelete = async (data:any, id: string) => {
        Swal.fire({
            title: 'Eliminar proyecto',
            text: 'Seguro que desea eliminar el proyecto?',
            icon: 'info',
            confirmButtonText: 'Si',
            showCancelButton: true,
            cancelButtonText: 'No'
        }).then(async ({ value }) => {

            if (value) {
                const res = await deleteProjectById(data, id);
                onChange(projects.filter(project => project['project-id'] !== id))
            }
        });
    }

    const handleEdit = (id) => {
        const index = projects.findIndex((project) => project['project-id'] == id);

            navigateTo(`/proyecto/edit/${id}`)

    }

    const handleDetail = id => {
        const index = projects.findIndex((project) => project['project-id'] == id);
            navigateTo(`/proyectos/details/${id}`);
    }


    return (
        <ListContainer>
            {projects.map((project, index) => {
                return (
                    <ProyectCard key={index}>
                        <HeaderCard onClick={() => handleDetail(project['proposal-document-id'])}>
                            <Subtitle>{project['project-name']}</Subtitle>
                            {
                                ['BE:ADMIN', 'BE:LICI'].includes(currentUser?.role) && <StyledBadge badgeContent={project.length}>
                                    <NotificationsIcon style={{ color: ColorLiciGrayLighten1 }} />
                                </StyledBadge>
                            }
                            {false && <Caption>Abierta</Caption>}
                        </HeaderCard>
                        <BodyCard>
                            <Description>
                                {truncateText(project['project-details'], 130)}
                            </Description>
                            {/* <Schedule>
                                <Paragraph>
                                    <Caption>Fecha de apertura</Caption>
                                    {project['project-start']}
                                </Paragraph>
                                <Paragraph>
                                    <Caption>Fecha de cierre</Caption>
                                    {project['project-end']}
                                </Paragraph>
                            </Schedule> */}
                        </BodyCard>
                        <ActionsCard>
                            <LeftActions>

                            </LeftActions>
                            {/* {
                                ['BE:ADMIN', 'BE:LICI'].includes(currentUser?.role) && <RightActions>
                                    <DeleteForeverIcon onClick={() => handleDelete(project, project['project-id'])} style={{ color: ColorLiciGrayLighten1, marginRight: '20px' }} />
                                    <EditIcon onClick={() => handleEdit(project['project-id'])} style={{ color: ColorLiciGrayLighten1 }} />
                                </RightActions>
                            } */}
                        </ActionsCard>
                    </ProyectCard>
                )
            })}
        </ListContainer>
    );
}