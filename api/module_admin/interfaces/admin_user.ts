export interface BaseAdminUser {
    admin_id: string,
    login: string,
    email: string,
    first_name?: string,
    last_name?: string,
    role?: "admin" | ""
}

export interface AdminUser extends BaseAdminUser {
    password: string,
}

export interface AdminAuthPayload {
    user: BaseAdminUser
    token: string
}
