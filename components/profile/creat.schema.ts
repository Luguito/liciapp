import * as yup from 'yup';

export const schema = yup.object().shape({
    "organization-id": yup.string(),
    email: yup.string(),
    license: yup.string(),
    name: yup.string(),
    details: yup.string(),
    "legal-id": yup.string(),
    address: yup.string(),
    url: yup.string(),
    cellphone: yup.string(),
    phone: yup.string()
})

