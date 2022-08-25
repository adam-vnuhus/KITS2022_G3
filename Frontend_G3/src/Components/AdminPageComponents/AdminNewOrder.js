import React, {useEffect, useState} from "react";
import ComboBox from "./ComboBox";
import AdminService from "../../services/AdminService";

export default function AdminNewOrder() {
    const [items, setItems] = useState(null)
    const [listProduct, setListProduct] = useState(null)
    const [listUser, setListUser] = useState(null)
    const [selectedItem, setSelectedItem] = useState()
    const [selectedUser, setSelectedUser] = useState()
    const [quantity, setQuantity] = useState(1)
    const [CurrentProducts, setCurrentProducts] = useState(new Map());
    const [totalPrice, setTotalPrice] = useState(null);
    const [totalQuantity, setTotalQuantity] = useState(null);
    const [isMember, setIsMember] = useState(false);

    async function setData() {
        const productData= (await AdminService.fetchOnlyData("product")).data;
        const userData = (await AdminService.fetchOnlyData("user")).data
        return {product: productData,user:userData}
    }

    useEffect(() => {
        setData().then((data) => {
            setListProduct(data.product)
            setListUser(data.user)
        })
    },[])

    async function onSelectProduct(e, item) {
        e.preventDefault();
        await setSelectedItem(item)
    }
    async function onSelectUser(e, item) {
        e.preventDefault();
        await setSelectedUser(item)
    }

    async function onAdjust(item, sign, quantity) {
        (!CurrentProducts.has(item?.id)
            ? CurrentProducts.set(item?.id, {
                id: item?.id,
                name: item?.name,
                quantity: quantity,
                price: item?.price
            })
            : CurrentProducts.set(item?.id, {
                id: item?.id,
                name: item?.name,
                quantity: sign === '+' ?
                    ((CurrentProducts.get(item?.id).quantity) + quantity)
                    :sign === '-' ? ((CurrentProducts.get(item?.id).quantity) - quantity) >= 0
                        ? ((CurrentProducts.get(item?.id).quantity) - quantity)
                        :0:0
                ,
                price: item?.price
            }))
        const cart = []
        let tPrice = 0;
        let tQuantity = 0;
        for (const item of CurrentProducts.values()) {
            if (item.quantity !== 0) cart.push(item)
            tPrice += item.price * item.quantity
            tQuantity += item.quantity
        }
        setItems(cart)
        setTotalPrice(tPrice)
        setTotalQuantity(tQuantity)
    }
    
    async function AddProductHandler(e) {
        await e.preventDefault();
        await setQuantity(eval(e.target.parentElement.children[1].value))
        await onAdjust(selectedItem, '+', quantity)
    }

    return listProduct !== null
        ? <div className={'mainContent_ mainContent_dashboard-content'}>
            <div className={'container my-5 mx-auto'}>
                <div className={'container row'}>
                    <ComboBox list={listProduct} onSelect={onSelectProduct}/>
                    <input type='text' className={'col rounded-3 text-center mx-1'}
                           onChange={e => setQuantity(eval(e.target.value) > 0 ? eval(e.target.value) : 1)}
                           value={quantity}/>
                    <button className={"btn btn-primary float-end col-2"} onClick={e => AddProductHandler(e)}>Add
                        Product
                    </button>
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
                                        {items && items?.map((item, index) => {
                                            return (
                                                <tbody key={index}>
                                                <tr>
                                                    <td className="shoping__cart__item">
                                                        <img src="" alt=""/>
                                                        <h5>{item.name}</h5>
                                                    </td>
                                                    <td className="shoping__cart__price">
                                                        {item?.price.toLocaleString('it-IT', {
                                                            style: 'currency',
                                                            currency: 'VND'
                                                        })}
                                                    </td>
                                                    <td className="shoping__cart__quantity">
                                                        <div className="quantity">
                                                            <button
                                                                onClick={() => {
                                                                    onAdjust(item, '-', 1).then(() => console.log('decrement'))
                                                                }}
                                                                className="btn btn-info ms-2">
                                                                -
                                                            </button>
                                                            <span className="mx-1 text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => {
                                                                    onAdjust(item, '+', 1).then(() => console.log('increment'))
                                                                }}
                                                                className="btn btn-info ms-2">
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="shoping__cart__total">
                                                <span
                                                    className={"ms-5"}>{(item.price * item.quantity).toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}</span>
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() => {
                                                                onAdjust(item, 0, 1).then(() => console.log('increment'))
                                                            }}
                                                            className="btn btn-danger ms-2">
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
                            <div className="col-lg-6 me-5 border rounded border-primary">
                                <h4 className={'text-center border-2 border-bottom pb-3 border-black'}>
                                    Thông tin khách hàng
                                </h4>
                                <div className={'container row'}>
                                    {!isMember&&<ComboBox list={listUser} onSelect={onSelectUser}/>}
                                    <div className={'col align-middle'}>
                                        <input type="checkbox" id="member" name="member" value="Bike" onChange={()=>setIsMember(!isMember)}/>
                                        <label  className={'h5 mx-1'} htmlFor="member">Thành viên ?</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 ms-2  border rounded border-primary">
                                <h4 className={'text-center border-2 border-bottom pb-3 border-black'}>Thông tin đơn
                                    hàng</h4>
                                <div className="shoping__checkout ">
                                    <h5>Cart Total <span className={'float-end text-primary'}>{totalQuantity?totalQuantity + ' sản phẩm':null}</span></h5>
                                    <ul>
                                        <li>Subtotal <span>{totalPrice?.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</span></li>
                                        <li>Tax 10%<span>{(totalPrice / 10).toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</span></li>
                                        <li>Total <span>{(totalPrice + totalPrice / 10).toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div> : 'loading...'
}