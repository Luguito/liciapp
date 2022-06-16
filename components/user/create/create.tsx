import { TextField } from '@mui/material';
import { Box } from '@mui/material'
import { useEffect, useState } from 'react';

// Styled components
import { FontLiciFamilyDefaultName, ColorLiciPrimaryActive } from '@common';
import { ContainerFields, TextArea } from './create.styled';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { PurpleButton } from '@global-styled';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// Schema
import { createSchema } from '../schemas/create';
import { createAdapter, getCompanys } from '../adapters/create.adapter';
import Swal from 'sweetalert2';

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

export const CreateUser = () => {
    const [form, setForm] = useState({});
    const [companys, setCompanys] = useState([]);

    useEffect(() => {
        getListCompany();
    }, [])

    const getListCompany = async () => {
        let companys = await getCompanys();
        setCompanys(companys.body);
    }

    const setFields = (field: string, value: string) => setForm({ ...form, [field]: value });

    const handleSubmit = () => createSchema.validate(form).then(validateSucess).catch(e => console.error(e.message));

    const validateSucess = async (data: any) => {
        try {
            await createAdapter(data);
            Swal.fire("Creacion", "El usuario ha sido creado con exito", "success");
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <Box sx={{ ...style, width: 700 }}>
                <h2 id="parent-modal-title" style={{ color: ColorLiciPrimaryActive }}>Crear usuario</h2>
                <ContainerFields>
                    <TextField fullWidth placeholder="Primer nombre" size="small" onChange={(e) => setFields('first-name', e.target.value)}></TextField>
                    <TextField fullWidth placeholder="Segundo nombre" size="small" onChange={(e) => setFields('middle-name', e.target.value)}></TextField>
                </ContainerFields>
                <ContainerFields>
                    <TextField fullWidth placeholder="Primer apellido" size="small" onChange={(e) => setFields('last-name', e.target.value)}></TextField>
                    <TextField fullWidth placeholder="Segundo apellido" size="small" onChange={(e) => setFields('second-last-name', e.target.value)}></TextField>
                </ContainerFields>
                <ContainerFields>
                    <TextField fullWidth placeholder="Correo Usuario" size="small" onChange={(e) => setFields('login-email', e.target.value)}></TextField>
                    <TextField fullWidth placeholder="Correo Compañia" size="small" onChange={(e) => setFields('company-email', e.target.value)}></TextField>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </ContainerFields>
                <ContainerFields>
                    <TextArea
                        placeholder="Descripción"
                        style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
                        minRows={9}
                        onChange={(e) => setFields('details', e.target.value)}
                    />
                </ContainerFields>
                <ContainerFields>
                    <TextField fullWidth placeholder="Nombre de la Compañia" size="small" onChange={(e) => setFields('company-name', e.target.value)}></TextField>
                    <Select fullWidth label="Identificación" value={form['company-id']} onChange={(e) => setFields('company-id', e.target.value)}>
                        {companys.length > 0 && companys.map((company, index) => {
                            return (
                                <MenuItem key={index} value={company['legal-id']}>{company['legal-id']}</MenuItem>
                            )
                        })}
                    </Select>
                </ContainerFields>
                <ContainerFields>
                    <TextField fullWidth placeholder="Dirección" size="small" onChange={(e) => setFields('address', e.target.value)}></TextField>
                    <TextField fullWidth placeholder="URL" size="small" onChange={(e) => setFields('url', e.target.value)}></TextField>
                </ContainerFields>
                <ContainerFields>
                    <TextField fullWidth placeholder="Telefono" size="small" onChange={(e) => setFields('cellphone', e.target.value)}></TextField>
                    <TextField fullWidth placeholder="Numero Telefonico" size="small" onChange={(e) => setFields('phone', e.target.value)}></TextField>
                </ContainerFields>
                <PurpleButton fullWidth onClick={handleSubmit}>Crear</PurpleButton>
            </Box>
        </>
    )
}