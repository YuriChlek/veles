export interface LogoutResponse {
    adminLogout: {
        logout: boolean;
    };
    errors?: Array<{
        message: string;
    }>;
}
