import { TitleCreate, SubTitleCreate, HeaderCreate, TitleContainer, CustomInput, TextArea, InputDate, DocumentInput, DobleContainer } from './create.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material'
import { schema } from './create.schema';
import { FC } from 'react';

export const CreateProyect: FC<any> = ({ title }) => {
    const { register, handleSubmit, errors, setValue, control } = useForm({
        // resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <HeaderCreate>
                <TitleContainer>
                    <TitleCreate>
                        Nuevo Proyecto
                    </TitleCreate>
                    /
                    <SubTitleCreate>
                        Información general
                    </SubTitleCreate>
                </TitleContainer>
                1/2
            </HeaderCreate>
            <form>
                <TextField
                    fullWidth
                    placeholder='Nombre del proyecto'
                    size="small"></TextField>
                {/* <Controller name="nameProyect" control={control} render={({ field }) => <TextField {...field}/>} /> */}
                <TextArea placeholder='Descripción'></TextArea>
                <DobleContainer>
                    <InputDate placeholder="Fecha de inicio"></InputDate>
                    <InputDate placeholder="Fecha de cierre"></InputDate>
                </DobleContainer>
                <DobleContainer>
                    <TextField
                        fullWidth
                        placeholder='Ficha tecnica'
                        size="small">
                    </TextField>
                    <TextField
                        fullWidth
                        placeholder='Invitados'
                        size="small">
                    </TextField>
                </DobleContainer>
                <TextField
                    sx={{
                        mt: '10'
                    }}
                    fullWidth
                    placeholder='Nombre del proyecto'
                    size="small"></TextField>
                <br></br>
                <Button variant="contained">Siguiente</Button>
            </form>
        </>
    );
};

export default CreateProyect;
