import * as yup from 'yup';

export const schema = yup.object().shape({
    nameProyect: yup.string(),
    description: yup.string(),
    initialDate: yup.date(),
    finalDate: yup.date(),
    guests: yup.array(),
})

