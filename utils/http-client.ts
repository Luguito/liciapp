import Axios, { AxiosRequestConfig } from 'axios';

const URL = 'http://3.84.131.75:9030';
const NEWURL = 'http://ec2-18-233-75-58.compute-1.amazonaws.com:9040';

export const httpPost = async (path: string, body: any, options?: any): Promise<any> => {
    const url = path;
    const response = await (await Axios.post(url, body, { ...options })).data;
    
    return response    
}

export const httpGet = async (path: string, options?: any): Promise<any> => {
    const url = path;
    const response = await (await Axios.get(url, { ...options })).data;
    return response;
}
