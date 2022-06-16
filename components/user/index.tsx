import { ContainerFlex, ElementList, IconsList, ItemList, ListDocuments, Logo, PurpleButton, TitleCreate } from '@global-styled';
import { useState } from 'react';
import { CreateUser } from './create/create'
/** Icons */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Modal } from '@mui/material';

export const UserComponent = () => {
    const [dummy, setDummy] = useState(['Andres Camilo', 'Peter Parker', 'Fuego-sama', 'Francisco Gomez', 'Dr. Doom', 'Dr. Strange', 'Vision', 'Wanda', 'Tony Stark', 'La Venganza', 'The Batman']);
    const [createOpen, setCreateOpen] = useState<boolean>(false);

    return (
        <>
            <ContainerFlex style={{ alignItems: 'center' }}>
                <TitleCreate>
                    Usuarios
                </TitleCreate>
                <PurpleButton onClick={() => setCreateOpen(!createOpen)}>
                    Nuevo Usuario
                </PurpleButton>
            </ContainerFlex>
            <ListDocuments>
                {
                    dummy.map((item, index) => {
                        return (
                            <ElementList key={index}>
                                <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                                    <Logo></Logo>
                                    <ItemList>
                                        {item}
                                    </ItemList>
                                </div>
                                <IconsList>
                                    <DeleteIcon></DeleteIcon>
                                    <EditIcon></EditIcon>
                                    <VisibilityIcon></VisibilityIcon>
                                </IconsList>
                            </ElementList>
                        )
                    })
                }
            </ListDocuments>
            <Modal open={createOpen} onClose={() => setCreateOpen(false)}>
                <CreateUser />
            </Modal>
        </>
    )
}