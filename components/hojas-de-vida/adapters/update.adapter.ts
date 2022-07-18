import { httpPost, httpPut } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

export const updateAdapter: any = async (data: any) => {
    try {
        console.log(data)
        const { TEAMWORK } = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpPut(`http://ec2-18-233-75-58.compute-1.amazonaws.com:9050/teamwork/api/project/v1/update-cv`, data, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}


