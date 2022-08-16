import React from 'react';
import { Outlet } from "react-router-dom";
import AdminFooter from './AdminFooter';
import AdminSideBar from "./AdminSideBar";


const AdminLayout = () => {
    return(<>
            <div className="row">
            <AdminSideBar/>
                    <Outlet />
            </div>
            {/*<AdminFooter />*/}
    </>

        )

};

export default AdminLayout;