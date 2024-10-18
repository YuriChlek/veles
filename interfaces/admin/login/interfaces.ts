import {BaseAdminUser} from "../../../api/module_admin/interfaces/admin_user";

export interface LoginResponse {
    login: {
        token: string;
        user: BaseAdminUser
    };
}