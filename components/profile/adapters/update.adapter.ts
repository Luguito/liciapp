import { httpGet, httpPost, httpPut } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

const { TEAMWORK, LOGIN_URL } = getConfig().publicRuntimeConfig;
const token = getToken()

export const updateAdapter: any = async (id:string, data: any) => {
    try {
        let path = `company/api/organization/v1/update`

        const response = await httpPut(`${LOGIN_URL}/${path}`, data, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error('err', e);
    }
}

export const getCompanyInfo = async (id: string) => {
    try {
        let path = `company/api/user/v1/${id}/organization`;
        
        const response = await httpGet(`${LOGIN_URL}/${path}`, token);

        console.log(response)
        return response;
    } catch (e) {
        console.error(e)
    }
}
