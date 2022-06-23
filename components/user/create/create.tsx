import { TextField } from '@mui/material';
import { Box, Autocomplete } from '@mui/material'
import { useEffect, useState } from 'react';

// Styled components
import { FontLiciFamilyDefaultName, ColorLiciPrimaryActive } from '@common';
import { ContainerFields, TextArea } from './create.styled';
import { PurpleButton } from '@global-styled';

// Schema
import { createSchema } from '../schemas/create';
import { createAdapter, getCompanys, updateAdapter } from '../adapters/user.adapter';
import Swal from 'sweetalert2';
import { ValidationError } from 'yup';

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

export const CreateUser = ({ user }) => {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [companys, setCompanys] = useState([]);

    useEffect(() => {
        getListCompany();
        if (Object.keys(user).length > 0) {
            setForm({
                ...form,
                "first-name": user['user-information']['first-name'],
                "middle-name": user['user-information']['middle-name'],
                "last-name": user['user-information']['last-name'],
                'second-last-name': user['user-information']['second-last-name'],
                "login-email": user['user-information']['login-email'],
                "company-email": user['organization-email'],
                "license": user['user-information']['permission-name'],
                "company-name": user?.name,
                "details": user?.details,
                "company-id": user['legal-id'],
                "address": user?.address,
                "url": user?.url,
                "cellphone": user?.cellphone,
                "phone": user?.phone
            })
        }
    }, [])

    const getListCompany = async () => {
        let companys = await getCompanys();
        setCompanys(companys.body);
    }

    const setFields = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
    }

    const handleSubmit = () => {
        createSchema.validate(form).then(validateSucess).catch((ValidationError) => {
            console.log(ValidationError)
            setError({ [ValidationError.path]: ValidationError.message })
        })
    }

    const handleUpdate = () => {
        createSchema.validate(form).then(validateUpdate).catch((ValidationError) => {
            setError({ [ValidationError.path]: ValidationError.message })
        })
    }

    const validateUpdate = async (data) => {
        try {
            await updateAdapter(data, user['user-information']['organization-id']);
            Swal.fire("Actualizado", "El usuario ha sido actualizado con exito", "success");
        } catch (e) {
            console.error(e)
        }
    }

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
                <h2 id="parent-modal-title" style={{ color: ColorLiciPrimaryActive }}>{user ? 'Modificar' : 'Crear'} usuario</h2>
                <ContainerFields>
                    <TextField value={form['first-name']} error={!!error['first-name']} helperText={error['first-name']} fullWidth placeholder="Primer nombre" size="small" onChange={(e) => setFields('first-name', e.target.value)}></TextField>
                    <TextField value={form['middle-name']} error={!!error['middle-name']} helperText={error['middle-name']} fullWidth placeholder="Segundo nombre" size="small" onChange={(e) => setFields('middle-name', e.target.value)}></TextField>
                </ContainerFields>
                <ContainerFields>
                    <TextField value={form['last-name']} error={!!error['last-name']} helperText={error['last-name']} fullWidth placeholder="Primer apellido" size="small" onChange={(e) => setFields('last-name', e.target.value)}></TextField>
                    <TextField value={form['second-last-name']} error={!!error['second-last-name']} helperText={error['second-last-name']} fullWidth placeholder="Segundo apellido" size="small" onChange={(e) => setFields('second-last-name', e.target.value)}></TextField>
                </ContainerFields>
                <ContainerFields>
                    <TextField value={form['login-email']} error={!!error['login-email']} helperText={error['login-email']} fullWidth placeholder="Correo Usuario" type="email" size="small" onChange={(e) => setFields('login-email', e.target.value)}></TextField>
                    <TextField value={form['company-email']} error={!!error['company-email']} helperText={error['company-email']} fullWidth placeholder="Correo Compañia" type="email" size="small" onChange={(e) => setFields('company-email', e.target.value)}></TextField>
                    <Autocomplete
                        fullWidth
                        id="size-small-outlined-multi"
                        style={{}}
                        size="small"
                        options={['BE:ADMIN', 'BE:COMPANY', 'BE:LICI']}
                        value={form['license']}
                        onChange={(event, value) => setFields('license', value)}
                        renderInput={(params) => (
                            <TextField {...params} placeholder="Permisos" />
                        )}
                    />
                </ContainerFields>
                <ContainerFields>
                    <TextArea
                        placeholder="Descripción"
                        style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
                        minRows={9}
                        onChange={(e) => setFields('details', e.target.value)}
                        value={form['details']}
                    />
                </ContainerFields>
                <ContainerFields>
                    <TextField fullWidth placeholder="Nombre de la Compañia" value={form['company-name']} size="small" onChange={(e) => setFields('company-name', e.target.value)}></TextField>
                    <Autocomplete
                        fullWidth
                        id="size-small-outlined-multi"
                        style={{}}
                        size="small"
                        options={companys}
                        getOptionLabel={(option) => option['legal-id']}
                        value={form['company-id']}
                        onChange={(event, value) => setFields('company-id', value)}
                        renderInput={(params) => (
                            <TextField {...params} placeholder="Compañia" />
                        )}
                    />
                    {/* <Select fullWidth label="Identificación" value={form['company-id']} onChange={(e) => setFields('company-id', e.target.value)}>
                        {companys.length > 0 && companys.map((company, index) => {
                            return (
                                <MenuItem key={index} value={company['legal-id']}>{company['legal-id']}</MenuItem>
                            )
                        })}
                    </Select> */}
                </ContainerFields>
                <ContainerFields>
                    <TextField value={form['address']} error={!!error['address']} helperText={error['address']} fullWidth placeholder="Dirección" size="small" onChange={(e) => setFields('address', e.target.value)}></TextField>
                    <TextField value={form['url']} error={!!error['url']} helperText={error['url']} fullWidth placeholder="URL" size="small" onChange={(e) => setFields('url', e.target.value)}></TextField>
                </ContainerFields>
                <ContainerFields>
                    <TextField value={form['cellphone']} error={!!error['cellphone']} helperText={error['cellphone']} fullWidth placeholder="Telefono" size="small" onChange={(e) => setFields('cellphone', e.target.value)}></TextField>
                    <TextField value={form['phone']} error={!!error['phone']} helperText={error['phone']} fullWidth placeholder="Numero Telefonico" size="small" onChange={(e) => setFields('phone', e.target.value)}></TextField>
                </ContainerFields>
                {
                    !user
                        ?
                        <PurpleButton fullWidth onClick={handleSubmit}>Crear</PurpleButton>
                        :
                        <PurpleButton fullWidth onClick={handleUpdate}>Actualizar</PurpleButton>
                }
            </Box>
        </>
    )
}