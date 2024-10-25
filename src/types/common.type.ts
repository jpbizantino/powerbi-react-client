export interface LoginResponse {
    token: string;
    organization_id: string;
}

export interface CommonResponse<T> {
    error: boolean;
    message?: { code: number; message: string } | string;
    response?: T;
    paging?: {
        take: number;
        page: number;
        total: number;
    };
}

export interface PowerBiComponentConfig {
    type: string;
    id: string;
    accessToken: string;
    filter: {
        shema: string;
        target: {
            table: string;
            column: string;
        };       
        values: string
    };
}