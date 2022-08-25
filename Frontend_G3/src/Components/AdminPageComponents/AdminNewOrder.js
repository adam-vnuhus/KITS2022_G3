import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ComboBox from "./ComboBox";
import AdminService from "../../services/AdminService";

export default function AdminNewOrder() {
    const [items, setItems] = useState([])
    const [list, setList] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const ListProduct = [];

    useEffect(() => {
        async function setData() {
            return (await AdminService.fetchOnlyData("product")).data;
        }
        // setData().then(()=>setList(ListProduct))
        setData().then((data)=>setList(data))
    }, [])
    console.log(selectedItem)
    const onAddingProduct =()=>{

    }
    return list !== null
        ? <div className={'mainContent_ mainContent_dashboard-content'}>
            <div className={'container my-5 mx-auto'}>
            <div className={'container row'}>
                <ComboBox list={list} setSelectedItem={setSelectedItem}/>
                <input/>
                <button className={"btn btn-primary float-end col-2"}>Add Product</button>
            </div>
                <section className="shoping-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th className={'text-center'}>Total</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        {items.map((item, index) => {
                                            return (
                                                <tbody key={item.id}>
                                                <tr>
                                                    <td className="shoping__cart__item">
                                                        <img src="" alt=""/>
                                                        <h5>{item.name}</h5>
                                                    </td>
                                                    <td className="shoping__cart__price">
                                                        {item.price.toLocaleString('it-IT', {
                                                            style: 'currency',
                                                            currency: 'VND'
                                                        })}
                                                    </td>
                                                    <td className="shoping__cart__quantity">
                                                        <div className="quantity">
                                                            <button className="btn btn-info ms-2">
                                                                -
                                                            </button>
                                                            <div className="pro-qty mx-1">
                                                                {item.quantity}
                                                            </div>
                                                            <button className="btn btn-info ms-2">
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="shoping__cart__total">
                                                <span className={"ms-5"}>{(item.price * item.quantity).toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}</span>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger ms-2">
                                                            Remove Item
                                                        </button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns mx-auto text-center">
                                <Link to="/" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span></span></li>
                                </ul>
                                <Link to="/" className="primary-btn">PROCEED TO CHECKOUT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div> : 'loading...'
}