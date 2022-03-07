import { httpPost } from '../../../../../utils/http-client'
import getConfig from 'next/config';

export const loginAdapter: any = async (data: any) => {
    const path = 'company/api/login';
    const { LOGIN_URL } = getConfig().publicRuntimeConfig
    try {
        const { email, password } = data;
        const response = await httpPost(`${LOGIN_URL}/${path}`, { email, password });

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
