export interface AdminUserLogin {
    login: string;
}

export interface AdminUserState {
    adminUser: AdminUserLogin;
    setAdminUser: (newUser: AdminUserLogin) => void;
    getAdminUser: () => void;
}
