import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './AdminFooter';
import Header from './AdminHeader';
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