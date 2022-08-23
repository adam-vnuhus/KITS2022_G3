import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
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