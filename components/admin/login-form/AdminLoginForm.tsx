"use client";

import React from "react";
import { print } from "graphql"
import { useRouter } from 'next/navigation';
import Label from "../../base/label/Label.tsx";
import Input from "../../base/input/Input.tsx";
import SubmitButton from "../../base/submit-button/SubmitButton.tsx";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import { AdminLogin as ADMIN_LOGIN_MUTATION } from "@/components/admin/login-form/login-mutation.graphql";
import styles from './lofin.form.module.scss'
import type {LoginResponse} from "@/interfaces/admin/login/interfaces";
import useAdminUserStore from "@/state/slices/adminUser";
import _t from "@/utils/translations/translation.ts";

const AdminLoginForm: React.FC = () => {
    const router = useRouter();
    const { setAdminUser } = useAdminUserStore();

    const signInHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        const query = print(ADMIN_LOGIN_MUTATION);

        try {
            const response = await GraphqlRequest<LoginResponse>({ query, variables: { login: username, password }}, 'admin_login');

            if (Object.keys(response.data).includes('errors')) {
                const error = response.data.errors[0].message;
                console.log(error);

                return error;
            }

            const { user, token } = response.data.data.login;

            if (token && typeof token === 'string' && Object.keys(user).length) {
                setAdminUser({login: user.login});
                await router.push('/admin/panel/dashboard');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <form className={styles['admin-login-form']} onSubmit={signInHandler}>
            <h2 className={styles['admin-login-title']}>Sign in</h2>
            <div className={styles['admin-login-row']}>
                <Label htmlFor="username">{_t("Username")}</Label>
                <Input
                    type="text"
                    name="username"
                    placeholder={_t("Username")}
                    required
                />
            </div>
            <div className={styles['admin-login-row']}>
                <Label htmlFor="password">{"Password"}</Label>
                <Input
                    type="password"
                    name="password"
                    placeholder={_t("Password")}
                    required
                />
            </div>
            <SubmitButton type="submit" pendingText={_t("Signing In...")}>
                {"Sign in"}
            </SubmitButton>
        </form>
    );
};

export default AdminLoginForm;
