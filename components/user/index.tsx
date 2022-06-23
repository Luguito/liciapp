import { ContainerFlex, ElementList, IconsList, ItemList, ListDocuments, Logo, PurpleButton, TitleCreate } from '@global-styled';
import { useState, useEffect } from 'react';
import { CreateUser } from './create/create'
/** Icons */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Modal } from '@mui/material';
import { getUsers, deleteAdapter } from './adapters/user.adapter';

export const UserComponent = () => {
    // const [dummy, setDummy] = useState(['Andres Camilo', 'Peter Parker', 'Fuego-sama', 'Francisco Gomez', 'Dr. Doom', 'Dr. Strange', 'Vision', 'Wanda', 'Tony Stark', 'La Venganza', 'The Batman']);
    const [createOpen, setCreateOpen] = useState<boolean>(false);
    const [users, setUsers] = useState<any[]>([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUsersHandler()
    }, [])

    const getUsersHandler = async () => {
        const resp = await getUsers()
        setUsers(resp.body)
    }

    const openCreate = () => {
        setCreateOpen(!createOpen);
        setUser({});
    }

    const openEdit = (user) => {
        setCreateOpen(!createOpen);
        setUser(user)
    }

    const deleteUser = async (userId: string) => {
        try {
            await deleteAdapter(userId);
            await getUsersHandler();
        } catch (e) {
            console.error(e)
        }
    }
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
                    users.map((item, index) => {
                        return (
                            <ElementList key={index}>
                                <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                                    <Logo></Logo>
                                    <ItemList>
                                        {item['user-information']['full-name']}
                                    </ItemList>
                                </div>
                                <IconsList>
                                    <DeleteIcon onClick={() => deleteUser(item['user-information']['user-id'])}></DeleteIcon>
                                    <EditIcon onClick={() => openEdit(item)}></EditIcon>
                                    <VisibilityIcon></VisibilityIcon>
                                </IconsList>
                            </ElementList>
                        )
                    })
                }
            </ListDocuments>
            <Modal open={createOpen} onClose={() => setCreateOpen(false)}>
                <CreateUser user={user} />
            </Modal>
        </>
    )
}