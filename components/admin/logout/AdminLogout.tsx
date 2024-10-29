"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import styles from "./admin.logout.module.scss"
import { AdminLogout as ADMIN_LOGIN_MUTATION } from "@/components/admin/logout/logout-mutation.graphql";
import { print } from "graphql/index";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import _t from "@/utils/translations/translation.ts"

const AdminLogout: React.FC = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            const query = print(ADMIN_LOGIN_MUTATION);
            const response = await GraphqlRequest<{ adminLogout: { logout: boolean } }>(
                {query, variables: {}},
                'admin_logout'
            );

            if (Object.keys(response.data).includes('errors')) {
                const error = response.data.errors[0].message;
                console.log(error);

                return error;
            }

            if (response.data.data.adminLogout.logout) {
                await router.push('/admin/panel/login');
            }

        } catch (error) {
            console.log(error)

            return error;
        }
    }
    return (
        <button className={styles["admin-logout"]} onClick={logoutHandler}>
            <span className={styles["admin-logout-article"]}>
                {_t("Logout")}
            </span>
            <DynamicReactIcon iconName="AiOutlineLogout" className={styles["admin-logout-icon"]}/>
        </button>
    )
}

export default AdminLogout;
