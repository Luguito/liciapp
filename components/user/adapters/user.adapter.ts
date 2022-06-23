import { httpPost, httpGet, httpPut, httpDelete } from '@utils/http-client';
import { IUser } from '../interfaces/create.interface';
import getConfig from 'next/config';

export const createAdapter = async (data: IUser) => {
    const path = "company/api/user/v1/create-user-organization";
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const response = await httpPost(`${LOGIN_URL}/${path}`, { ...data }, localStorage.getItem('token'));
        console.log(response);

        return response;
    } catch (e) {
        console.error(e)
    }
}

export const createUserInOrganization = async (data:any) => {
    let orgId = JSON.parse(localStorage.user)['organization-id'];
    const path = `company/api/user/v1/${orgId}/create-user-organization-enable`;
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    
    try {
        const response = await httpPost(`${LOGIN_URL}/${path}`, { ...data }, localStorage.getItem('token'));
        console.log(response);

        return response;
    } catch (e) {
        console.error(e)
    }
}

export const updateAdapter = async (data: IUser, orgId: string) => {
    const path = `company/api/user/v1/${orgId}/update`;
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const response = await httpPut(`${LOGIN_URL}/${path}`, data, localStorage.getItem('token'));
        console.log(response)
        return response
    } catch (e) {
        console.error(e)
    }
}

export const deleteAdapter = async (userId: string) => {
    const path = `company/api/user/v1/${userId}/delete`;
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const response = await httpDelete(`${LOGIN_URL}/${path}`, localStorage.getItem('token'));
        console.log(response)
        return response
    } catch (e) {
        console.error(e)
    }
}

export const getCompanys = async () => {
    const path = "company/api/user/v1/organizations";
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const response = await httpGet(`${LOGIN_URL}/${path}`, localStorage.getItem('token'));
        console.log(response);

        return response;
    } catch (e) {
        console.error(e)
    }
}

export const getUsers = async () => {
    const path = "company/api/user/v1/enable-organizations";
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const response = await httpGet(`${LOGIN_URL}/${path}`, localStorage.getItem('token'));
        console.log(response);

        return response;
    } catch (e) {
        console.error(e)
    }
}