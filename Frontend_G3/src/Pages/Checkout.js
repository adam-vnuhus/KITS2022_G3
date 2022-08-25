import { useCart } from "react-use-cart";
export default function Checkout() {
    const { isEmpty, totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem } = useCart();

    return <>
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <h4>Chi tiết thanh toán</h4>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-12 col-md-6">


                                <div className="checkout__input">
                                    <p>Address<span>*</span></p>
                                    <input type="text" placeholder="Street Address" className="checkout__input__add" />

                                </div>


                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="checkout__order">
                                    <h4>Đơn hàng của bạn</h4>
                                    <div className="checkout__order__products">Sản Phẩm <span>Tổng tiền</span></div>
                                    {items.map((item) => {
                                        return (

                                            <ul>
                                                <li>{item.name} <span>{(item.price * item.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></li>
                                            </ul>
                                        )
                                    })}

                                    <div className="checkout__order__subtotal">Subtotal <span>{cartTotal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></div>
                                    <div className="checkout__order__total">Total <span>{cartTotal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></div>


                                    {/* <div className="checkout__input__checkbox">
                                        <label htmlFor="paypal">
                                            Paypal
                                            <input type="checkbox" id="paypal" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div> */}
                                    <button type="submit" className="site-btn">Đăt hàng tận nơi</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}