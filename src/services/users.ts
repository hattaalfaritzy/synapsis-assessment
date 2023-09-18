import { fetchApi } from '@/utils/api';

export const getUsers = async ({ page, per_page }: BlogsInterface.APIParamsBlogs) => {
    try {
        const res: UsersInterface.ApiResponseUsers = await fetchApi({
            url: `/users?page=${page}&per_page=${per_page}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const getUserDetail = async (id: number) => {
    try {
        const res: UsersInterface.Users = await fetchApi({
            baseUrl: 'https://gorest.co.in/public/v2',
            url: `/users/${id}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const addUsers = async (data: Record<string, unknown>) => {
    try {
        const res: UsersInterface.Users = await fetchApi({
            baseUrl: 'https://gorest.co.in/public/v2',
            url: '/users',
            method: 'POST',
            data,
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const editUsers = async (id: string | number, data: Record<string, unknown>) => {
    try {
        const res: UsersInterface.Users = await fetchApi({
            baseUrl: 'https://gorest.co.in/public/v2',
            url: `/users/${id}`,
            method: 'PUT',
            data,
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const deleteUsers = async (id: string | number) => {
    try {
        const res: UsersInterface.Users = await fetchApi({
            baseUrl: 'https://gorest.co.in/public/v2',
            url: `/users/${id}`,
            method: 'DELETE',
        });
        return res;
    } catch (error) {
        throw error;
    }
};