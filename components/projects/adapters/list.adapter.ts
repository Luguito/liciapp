import { httpGet, httpPost, httpPut } from '../../../utils/http-client';
import { getToken } from '../../../utils/helpers'
import getConfig from 'next/config';

const { PROJECT_URI, GUEST_URI } = getConfig().publicRuntimeConfig
const token = getToken()

export const listAdapter: any = async () => {
    try {
        const path = 'evaluator/api/proposal-organization/v1/get';

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

export const getProyectByProposalId = async (id) => {
    try {
        const path = `evaluator/api/proposal-organization/v1/${id}/find-by-proposal`;

        const response = await httpGet(`${PROJECT_URI}/${path}`, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error(e)
    }
}

export const getTeamWork = async () => {
    try {
        const path = `http://ec2-18-233-75-58.compute-1.amazonaws.com:9050/teamwork/api/project/v1/get-profiles`;

        const response = await httpGet(`${path}`, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error(e)
    }
}

export const saveCV = async (projectId: string, data: any) => {
    try {
        const path = `http://ec2-18-233-75-58.compute-1.amazonaws.com:9050/teamwork/api/project/v1/${projectId}/relate-profile-with-project`;

        const response = await httpPost(`${path}`, data, token);
        console.log(response)
        return response;
    } catch (e) {
        console.error(e)
    }
}

export const sendProposal = async (id: any, data: any) => {
    try {
        const path = `evaluator/api/proposal-organization/v1/${id}/update`;

        const response = await httpPut(`${PROJECT_URI}/${path}`, data, token);
        console.log(response)
        return response;

    } catch (e) {
        console.log(e)
    }
}