import { httpDelete } from '../../../utils/http-client';
import { getToken } from '../../../utils/helpers'
import getConfig from 'next/config';

export const deleteAdapter: any = async (proyectId) => {
    try {
        const { PROJECT_URI } = getConfig().publicRuntimeConfig
        const path= `/evaluator/api/project/v1/${proyectId}`
        const token = getToken()
        const response = await httpDelete(`${PROJECT_URI}/${path}`, token);

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}