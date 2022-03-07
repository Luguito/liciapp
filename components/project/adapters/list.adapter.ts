import { httpGet } from '../../../utils/http-client';
import { getToken } from '../../../utils/helpers'
import getConfig from 'next/config';

export const listAdapter: any = async () => {
    try {
        const { PROJECT_URI } = getConfig().publicRuntimeConfig
        const path= 'evaluator/api/project/v1/get'
        const token = getToken()
        const response = await httpGet(`${PROJECT_URI}/${path}`, token);

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}


export const listGuestAdapter: any = async () => {
    try {
        const { GUEST_URI } = getConfig().publicRuntimeConfig
        const path= 'company/api/project/v1/get/guest'
        const token = getToken()
        const response = await httpGet(`${GUEST_URI}/${path}`, token);

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
