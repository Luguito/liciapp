import Router from 'next/router';
import Axios from 'axios'

export function navigateTo(url: string, asUrl?: string): Promise<boolean> {
  if (Router.router.asPath !== asUrl) {
    return Router.push(url, asUrl);
  }
}

const TOKEN_KEY = 'token'

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const setToken = (key, token) => {
  return localStorage.setItem(key, token)
}

export const removeToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const initAxiosInterceptors = () => {
  Axios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `${token}`;
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