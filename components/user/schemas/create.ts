import * as yup from 'yup';

export const createSchema = yup.object().shape({
    "first-name": yup
        .string()
        .required("Requerido"),
    "middle-name": yup
        .string()
        .required("Requerido"),
    "last-name": yup.string().required("Requerido"),
    "second-last-name": yup.string().required("Requerido"),
    "login-email": yup.string().required("Requerido"),
    "company-email": yup.string().required("Requerido"),
    "license": yup.string().required("Requerido"),
    "company-name": yup.string().required("Requerido"),
    "details": yup.string().required("Requerido"),
    "company-id": yup.string().required("Requerido"),
    "address": yup.string().required("Requerido"),
    "url": yup.string().required("Requerido"),
    "cellphone": yup.string().required("Requerido"),
    "phone": yup
        .string()
        .required("Telefono requerido")
})

export const createWithOrg = yup.object().shape({
    "first-name": yup.string().required("Requerido"),
    "middle-name": yup.string().required("Requerido"),
    "last-name": yup.string().required("Requerido"),
    "second-last-name": yup.string().required("Requerido"),
    "login-email": yup.string().required("Requerido"),
    "license": yup.string().required("Requerido"),
})