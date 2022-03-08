import Axios, { AxiosRequestConfig } from 'axios';


export const httpPost = async (path: string, body: any, token?: string, options?: any): Promise<any> => {
    const url = path;
    options = {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: `Bearer ${token}`
        }
    }
    const response = await (await Axios.post(url, body, { ...options })).data;
    
    return response    
}

export const httpGet = async (path: string, token?: string, options?: any): Promise<any> => {
    const url = path;
    options = {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: `Bearer ${token}`
        }
    }

    const response = await (await Axios.get(url, { ...options })).data;
    return response;
}

export const httpPut = async (path: string, body: any, token?: string, options?: any): Promise<any> => {
    const url = path;
    options = {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: `Bearer ${token}`
        }
    }
    const response = await (await Axios.put(url, body, { ...options })).data;
    
    return response    
}