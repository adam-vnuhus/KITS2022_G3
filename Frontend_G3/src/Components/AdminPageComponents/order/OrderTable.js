import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import OrderItem from "./OrderItem";
import {Link} from "react-router-dom";


const OrderTable = () => {
    const [orders, setOrders] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/v1/orders";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);

    useEffect(() => {
        let urlCategory = "http://localhost:8080/api/v1/categories/status";
        fetch(urlCategory)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });

    }, []);

    const handleChangeStatusOrder = async (data) => {
        console.log(data)

        try {
            await axios.put("http://localhost:8080/api/admin/update-status-order", {
                orderId: data.id,
                statusId: data.status,
                userId:localStorage.getItem('id')
            })

            let statusInfo = categories.find(category => category.id === data.status)
            let newOrders = orders.map(order => {
                if (order.id === data.id) {
                    return {...order,userSucceed : {order}, status : {...order.status, ...statusInfo}}
                }
                return order;
            })

            setOrders(newOrders)
            alert('xac nhan thanh cong ')
        } catch (e) {
            alert('xac nhan khong thanh cong')
            console.log(e)
        }

    }

    return (
        <div style={{flex: "1 1"}} className="m-5">


                <Link to="/admin/orderOff">
                    <button type="button" className="btn btn-outline-info">Đơn hàng tại quầy</button>

                </Link>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Ngày mua hàng</th>
                    <th>Ghi chú đơn hàng</th>
                    <th>Tổng tiền</th>
                    <th colSpan="3">Thông tin khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>Tình trạng đơn hàng</th>
                    <th>Người nhận đơn</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => <OrderItem key={order.id} value={order} categories={categories}
                                                handleChangeStatusOrder={handleChangeStatusOrder}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;