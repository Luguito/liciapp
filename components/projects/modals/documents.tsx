import { Box } from '@mui/material'
import { FontLiciFamilyDefaultName, ColorLiciPrimaryActive } from '@common';
import { useEffect, useState } from 'react';
import { ElementList, ItemList, Logo, PurpleButton } from '@global-styled';

export const Documents = ({ id, close }) => {
    const [documents, setDocument] = useState([]);

    // Styles
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        fontFamily: FontLiciFamilyDefaultName,
    };


    // Effects
    useEffect(() => {}, []);

    // Functions
    const triggerInputFile = () => {
        const documentTypeAvailables = ['pdf']

        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', async (e) => {
            const file = e.target['files'][0].name;

            const fileType = file.split('.').pop();

            if (documentTypeAvailables.includes(fileType)) {
                const fileName = file;
                let base: any = await convertFileToBase64(e.target['files'][0]);

                let document = {
                    name: fileName,
                    "binary-file": base.split('base64,')[1]
                }

                setDocument([...documents, document])
            }
        });
    }

    const convertFileToBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    return (
        <>
            <Box sx={{ ...style, width: 700 }}>
                <h2 id="parent-modal-title" style={{ color: ColorLiciPrimaryActive }}>Documentos disponibles</h2>
                {
                    documents.length > 0 && documents.map((doc, index) => {
                        return (
                            <ElementList key={index}>
                                <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                                    <Logo></Logo>
                                    <ItemList>
                                        {doc?.name}
                                    </ItemList>
                                </div>
                            </ElementList>
                        )
                    })
                }
                <div style={{ display: 'flex', justifyContent: 'end', gap: '1em'}}>
                    <PurpleButton onClick={() => triggerInputFile()}>Adjuntar</PurpleButton>
                    <PurpleButton onClick={() => close(documents)}>Siguiente</PurpleButton>
                </div>
            </Box>
        </>
    );
}