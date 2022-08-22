import React from 'react';
import { Outlet } from "react-router-dom";
import AdminFooter from './AdminFooter';
import AdminSideBar from "./AdminSideBar";


const AdminLayout = () => {
    return(<>
            <div className="row bg-light bg-gradient">
            <AdminSideBar/>
                    <Outlet />
            </div>
    </>
        )
};

export default AdminLayout;