'use server';
import axios from 'axios';

const timeout = Number(process.env.API_TIMEOUT || 15000);

export const fetchApi = async ({ method, baseUrl = process.env.BASE_URL, useV2 = false, url, params, data, headers, ...rest }: Props) => {
    const finalBaseUrl = useV2 ? process.env.BASE_URL_V2 : baseUrl;

    const finalHeaders = {
        Authorization: `Bearer ${process.env.TOKEN_AUTH}`,
        rejectUnauthorized: false,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        ...headers,
    };

    const response = await axios({
        timeout,
        baseURL: finalBaseUrl || undefined,
        url,
        params,
        method,
        headers: finalHeaders,
        data: data && JSON.stringify(data),
        ...rest,
    }); 
    return response.data;
};

interface Props {
    method?: string;
    baseUrl?: string;
    url?: string;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    useV2?: boolean;
}