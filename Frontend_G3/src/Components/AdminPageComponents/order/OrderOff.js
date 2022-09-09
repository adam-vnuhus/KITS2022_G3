import React, {useEffect, useState} from 'react';
import OrderModal from "./OrderModal";

const OrderOffByAdmin = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/admin/order-off";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);

    const list = []

    if(orders.length>0){
        orders.map((value)=>{
            list.push(
                <tr>
                    <td>{value.id}</td>
                    <td>{value.createAt}</td>
                    <td>{value.note}</td>
                    <td>{value.totalPrice}</td>
                    {/**/}
                    <td>{value.user? value.user.name : ""}</td>
                    <td>{value.user? value.user.phone : "Khách lẻ"}</td>
                    <td>{value.user? value.user.address : ""}</td>
                    {/**/}
                    <td>
                        {value.orderOff}
                    </td>
                    <td>
                        {value.userSucceed ? value.userSucceed.name : ""}
                    </td>
                </tr>
            )
        })
    }

    return (
        <div style={{flex: "1 1"}} className="m-5">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Ngày tạo đơn hàng</th>
                    <th>Ghi chú đơn hàng</th>
                    <th>Tổng tiền</th>
                    <th colSpan="3">Thông tin khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>Người tạo đơn</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div>
    );
};

export default OrderOffByAdmin;