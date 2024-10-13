"use client";

import React from "react";
import { print } from "graphql"
import { Label } from "../../base/label/label";
import { Input } from "../../base/input/input";
import SubmitButton from "../../base/submit-button";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import { AdminLogin as ADMIN_LOGIN_MUTATION } from "@/components/admin/login-form/login-mutation.graphql";
import styles from './lofin.form.module.scss'
import {BaseAdminUser} from "@/api/module_admin/interfaces/admin_user";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LoginResponse {
    login: {
        token: string;
        user: BaseAdminUser
    };
}

const AdminLoginForm: React.FC = () => {
    const router = useRouter();

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

            const token = response.data.data.login.token;

            if (token && typeof token === 'string') {
                await router.push('/admin/dashboard');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <form className={styles['admin-login-form']} onSubmit={signInHandler}>
            <h2 className={styles['admin-login-title']}>Sign in</h2>
            <div className={styles['admin-login-row']}>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
            </div>
            <div className={styles['admin-login-row']}>
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
            </div>
            <SubmitButton type="submit" pendingText="Signing In...">
                Sign in
            </SubmitButton>
        </form>
    );
};

export default AdminLoginForm;