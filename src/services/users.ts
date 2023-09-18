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