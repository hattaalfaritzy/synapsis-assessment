import { fetchApi } from '@/utils/api';

export const getBlogs = async ({ page, per_page }: BlogsInterface.APIParamsBlogs) => {
    try {
        const res: BlogsInterface.ApiResponseBlogs = await fetchApi({
            url: `/posts?page=${page}&per_page=${per_page}`,
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
            baseUrl: 'https://gorest.co.in/public/v2',
            url: `/posts/${id}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};
