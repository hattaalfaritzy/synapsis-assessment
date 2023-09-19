import { fetchApi } from '@/utils/api';

const isDevelopment = process.env.NODE_ENV === 'development';
    
const baseUrl = isDevelopment
    ? 'http://localhost:3003/api/'
    : process.env.NEXT_PUBLIC_BASE_URL;

export const getBlogs = async ({ page, per_page }: BlogsInterface.APIParamsBlogs) => {
    try {
        const res: BlogsInterface.ApiResponseBlogs = await fetchApi({
            baseUrl: baseUrl,
            url: `/blogs?page=${page}&per_page=${per_page}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const getBlogDetail = async (id: number) => {
    try {
        const res: BlogsInterface.Blogs = await fetchApi({
            baseUrl: baseUrl,
            url: `/blogs/${id}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const getBlogComments = async (id: number) => {
    try {
        const res: BlogsInterface.Comments[] = await fetchApi({
            baseUrl: baseUrl,
            url: `/comment-post/${id}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const getUsersPost = async (id: number) => {
    try {
        const res: UsersInterface.Users[] = await fetchApi({
            baseUrl: baseUrl,
            url: `/user-post/${id}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};
