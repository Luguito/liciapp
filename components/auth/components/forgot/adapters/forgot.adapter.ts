import { httpPost, httpGet } from '../../../../../utils/http-client'
import getConfig from 'next/config';

export const loginAdapter: any = async (data: any) => {
    const path = 'company/api/user/login';
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const response = await httpPost(`${LOGIN_URL}/${path}`, { ...data });
        console.log(response)
        return response;
    } catch (e) {
        console.error('err', e);
    }
}