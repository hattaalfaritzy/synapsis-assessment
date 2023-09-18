declare namespace BlogsInterface {

    export interface Links {
        current?: string;
        next?: string;
        previous?: string;
    }

    export interface Comments {
        id?: number;
        post_id?: number;
        name?: string;
        email?: string;
        body?: string;
    }

    export interface Blogs {
        id?: number;
        user_id?: number;
        title?: string;
        body?: string;
    }

    export interface APIParamsBlogs {
        page?: number;
        per_page?: number;
    }

    export interface ApiResponseBlogs {
        data?: Blogs[];
        meta?: {
            pagination?: {
                limit: number;
                links: Links;
                page: number;
                pages: number;
                total: number
            }
        }
    }

}