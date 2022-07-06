import * as yup from 'yup';

export const schema = yup.object().shape({
    'first-name': yup.string(),
    'middle-name': yup.string(),
    'last-name': yup.string(),
    'second-last-name': yup.string(),
    phone: yup.string(),
    email: yup.string(),
    address: yup.string(),
    cellphone: yup.string(),
    "social-profile": yup.string(),
    "type-identification": yup.string(),
    identification: yup.string(),
    department: yup.string(),
    city: yup.string(),
    country: yup.string(),
    experience: yup.array(),
    "curriculum-vitae-binary": yup.object(),
})

