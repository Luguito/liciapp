import { useState } from 'react';
import { ContainerFlex, ElementList, IconsList, ItemList, ListDocuments, Logo, PurpleButton, TitleCreate } from '@global-styled';
import { navigateTo } from '@utils/helpers';
/** Icons */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function CVPage() {
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
                    dummy.map((item, index) => {
                        return (
                            <ElementList key={index}>
                                <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                                    <Logo></Logo>
                                    <ItemList>
                                        {item}
                                        <small>Ingeniero de Software</small>
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
        </>
    )
}