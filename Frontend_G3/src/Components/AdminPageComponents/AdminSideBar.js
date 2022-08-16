import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import "./sidebar.css"

import React from "react";
import { Link } from 'react-router-dom';

const menu = [
    {
        id: 1,
        icon: <i className="fa-solid fa-chart-line"/>,
        path: '/admin',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: <i className="fa-brands fa-product-hunt"/>,
        path: '/admin/orders',
        title: 'Orders',
    },
    {
        id: 3,
        icon: <i className="fa-solid fa-truck"/>,
        path: '/admin/products',
        title: 'Products',
    },
    {
        id: 4,
        icon: <i className="fa-solid fa-user"/>,
        path: '/admin/profile',
        title: 'My account',
    }
]


const SideBarItem = ({ item, active }) => {
    const [hover, setHover] = useState(false);
    return (
        <Link
            to={item.path}
            className={active ? 'admin_sidebar-item-active' : 'admin_sidebar-item'} >
            {item.icon}
            <span className='admin_sidebar-item-label'>{item.title}</span>
        </Link>
    )
}


export default function AdminSideBar(){
        const location = useLocation();

        const [active, setActive] = useState(1);

        useEffect(() => {
            menu.forEach(element => {
                if (location.pathname === element.path) {
                    setActive(element.id);
                }
            });
        }, [location.pathname])

        const __navigate = (id) => {
            setActive(id);
        }

        return    <nav className='admin_sidebar'>
                <div className='admin_sidebar-container'>
                    <div className="text-center">
                        <img src="https://img.freepik.com/premium-vector/colorful-market-logo-with-gradient_23-2148472540.jpg?w=2000" className="w-75 mt-3 rounded-circle"/>
                        {/*<h3 className="text-white">eMarket</h3>*/}
                        <hr/>
                    </div>

                    <div className='admin_sidebar-container'>
                        <div className='admin_sidebar-items'>
                            {menu.map((item, index) => (
                                <div key={index} onClick={() => __navigate(item.id)}>
                                    <SideBarItem
                                        active={item.id === active}
                                        item={item} />
                                </div>
                            ))}
                        </div>

                        <div className='admin_sidebar-footer'>
                            <span className='admin_sidebar-item-label'>Logout</span>
                            <i className="fa-solid fa-right-from-bracket"/>
                        </div>
                    </div>
                </div>
            </nav>

}