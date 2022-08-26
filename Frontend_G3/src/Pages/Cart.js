import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () => {
    const { isEmpty, totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem } = useCart();
    return (

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
                                                    <img src="" alt="" />
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
                                                        <button
                                                            onClick={() =>
                                                                updateItemQuantity(item.id, item.quantity - 1)
                                                            }
                                                            className="btn btn-info ms-2"
                                                        >
                                                            -
                                                        </button>
                                                        <div className="pro-qty mx-1">
                                                            {item.quantity}
                                                        </div>
                                                        <button
                                                            onClick={() =>
                                                                updateItemQuantity(item.id, item.quantity + 1)
                                                            }
                                                            className="btn btn-info ms-2"
                                                        >

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
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="btn btn-danger ms-2"
                                                    >
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
                                <li>Tạm tính <span>{cartTotal?.toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}</span></li>

                                <li>Phí vận chuyển<span>{(20000).toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}</span></li>

                                <li>Thuế 10%<span>{(cartTotal / 10)?.toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}</span></li>

                                <li>Tổng tiền <span>{(cartTotal + cartTotal / 10 + 20000)?.toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}</span></li>
                            </ul>
                            <Link to="/checkout" className="primary-btn">PROCEED TO CHECKOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Cart;

