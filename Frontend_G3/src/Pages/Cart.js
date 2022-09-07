import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Cart() {
    //lay ra id  tu local
    const [userId, setUserId] = useState(() => {
        const userIdLocal = JSON.parse(localStorage.getItem("id"));

        if (userIdLocal) {
            return userIdLocal;
        }
        return null;
    });

    const [data, setData] = useState([]);

    //xem gio hang theo id khach dang nhap
    useEffect(() => {
        clickIconCartInHeader();
    }, []);

    //lay ra data cart item
    const clickIconCartInHeader = async () => {
        let res = await axios
            .get("http://localhost:8080/api/user/cart/" + userId)

        console.log(res.data)
        setData(res.data)
    };

    //tang gia, so luong trong gio hang
    const clickSetQuantityProduct = async (cartId, number) => {
        // console.log(cartId);
        let res = await axios.put("http://localhost:8080/api/user/quantity-detail",
            {
                cartId: cartId,
                quantity: number
            })

        console.log(res.data)

        let newData = data.map(s=>{
            if(s.cartId === cartId){
                return {...s,quantity:s.quantity+= number,total:res.data.total}
            }
            return s;
        })

        setData(newData);
    }

    //xoa san pham trong gio hang
    const removeItem = async (cartId) => {
        await axios.delete("http://localhost:8080/api/user/detail-delete/"+cartId);
        let newData = data.filter(s=>s.cartId!== cartId)
        setData(newData);
    }

    //tinh vat
    const calculateVAT = (arr, percent) => {
        let total = calculateTotalMoney(arr);
        return total * percent / 100;
    }

    //tinh tong tien trong gio hang
    const calculateTotalMoney = (arr) => {
        let total = 0;
        arr.forEach(e => {
            total += e.total;
        })
        return total;
    }

    //format thanh tien VietNam
    const formatMoney = (number) => {
        return number.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        })
    }

    let listCart = [];

    if (data.length > 0) {
        listCart = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="shoping__cart__item">
                        <img src={item.productImage} alt={item.productName} width="15%"/>
                        <h5>{item.productName}</h5>
                    </td>
                    <td className="shoping__cart__price">
                        {formatMoney(item.productPrice)}
                    </td>
                    <td className="shoping__cart__quantity">
                        <div className="quantity">
                            <button
                                onClick={() =>
                                    clickSetQuantityProduct(item.cartId, -1)
                                }
                                className="btn btn-info ms-2"
                            >
                                -
                            </button>
                            <div className="pro-qty mx-1">{item.quantity}</div>
                            <button
                                onClick={() =>
                                    clickSetQuantityProduct(item.cartId, 1)
                                }
                                className="btn btn-info ms-2"
                            >
                                +
                            </button>
                        </div>
                    </td>
                    <td className="shoping__cart__total">
                          <span className={"ms-5"}>
                            {formatMoney(item.total)}
                          </span>
                    </td>
                    <td>
                        <button
                            onClick={() => removeItem(item.cartId)}
                            className="btn btn-outline-danger ms-2"
                        >
                            🗑️
                        </button>
                    </td>
                </tr>
            )

        });
    }

    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                <tr>
                                    <th className="shoping__product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th className="text-center">Số tiền</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {listCart}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <hr/>
                            <ul>
                                <li>
                                   Thành tiền <span>{formatMoney(calculateTotalMoney(data))}</span>
                                </li>

                                <li>
                                    Phí vận chuyển<span>{data.length > 0 ? formatMoney(20000) : formatMoney(0)}</span>
                                </li>

                                <li>
                                    Thuế 10%<span>{formatMoney(calculateVAT(data, 10))}<hr/></span>
                                </li>

                                <li>
                                    Tổng tiền <span>{ calculateTotalMoney(data)>0
                                    ? formatMoney(calculateTotalMoney(data) +calculateVAT(data,10)+20000)
                                    : formatMoney(0)
                                    // &&
                                    // localStorage.setItem('total',JSON
                                    //     .stringify(calculateTotalMoney(data) +calculateVAT(data,10)+20000))
                                    }</span>
                                </li>
                            </ul>

                            <div className="d-flex justify-content-between">
                                <button className={'primary-btn'}><Link to="/" className="primary-btn">Mua hàng</Link></button>
                                <button className={'primary-btn'}><Link to="/checkout" className="primary-btn">Thanh toán</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;

// step 2 :

// import React from 'react';
// import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";

// const Cart = () => {
//     const { isEmpty, totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem } = useCart();
// return (

//     <section className="shoping-cart spad">
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-12">
//                     <div className="shoping__cart__table">
//                         <table>
//                             <thead>
//                                 <tr>

//                                     <th className="shoping__product">Sản phẩm</th>
//                                     <th>Giá</th>
//                                     <th>Số lượng</th>
//                                     <th className={'text-center'}>Số tiền</th>
//                                     <th></th>

//                                 </tr>
//                             </thead>
//                             {items.map((item, index) => {
//                                 return (
//                                     <tbody key={item.id}>
//                                         <tr>
//                                             <td className="shoping__cart__item">
//                                                 <img src="" alt="" />
//                                                 <h5>{item.name}</h5>
//                                             </td>
//                                             <td className="shoping__cart__price">
//                                                 {item.price.toLocaleString('it-IT', {
//                                                     style: 'currency',
//                                                     currency: 'VND'
//                                                 })}
//                                             </td>
//                                             <td className="shoping__cart__quantity">
//                                                 <div className="quantity">
//                                                     <button
//                                                         onClick={() =>
//                                                             updateItemQuantity(item.id, item.quantity - 1)
//                                                         }
//                                                         className="btn btn-info ms-2"
//                                                     >
//                                                         -
//                                                     </button>
//                                                     <div className="pro-qty mx-1">
//                                                         {item.quantity}
//                                                     </div>
//                                                     <button
//                                                         onClick={() =>
//                                                             updateItemQuantity(item.id, item.quantity + 1)
//                                                         }
//                                                         className="btn btn-info ms-2"
//                                                     >

//                                                         +
//                                                     </button>

//                                                 </div>
//                                             </td>
//                                             <td className="shoping__cart__total">
//                                                 <span className={"ms-5"}>{(item.price * item.quantity).toLocaleString('it-IT', {
//                                                     style: 'currency',
//                                                     currency: 'VND'
//                                                 })}</span>
//                                             </td>
//                                             <td>
//                                                 <button
//                                                     onClick={() => removeItem(item.id)}
//                                                     className="btn btn-danger ms-2"
//                                                 >
//                                                     Xóa sản phẩm
//                                                 </button>
//                                             </td>
//                                         </tr>

//                                     </tbody>
//                                 )

//                             })}

//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-12">
//                     <div className="shoping__cart__btns mx-auto text-center">
//                         <Link to="/" className="primary-btn cart-btn">Tiếp tục mua hàng</Link>
//                     </div>
//                 </div>
//                 <div className="col-lg-6">
//                 </div>
//                 <div className="col-lg-6">
//                     <div className="shoping__checkout">
//                         <h5>Giỏ hàng</h5>
//                         <ul>
//                             <li>Tạm tính <span>{cartTotal?.toLocaleString('it-IT', {
//                                 style: 'currency',
//                                 currency: 'VND'
//                             })}</span></li>

//                             <li>Phí vận chuyển<span>{cartTotal > 0 ? (20000) : (0).toLocaleString('it-IT', {
//                                 style: 'currency',
//                                 currency: 'VND'
//                             })}</span></li>

//                             <li>Thuế 10%<span>{(cartTotal / 10)?.toLocaleString('it-IT', {
//                                 style: 'currency',
//                                 currency: 'VND'
//                             })}</span></li>

//                             <li>Tổng tiền <span>{cartTotal > 0 ? (cartTotal + cartTotal / 10 + 20000) : (0).toLocaleString('it-IT', {
//                                 style: 'currency',
//                                 currency: 'VND'
//                             })}</span></li>
//                         </ul>
//                         {!isEmpty
//                             ? <Link to="/checkout" className="primary-btn">Mua hàng</Link>
//                             : <button className={'primary-btn w-100'} onClick={() => window.alert('Vui lòng mua hàng để tiếp tục thanh toán')}>Mua hàng</button>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

// );
// };

// export default Cart;
