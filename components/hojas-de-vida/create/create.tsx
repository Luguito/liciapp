import { TitleCreate, ContainerFlex, PurpleButton, SubTitle, ListDocuments, ElementList, DocumentName, IconsList } from '@global-styled'
import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { schema } from '../schemas/creat.schema';
import { createAdapter } from '../adapters/create.adapter';
import { useRouter } from 'next/router';
import { DatePickerContainer } from 'components/project/ProyectCreate/create.styled';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { updateAdapter } from '../adapters/update.adapter';
import Swal from 'sweetalert2';
import { navigateTo } from 'utils/helpers';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


export function CreateCV({ isUpdated, sheet }: { isUpdated: boolean, sheet?: any }) {
    const [cv, setCV] = useState<any>({});
    const { id } = useRouter().query;

    useEffect(() => {
        isUpdated && setCV(sheet);
    }, [])

    const addExperience = () => {
        let cvs = !cv.experience ? [] : cv?.experience
        setCV({ ...cv, experience: [...cvs, {}] })
    }

    const setValues = (label: string, value: string) => setCV({ ...cv, [label]: value });

    const setValuesExperiencie = (label: string, value: string, index: number) => {
        let experience = cv.experience;

        experience[index] = {
            ...experience[index],
            [label]: ["start-date", "end-date"].includes(label) ? new Date(value).getTime() : value
        }

        setCV({ ...cv, experience });
    }

    const triggerInputFile = () => {
        const documentTypeAvailables=['pdf']
        let input = document.createElement('input');

        input.type = 'file';

        input.click();

        input.addEventListener('change', async (e) => {
            const file = e.target['files'][0].name
            const fileType = file.split('.').pop();
            if(documentTypeAvailables.includes(fileType)){
                const fileName = file;
                let base: any = await convertFileToBase64(e.target['files'][0]);
                let document = {
                    name: fileName,
                    "binary-file": base.split('base64,')[1]
                }
                setCV({ ...cv, "curriculum-vitae-binary": document });
            }else{
                Swal.fire("Documento invalido", "Solo se permitren documentos pdf", "warning");
            }
        });
    }

    const convertFileToBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })

    const handleSubmit = () => {
        if(cv.id) cv['curriculum-vitae-id'] = cv.id;
        !isUpdated && schema.isValid(cv).then(async v => await createAdapter(cv));
        isUpdated && updateAdapter(cv) 
        navigateTo('/hojas-de-vida')
    };
    return (
        <>
            <TitleCreate>
                Nueva hoja de vida
            </TitleCreate>
            <ContainerFlex>
                <TextField value={cv['first-name']} fullWidth placeholder="Primer Nombre" size="small" onChange={(e) => setValues('first-name', e.target.value)}></TextField>
                <TextField value={cv['middle-name']} fullWidth placeholder="Segundo Nombre" size="small" onChange={(e) => setValues('middle-name', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={cv['last-name']} fullWidth placeholder="Primer Apellido" size="small" onChange={(e) => setValues('last-name', e.target.value)}></TextField>
                <TextField value={cv['second-last-name']} fullWidth placeholder="Segundo Apellido" size="small" onChange={(e) => setValues('second-last-name', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={cv['identification-type']} fullWidth placeholder="Tipo de Identificacion" size="small" onChange={(e) => setValues('identification-type', e.target.value)}></TextField>
                <TextField value={cv['identification']} fullWidth placeholder="Numero de Identificacion" size="small" onChange={(e) => setValues('identification', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={cv['email']} fullWidth placeholder="Email" size="small" onChange={(e) => setValues('email', e.target.value)}></TextField>
                <TextField value={cv['phone']} fullWidth placeholder="Telefono" size="small" onChange={(e) => setValues('phone', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={cv['cellphone']} fullWidth placeholder="Numero de telefono" size="small" onChange={(e) => setValues('cellphone', e.target.value)}></TextField>
                <TextField value={cv['country']} fullWidth placeholder="Pais" size="small" onChange={(e) => setValues('country', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={cv['city']} fullWidth placeholder="Ciudad" size="small" onChange={(e) => setValues('city', e.target.value)}></TextField>
                <TextField value={cv['department']} fullWidth placeholder="Departamento" size="small" onChange={(e) => setValues('department', e.target.value)}></TextField>
                <TextField value={cv['address']} fullWidth placeholder="Direccion" size="small" onChange={(e) => setValues('address', e.target.value)}></TextField>
            </ContainerFlex>
            <ContainerFlex>
                <TextField value={cv['social-profile']} fullWidth placeholder="Perfil social - Facebook o instagram" size="small" onChange={(e) => setValues('social-profile', e.target.value)}></TextField>
            </ContainerFlex>

            <SubTitle style={{ borderTop: '1px solid black', paddingTop: '1em' }}>
                Últimos proyectos en los que ha participado
                <PurpleButton onClick={addExperience} style={{ marginLeft: '2em' }}>Add</PurpleButton>
            </SubTitle>
            {cv.experience && cv.experience.map((proyect, index) => {
                return (
                    <ContainerFlex key={index}>
                        <TextField value={proyect['company-name']} fullWidth placeholder="Nombre de la Empresa" size="small" onChange={(e) => setValuesExperiencie('company-name', e.target.value, index)}></TextField>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Fecha de Inicio"
                                inputFormat="MM/dd/yyyy"
                                value={proyect['start-date']}
                                onChange={(value) => setValuesExperiencie('start-date', value, index)}
                                renderInput={(params) => <TextField fullWidth {...params} style={{ width: '50%' }} />}
                            ></DesktopDatePicker>
                            <DesktopDatePicker
                                label="Fecha de cierre"
                                inputFormat="MM/dd/yyyy"
                                value={proyect['end-date']}
                                onChange={(value) => setValuesExperiencie('end-date', value, index)}
                                renderInput={(params) => <TextField fullWidth {...params} style={{ width: '50%' }} />}
                            ></DesktopDatePicker>
                        </LocalizationProvider>
                        <TextField value={proyect['role']} fullWidth placeholder="Cargo" size="small" onChange={(e) => setValuesExperiencie('role', e.target.value, index)}></TextField>
                        <TextField value={proyect['details']} fullWidth placeholder="Detalles" size="small" onChange={(e) => setValuesExperiencie('details', e.target.value, index)}></TextField>
                    </ContainerFlex>
                )
            })}
            <TextField fullWidth placeholder="Hoja de vida (PDF)" size="small" style={{ marginTop: '2em' }} onClick={triggerInputFile}></TextField>
            {cv['curriculum-vitae-physical'] &&
                <>
                    <ListDocuments>
                        <ElementList>
                            <DocumentName>
                                {/* <PlagiarismIcon></PlagiarismIcon> */}
                                <PictureAsPdfIcon />
                                <a target="_blank" href={cv['curriculum-vitae-physical'] }>
                                    {'Hoja de vida pdf'}
                                </a>
                            </DocumentName>    
                            <IconsList>
                                {/* <DeleteIcon />
                                <EditIcon />
                                <RemoveRedEyeIcon /> */}
                            </IconsList>
                        </ElementList>
                    </ListDocuments>
                </>
            }
            {cv['curriculum-vitae-binary'] &&
                <>
                    <ListDocuments>
                        <ElementList>
                            <DocumentName>
                                {/* <PlagiarismIcon></PlagiarismIcon> */}
                                <PictureAsPdfIcon />
                                <a target="_blank" href={''}>
                                    {cv['curriculum-vitae-binary']?.name || 'Hoja de vida pdf'}
                                </a>
                            </DocumentName>    
                            <IconsList>
                                {/* <DeleteIcon />
                                <EditIcon />
                                <RemoveRedEyeIcon /> */}
                            </IconsList>
                        </ElementList>
                    </ListDocuments>
                </>
            }
            <PurpleButton onClick={handleSubmit}>Siguiente</PurpleButton>
        </>
    )
}