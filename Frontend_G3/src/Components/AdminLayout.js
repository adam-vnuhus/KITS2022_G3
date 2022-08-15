import React from 'react';
import { Outlet } from "react-router-dom";
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader';
const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
            <AdminFooter />
        </>
    );
};

export default AdminLayout;