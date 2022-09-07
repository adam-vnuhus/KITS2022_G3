import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Avatar} from "@mui/material";


const ProductTable = () => {
    const navigate = useNavigate();

    //danh sach don hang
    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/v1/products?name=&origin=&category=&start=&end=";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });

        let urlCategory = "http://localhost:8080/api/v1/categories";
        fetch(urlCategory)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });

        let urlSupplier = "http://localhost:8080/api/v1/supplier";
        fetch(urlSupplier)
            .then((response) => response.json())
            .then((data) => {
                setSuppliers(data);
            });

    }, []);

    //LIST MODAL
    const listButtonModal = (idProduct, nameProduct) => {
        const id = idProduct
        const modal = "#" + nameProduct

        const modalNhap = "#" + idProduct
        const inputNhap = "nhap" + idProduct

        return (
            <React.Fragment>
                {/*button xoa*/}
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-outline-danger collapsed" data-toggle="collapse"
                                        data-target={modal} aria-expanded="false"
                                        aria-controls="collapseTwo">
                                    Xoa
                                </button>
                            </h5>
                        </div>
                        {/*modal xoa*/}
                        <div id={nameProduct} className="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordion">
                            <div className="card-body">
                                <button className="btn btn-outline-danger collapsed" data-toggle="collapse"
                                        data-target={modal} aria-expanded="false"
                                        aria-controls="collapseTwo">
                                    ❌️
                                </button>
                                <button type="button"
                                        onClick={() => clickDelete(id)}
                                        className="btn btn-outline-primary">✔️
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*button Nhap hang */}
                <button type="button" className="btn btn-outline-warning" data-toggle="modal"
                        data-target={modalNhap}>
                    Nhap Hang
                </button>
                {/*MODAL BUTTON NHAP HANG*/}
                <div className="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={id}>{nameProduct}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="number" id={inputNhap}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Dong
                                </button>
                                <button type="button"
                                        onClick={() => clickUpdateQuantity(id)}
                                        className="btn btn-outline-info">Dong y
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }

    const list = [];

    if (products.length > 0) {
        products.map((value) => {
            list.push(
                <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>
                        <Avatar alt="Remy Sharp" src={value.image}/>
                    </td>
                    <td>{value.name}</td>
                    <td>{value.buyPrice}</td>
                    <td>{value.price}</td>
                    <td>{value.sold}</td>
                    <td>{value.quantity}</td>
                    <td>
                        {listButtonModal(value.id, value.name)}
                    </td>
                </tr>
            )
        })
    }

    //DELETE
    const clickDelete = async (id) => {
        // console.log(id)

        try {
            await axios.delete("http://localhost:8080/api/admin/products/" + id)

            alert('xoa thanh cong')
//
            const newProducts = products.filter(s => s.id !== id)
            setProducts(newProducts)


        } catch (e) {
            alert('xoa that bai')
            console.log(e)
        }
    }

    //UPDATE QUANTITY
    const clickUpdateQuantity = async (id) => {
        const numEl = document.getElementById('nhap' + id)

        // console.log(id, numEl.value)

        try {
            await axios.put("http://localhost:8080/api/admin/products/" + id + "?quantity=" + numEl.value)

            alert('nhap hang thanh cong')
            //    render
            let newProducts = products.map(s => {
                if (s.id == id) {
                    return {...s, quantity: s.quantity + Number(numEl.value)}
                }
                return s;
            })
            setProducts(newProducts)

        } catch (e) {
            console.log(e)
            alert('nhap hang khong thanh cong')
        }
    }

    const name = useRef(null);
    const quantityNew = useRef(null);
    const buyPrice = useRef(null);
    const price = useRef(null);
    const origin = useRef(null);
    const description = useRef(null);
    const category = useRef(null)
    const supplier = useRef(null)
    const img = useRef(null)

    const closeRef = useRef();

    //option category
    const listCategory = []
    if (categories.length > 0) {
        categories.map((value) => {
            listCategory.push(
                <option value={value.id}>{value.name}</option>
            )
        })
    }

    //option supplier
    const listSupplier = []
    if (suppliers.length > 0) {
        suppliers.map((value) => {
            listSupplier.push(
                <option value={value.id}>{value.name}</option>
            )
        })
    }

    const clickAddNewProduct = async () => {
        // const categoryEl = category.current.value
        // const supplierEl = supplier.current.value
        // const imgEl = img.current.value
        //
        // console.log(categoryEl, supplierEl , imgEl)

        try {
            let res = await axios.post("http://localhost:8080/api/admin/product", {
                name: name.current.value,
                quantity: quantityNew.current.value,
                buyPrice: buyPrice.current.value,
                price: price.current.value,
                image: img.current.value,
                origin: origin.current.value,
                description: description.current.value,
                categoryId: category.current.value,
                supplierId: supplier.current.value
            })

            alert('them thanh cong')

            let newProducts = [res.data, ...products];
            setProducts(newProducts);



        } catch (e) {
            console.log(e)
            alert('them that bai')
        }


    }


    return (
        <div style={{flex: "1 1"}} className="m-5">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th colSpan="2">Sản phẩm</th>
                    <th>Giá nhập</th>
                    <th>Giá bán</th>
                    <th>Số lượng đã bán</th>
                    <th>kho</th>
                    <th>
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                data-target="#modal-create-product">
                            Them Moi San Pham
                        </button>

                        {/*MODAL THEM MOI */}
                        <div className="modal fade" id="modal-create-product" tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle" >Them Moi San Pham</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={closeRef}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {/*name*/}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">ten</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="ten san pham"
                                                   ref={name}
                                                   aria-label="ten san pham" aria-describedby="basic-addon1"/>
                                        </div>

                                        {/* const quantityNew */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">so luong</span>
                                            </div>
                                            <input type="number" className="form-control" placeholder="ten san pham"
                                                   ref={quantityNew}
                                                   aria-label="ten san pham" aria-describedby="basic-addon1"/>
                                        </div>

                                        {/*     const buyPrice */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Gia Nhap</span>
                                            </div>
                                            <input type="number" className="form-control" placeholder="ten san pham"
                                                   ref={buyPrice}
                                                   aria-label="ten san pham" aria-describedby="basic-addon1"/>
                                        </div>

                                        {/*   price */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Gia Ban</span>
                                            </div>
                                            <input type="number" className="form-control" placeholder="ten san pham"
                                                   ref={price}
                                                   aria-label="ten san pham" aria-describedby="basic-addon1"/>
                                        </div>

                                        {/*  const origin   */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Xuat Su</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="ten san pham"
                                                   ref={origin}
                                                   aria-label="ten san pham" aria-describedby="basic-addon1"/>
                                        </div>

                                        {/*  description */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Mo ta </span>
                                            </div>
                                            <textarea className="form-control" rows="10" aria-label="With textarea"
                                                      ref={description}></textarea>
                                        </div>

                                        {/*    Category*/}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text"
                                                       htmlFor="inputGroupSelect01">The Loai</label>
                                            </div>
                                            <select className="custom-select selectCategory" id="inputGroupSelect01"
                                                    ref={category}>
                                                {listCategory}
                                            </select>
                                        </div>

                                        {/*    IMAGE*/}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Anh </span>
                                            </div>
                                            <div className="custom-file">
                                                <input ref={img} type="file" className="custom-file-input selectImg"
                                                       id="inputGroupFile01"/>
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose
                                                    file</label>
                                            </div>
                                        </div>

                                        {/*    SUPPier*/}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text"
                                                       htmlFor="inputGroupSelect01">Nha cung cap</label>
                                            </div>
                                            <select className="custom-select selectSupplier" id="inputGroupSelect01"
                                                    ref={supplier}>
                                                {listSupplier}
                                            </select>
                                        </div>
                                        {/*        */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary"
                                                data-dismiss="modal">Dong
                                        </button>
                                        <button onClick={clickAddNewProduct} className="btn btn-outline-info">Them san
                                            pham
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div>

    );
};

export default ProductTable;