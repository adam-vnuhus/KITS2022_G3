import React from 'react';
import OrderModal from "./OrderModal";

const OrderItem = (props) => {
    const {value,categories, handleChangeStatusOrder} = props

    return (
        <tr>
            <td>{value.id}</td>
            <td>{value.createAt}</td>
            <td>{value.note}</td>
            <td>{value.totalPrice}</td>
            {/**/}
            <td>{value.nameUser}</td>
            <td>{value.phoneUser}</td>
            <td>{value.addressUser}</td>
            {/**/}
            <td>
                <ol>
                    { value.orderDetails.map((value2) => <li key={value2.id}>{value2.product.name}</li>)}
                </ol>

            </td>
            <td>
                {value.status.name}
            </td>
            <td>{!value.userSucceed? "chua xac nhan boi user nao" :  value.userSucceed.id }</td>
            <td>
                <OrderModal id={value.id} categories={categories} categoryId={value.status.id} handleChangeStatusOrder={handleChangeStatusOrder}/>
            </td>
        </tr>
    );
};

export default OrderItem;