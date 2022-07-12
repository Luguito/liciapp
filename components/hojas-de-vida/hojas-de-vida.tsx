import { useEffect, useState } from 'react';
import { ContainerFlex, ElementList, IconsList, ItemList, ListDocuments, Logo, PurpleButton, TitleCreate } from '@global-styled';
import { navigateTo } from '@utils/helpers';
/** Icons */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';


import { getProfiles } from './adapters/list.adapter';

export function CVPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getProfiles().then(({ body }) => setList(body))
    }, []);

    const [dummy, setDummy] = useState(['Andres Camilo', 'Peter Parker', 'Fuego-sama', 'Francisco Gomez', 'Dr. Doom', 'Dr. Strange', 'Vision', 'Wanda', 'Tony Stark', 'La Venganza', 'The Batman']);
    return (
        <>
            <ContainerFlex style={{ alignItems: 'center' }}>
                <TitleCreate>
                    Hojas de Vida
                </TitleCreate>
                <PurpleButton onClick={() => navigateTo('/hojas-de-vida/create')}>Agregar</PurpleButton>
            </ContainerFlex>
            <ListDocuments>
                {
                    list.length > 0 && list.map((item, index) => {
                        return (
                            <ElementList key={index}>
                                <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                                    <Logo></Logo>
                                    <ItemList>
                                        {item['first-name']}
                                        <small>Ingeniero de Software</small>
                                    </ItemList>
                                </div>
                                <IconsList>
                                    <DeleteIcon></DeleteIcon>
                                    <EditIcon onClick={() => navigateTo('/hojas-de-vida/edit/'+ '1234')}></EditIcon>
                                    <VisibilityIcon></VisibilityIcon>
                                </IconsList>
                            </ElementList>
                        )
                    })
                }
            </ListDocuments>
        </>
    )
}