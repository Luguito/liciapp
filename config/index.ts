import getConfig from 'next/config';

export const getNodeEnv = () => {
    const { publicRuntimeConfig } = getConfig();
    return publicRuntimeConfig.NODE_ENV || process.env.NODE_ENV;
};

export const getRedirectUrl = (host: string, url:string) => {
    const env = getNodeEnv();
    return env === 'development'
        ? `http://${host}${url}`
        : `https://${host}${url}`;
};
