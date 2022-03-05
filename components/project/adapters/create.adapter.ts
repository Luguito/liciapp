import { httpPost } from '../../../utils/http-client';

export const createAdapter: any = async (path: string, data: any) => {
    try {
        const response = await httpPost(path, data);

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
