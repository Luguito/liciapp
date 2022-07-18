import { httpPut } from '../../../utils/http-client';
import { getToken } from '../../../utils/helpers'
import getConfig from 'next/config';

export const updateAdapter: any = async (data, proyectId) => {
    try {
        const { PROJECT_URI } = getConfig().publicRuntimeConfig
        const path= `/evaluator/api/project/v1/${proyectId}/update`
        const token = getToken()
        const response = await httpPut(`${PROJECT_URI}/${path}`, data, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}