import Router from 'next/router';
import Axios from 'axios'

export function navigateTo(url: string, asUrl?: string): Promise<boolean> {
  if (Router.router.asPath !== asUrl) {
    return Router.push(url, asUrl);
  }
}

const TOKEN_KEY = 'token'

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY)
  }
}

export const setToken = (key, token) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, token)
  }
}

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY)
  }
}

export const getKey = (key:string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
}

export const initAxiosInterceptors = () => {
  Axios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.token2 = `${token}`;
    }
    return config;
  })
  Axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if(error.response.status === 401){
        return 'Error de autenticacion'
      }
    }
  )
}

export const truncateText = (text: string, count: number) => {
  return text.length > count ? `${text.substring(0, count)}...` : text;
}

export const base64toBlobPDF = (data: string) => {
  const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);

  const bytes = atob(base64WithoutPrefix);
  let length = bytes.length;
  let out = new Uint8Array(length);

  while (length--) {
      out[length] = bytes.charCodeAt(length);
  }

  return new Blob([out], { type: 'application/pdf' });
};