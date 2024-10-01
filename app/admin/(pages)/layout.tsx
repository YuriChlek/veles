import React from "react";
import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import '@/web/styles/admin/index.scss';

export const metadata: Metadata = {
    title: "Veles | module_admin",
    description: "Generated by create next app",
};

const AdminRootLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default AdminRootLayout;
