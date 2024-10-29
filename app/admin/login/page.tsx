import React from "react";
import styles from './login.module.scss';
import AdminLoginForm from "@/components/admin/login-form/AdminLoginForm.tsx";

const Login: React.FC = (): React.JSX.Element => {
    return (
        <main>
            <div className={styles['admin-login-wrapper']}>
                <AdminLoginForm />
            </div>
        </main>
    );
}

export default Login;
