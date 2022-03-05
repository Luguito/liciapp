import { httpGet } from '../../../utils/http-client';

export const listAdapter: any = async (path: string, data: any) => {
    try {
        const response = await httpGet(path);

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
