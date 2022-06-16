import * as yup from 'yup';

export const createSchema = yup.object().shape({
    "first-name": yup.string(),
    "middle-name": yup.string(),
    "last-name": yup.string(),
    "second-last-name": yup.string(),
    "login-email": yup.string(),
    "company-email": yup.string(),
    "license": yup.string(),
    "company-name": yup.string(),
    "details": yup.string(),
    "company-id": yup.string(),
    "address": yup.string(),
    "url": yup.string(),
    "cellphone": yup.string(),
    "phone": yup.string()
})