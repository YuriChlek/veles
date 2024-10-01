export interface BaseAdminUser {
    login: string,
    password: string,
    email: string,
    first_name?: string,
    last_name?: string,
}

export interface AdminUser extends BaseAdminUser{
    admin_id: string;
    role?: "admin"
}
