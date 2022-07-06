import { httpGet } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

export const getProfiles: any = async (data: any) => {
    try {
        const { TEAMWORK } = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpGet(`http://ec2-18-233-75-58.compute-1.amazonaws.com:9050/teamwork/api/project/v1/get-profile`, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
