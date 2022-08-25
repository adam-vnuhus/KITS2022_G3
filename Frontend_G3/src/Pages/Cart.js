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
                                        <th>Total</th>
                                        <th />
                                    </tr>
                                </thead>
                                {items.map((item, index) => {
                                    return (
                                        <tbody>
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img src="" alt="" />
                                                    <h5>{item.name}</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    {item.sellPrice}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input type="text" defaultValue={1} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    {item.cartTotal}
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close" />
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

    );
};

export default Cart;

