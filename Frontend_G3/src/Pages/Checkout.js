import React, {useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const Checkout = () => {

    //lay ra user tu local
    const userLocal = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(userLocal);

    //format thanh tien VietNam
    const formatMoney = (number) => {
        return number.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        })
    }

    const point = useRef(null);
    const note = useRef(null);
    const navigate = useNavigate();

    //Mua Hang
    const clickBuy = async () => {
        console.log('mua hang')
        try {
            let res = await axios.post("http://localhost:8080/api/user/order-bill", {
                userId: user.id,
                note: note.current.value,
                addressUser: user.address,
                nameUser: user.name,
                phoneUser: user.phone,
                point: 0
            })

            //mua hang thanh cong
            alert('mua hang thanh cong')
            navigate("/")

        } catch (e) {
            //    mua hnag that
            alert('mua hnag that bai')
        }
    }

    return (
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <h4>Chi tiết thanh toán</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-6">

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Tên người nhận</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Tên người nhận"
                                           aria-label="Tên người nhận" aria-describedby="basic-addon1"
                                           value={user.name}
                                           onChange={(e) => {
                                               setUser({...user, name: e.target.value})
                                           }}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Địa chỉ nhận hàng</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Địa chỉ nhận hàng"
                                           aria-label="Địa chỉ nhận hàng" aria-describedby="basic-addon1"
                                           value={user.address}
                                           onChange={(e) => {
                                               setUser({...user, address: e.target.value})
                                           }}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Số điện thoại người nhận hàng</span>
                                    </div>
                                    <input type="text" className="form-control"
                                           placeholder="Số điện thoại người nhận hàng"
                                           aria-label="Số điện thoại người nhận hàng" aria-describedby="basic-addon1"
                                           value={user.phone}
                                           onChange={(e) => {
                                               setUser({...user, phone: e.target.value})
                                           }}
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">ghi chú cần lưu ý</span>
                                    </div>
                                    <textarea ref={note} className="form-control note-input" aria-label="With textarea"
                                              rows="9"></textarea>
                                </div>


                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="checkout__order">
                                    {/*<h4>Đơn hàng của bạn</h4>*/}
                                    {/*<div className="checkout__order__subtotal">Tổng*/}
                                    {/*    tiền <span>{localStorage.getItem('total') > 0 ? formatMoney(localStorage.getItem('total')) : formatMoney(0)} </span>*/}
                                    {/*</div>*/}
                                    <div className="d-flex">
                                        <button className="site-btn me-5">
                                            <Link to="/cart">
                                                Quay lại kiểm tra giỏ hàng
                                            </Link>
                                        </button>
                                        <button onClick={clickBuy} className="site-btn ms-5">Hoàn tất mua
                                            hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;