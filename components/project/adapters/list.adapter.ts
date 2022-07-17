import { httpGet } from '../../../utils/http-client';
import { getToken } from '../../../utils/helpers'
import getConfig from 'next/config';

const { PROJECT_URI, GUEST_URI} = getConfig().publicRuntimeConfig
const token = getToken()

export const listAdapter: any = async () => {
    try {
        const path = 'evaluator/api/project/v1/get';

        const response = await httpGet(`${PROJECT_URI}/${path}`, token);
        return response;
    } catch (e) {
        console.error('err', e);
    }
}


export const listBiddersAdapter: any = async () => {
    try {
        const path = 'company/api/organization/v1/bidders'

        const response = await httpGet(`${GUEST_URI}/${path}`, token);

        return response;
    } catch (e) {
        console.error('err', e);
    }
}

export const getProyectById = async (id) => {
    try {
        const path = `evaluator/api/project/v1/${id}/get`;

        const response = await httpGet(`${PROJECT_URI}/${path}`, token);
        
        return response;
    }catch(e){
        console.error(e)
    }
}