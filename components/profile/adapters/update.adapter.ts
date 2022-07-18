import { httpPost, httpPut } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

export const updateAdapter: any = async (data: any) => {
    try {
        const { TEAMWORK } = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpPut(`http://ec2-18-233-75-58.compute-1.amazonaws.com:9040/company/api/organization/v1/update`, data, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}


