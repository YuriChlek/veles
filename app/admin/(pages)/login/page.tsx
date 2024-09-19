import React from "react";
import { signInAction } from "@/app/admin/actions/signInAction";
import FormMessage, { Message } from "@/components/base/form-message";
import SubmitButton from "@/components/base/submit-button";
import { Input } from "@/components/base/input/input";
import { Label } from "@/components/base/label/label";
import styles from './login.module.scss';

const Login: React.FC = ({ searchParams }: { searchParams: Message }): React.JSX.Element => {
    return (
        <div className={styles['admin-login-wrapper']}>
            <form className={styles['admin-login-form']}>
                <h2 className={styles['admin-login-title']}>Sign in</h2>
                <div className={styles['admin-login-row']}>
                    <Label htmlFor="username">Email</Label>
                    <Input name="username" placeholder="Admin User" required />
                </div>
                <div className={styles['admin-login-row']}>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        required
                    />
                </div>
                <SubmitButton pendingText="Signing In..." formAction={signInAction}>
                    Sign in
                </SubmitButton>
                <FormMessage message={searchParams} />
            </form>
        </div>
    );
}

export default Login;
