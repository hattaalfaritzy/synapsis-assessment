declare namespace UsersInterface {

    export interface Users {
        id: number;
        name: string;
        email: string;
        gender: string;
        status: string;
        [key: string]: any;
    }

    export interface Links {
        current?: string;
        next?: string;
        previous?: string;
    }

    export interface APIParamsUsers {
        page?: number;
        per_page?: number;
    }

    export interface ApiResponseUsers {
        data?: Users[];
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