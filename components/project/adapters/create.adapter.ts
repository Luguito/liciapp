import { httpPost } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

export const createAdapter: any = async (data: any) => {
    try {
        const { PROJECT_URI, GUEST_URI} = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpPost(`${PROJECT_URI}/evaluator/api/project/v1/create`, data, token);
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
