import { httpPost } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

export const createAdapter: any = async (data: any) => {
    try {
        
        const organizationId = JSON.parse(localStorage.getItem('user'))['organization-id'];

        const { PROJECT_URI, GUEST_URI} = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpPost(`${PROJECT_URI}/evaluator/api/project/v1/190b64aa-8822-475a-a9dc-15f74d53e1f2/create`, data, token);
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
