import Axios, { AxiosRequestConfig } from 'axios';

const URL = 'http://3.84.131.75:9030';

export const httpPost = async (path: string, body: any, options?: any): Promise<any> => {
    const url = `${URL}${path}`;
    const response = await (await Axios.post(url, body, { ...options })).data;
    
    return response    
}

export const httpGet = async (path: string, options?: any): Promise<any> => {
    const url = `${URL}{path}`;
    const response = await (await Axios.get(url, { ...options })).data;
    return response;
}
