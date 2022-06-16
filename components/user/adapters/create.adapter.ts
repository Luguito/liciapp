import { httpPost, httpGet } from '@utils/http-client';
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