import type {BaseAdminUser} from "@/api/module_admin/interfaces/admin_user.ts";

export interface LoginResponse {
    login: {
        token: string,
        user: BaseAdminUser
    }
    errors?: Array<{
        message: string;
    }>
}