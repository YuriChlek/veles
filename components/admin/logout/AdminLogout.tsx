"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DynamicReactIcon from "../../base/dynamic-react-icon/DynamicReactIcon";
import { ADMIN_LOGOUT_MUTATION } from "@/components/admin/logout/logout-mutation.graphql.ts";
import { print } from "graphql/index";
import type { LogoutResponse } from "@/interfaces/admin/logout/interfaces.ts";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import styles from "./admin.logout.module.scss";
import type { GraphQLResponseInterface } from "@/interfaces/admin/graphql/interfaces.ts";
import useVelesTranslation from "@/utils/translations/translation.ts";

const AdminLogout: React.FC = () => {
    const _t = useVelesTranslation();
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            const query = print(ADMIN_LOGOUT_MUTATION);
            const response = await GraphqlRequest<LogoutResponse>(
                { query, variables: {} },
                "admin_logout",
            );

            if (
                "errors" in response.data &&
                response.data.errors &&
                response.data.errors.length > 0
            ) {
                const error = response.data.errors[0].message;
                console.log(error);

                return error;
            }

            const logoutData = response.data as GraphQLResponseInterface<LogoutResponse>;

            if ("adminLogout" in logoutData.data && logoutData.data.adminLogout.logout) {
                await router.push("/admin/panel/login");
            }
        } catch (error) {
            console.log(error);

            return error;
        }
    };
    return (
        <button className={styles["admin-logout"]} onClick={logoutHandler}>
            <span className={styles["admin-logout-article"]}>{_t("Logout")}</span>
            <DynamicReactIcon
                iconName="AiOutlineLogout"
                className={styles["admin-logout-icon"]}
            />
        </button>
    );
};

export default AdminLogout;
