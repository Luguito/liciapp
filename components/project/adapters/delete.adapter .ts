import { httpDelete } from '../../../utils/http-client';
import { getToken } from '../../../utils/helpers'
import getConfig from 'next/config';

const { PROJECT_URI, GUEST_URI} = getConfig().publicRuntimeConfig
const token = getToken()

export const deleteProjectById = async (data:any, id:string) => {
    try{
        const path = `evaluator/api/project/v1/${id}/remove`;

        const response = await httpDelete(`${PROJECT_URI}/${path}`, token);
        console.log(response);
        return response;
    } catch (e) {
        console.error(e)
    }
}