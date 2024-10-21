export interface AdminUserLogin {
    login: string
}

export interface AdminUserState {
    adminUser: AdminUserLogin;
}

export interface AdminActions {
    setAdminUser: (newUser: AdminUserLogin) => void;
    getAdminUser: () => void;
}
