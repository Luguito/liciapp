import { httpPost } from '../../../../../utils/http-client'

export const loginAdapter: any = async (path: string, data: any) => {
    try {
        const { email, password } = data;
        const response = await httpPost(path, { email, password });

        return response;
    } catch (e) {
        console.error( 'err', e);
    }
}
