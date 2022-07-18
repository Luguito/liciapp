import { httpGet, httpPost, httpPut } from '../../../utils/http-client';
import getConfig from 'next/config';
import { getToken } from 'utils/helpers';

export const createAdapter: any = async (data: any) => {
    try {
        const { PROJECT_URI, GUEST_URI} = getConfig().publicRuntimeConfig;
        const token = getToken()
        const organizationId = JSON.parse(localStorage.user)['organization-id'];

        const response = await httpPost(`${PROJECT_URI}/evaluator/api/project/v1/${organizationId}/create`, data, token);
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}

export const getForom = async (id:string | string[]) => {
    try {
        const { PROJECT_URI } = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpGet(`${PROJECT_URI}/evaluator/api/forum/v1/${id}/get`, token);
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}

export const createForomQuestion = async (id:string|string[], data: any) => {
    try {
        const { PROJECT_URI } = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpPost(`${PROJECT_URI}/evaluator/api/forum/v1/${id}/create-question`, data, token);
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}

export const answerForomQuestion = async (id:string | string[], data: any) => {
    try {
        const { PROJECT_URI } = getConfig().publicRuntimeConfig;
        const token = getToken()

        const response = await httpPut(`${PROJECT_URI}/evaluator/api/forum/v1/${id}/answer-to-question`, data, token);
        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}