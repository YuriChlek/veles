import React from "react";
import type {Metadata} from "next";
import AdminPanelHeader from "@/components/admin/header/AdminPanelHeader";
import AdminPanelFooter from "@/components/admin/footer/AdminPanelFooter";
import AdminPanelMenu from "@/components/admin/menu/AdminPanelMenu";
import '@/web/styles/admin/index.scss';

export const metadata: Metadata = {
    title: "Veles | Admin panel"
};

const DashboardRootLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className="page">
            <AdminPanelMenu />
            <div className="admin-panel-content">
                <AdminPanelHeader />
                { children }
                <AdminPanelFooter />
            </div>
        </div>
    );
}

export default DashboardRootLayout;
