'use server'
import { fetchApi } from './api';

export async function queryFetch(_key: string, url = '', params = {}, method: 'GET' | 'POST' = 'GET', data?: Record<string, unknown>) {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    const baseUrl = isDevelopment
        ? 'http://localhost:3000/api/'
        : process.env.NEXT_PUBLIC_BASE_URL;

    return fetchApi({
        baseUrl: baseUrl,
        method: method,
        url: url,
        params: params,
        data: data,
    });
}
