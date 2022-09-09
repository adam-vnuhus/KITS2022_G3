import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const PutProduct = () => {
    const params = useParams();

    const [product, setProduct] = useState(null);
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [file, setFile] = useState(null);

    const navigate = useNavigate()


    // Lấy thông tin sản phẩm
    useEffect(() => {
        const getProduct = async () => {
            try {
                let url = "http://localhost:8080/api/v1/products/" + params.id;
                let res = await axios.get(url);
                setProduct(res.data);
            } catch (e) {
                console.log(e);
            }
        }

        getProduct()
    }, []);

    // Lấy ds category
    useEffect(() => {
        const getCategories = async () => {
            try {
                let url = "http://localhost:8080/api/v1/categories";
                let res = await axios.get(url);
                setCategories(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        getCategories();
    }, [])

    // Lấy ds nhà cung cấp
    useEffect(() => {
        const getSuppliers = async () => {
            try {
                let url = "http://localhost:8080/api/v1/supplier";
                let res = await axios.get(url);
                setSuppliers(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        getSuppliers();
    }, [])

    // Xủ lý khi thay đổi danh mục
    const onChangeCategory = (e) => {
        // Lấy id của danh mục được chon
        let categoryId = e.target.value;

        // Lấy thông tin của danh mục được chọn
        let categoryInfo = categories.find(c => c.id === Number(categoryId));

        // Cập nhật state product dựa chọn danh mục được chon
        let newProduct = {...product, category: {...categoryInfo}};
        setProduct(newProduct);
    }

    // Xử lý khi thay đổi nhà cyng cấp
    // Tương tự như categorycategory
    const onChangeSupplier = (e) => {
        let supplierId = e.target.value;
        let supplierInfo = suppliers.find(c => c.id === Number(supplierId));

        let newProduct = {...product, supplier: {...supplierInfo}};
        setProduct(newProduct);
    }

    // Xử lý khi upload file
    const handleUploadFile = async () => {
        try {
            // Tạo form data để upload file
            const formData = new FormData();
            formData.append("file", file);

            // Gọi API => trả về url image sau khi upload thành công
            let url = `http://localhost:8080/api/admin/product/${params.id}/upload-file`;
            let res = await axios.post(url, formData);

            // Cập nhật lại product trong state
            let link = "http://localhost:8080" + res.data;
            setProduct({...product, image: link})
        } catch (e) {
            console.log(e)
        }
    }


    const handleUpdateProduct = async (id) => {
        console.log(id,product.category.id,product.supplier.id)

        try {
            const res = await axios.put("http://localhost:8080/api/admin/product/"+id,{
                name : product.name,
                quantity : product.quantity,
                buyPrice : product.buyPrice,
                price:product.price,
                origin:product.origin,
                categoryId:product.category.id,
                supplierId:product.supplier.id
            })

            alert('sua thanh cong')
                navigate("/admin/products")

        }catch (e) {
            alert('sua khong thanh cong')
        }
    }

    return (
        <div style={{flex: "1 1"}} className="m-5">
            {/* SUA */}

            <h5 className="modal-title" id="exampleModalLongTitle">Thông tin sản phẩm </h5>
            {product && <div className="m-5">
                {/*name*/}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
                    </div>
                    <input type="text" className="form-control" placeholder="ten san pham"
                           value={product.name}
                           onChange={(e) => setProduct({...product, name: e.target.value})}
                           aria-label="ten san pham" aria-describedby="basic-addon1"/>
                </div>

                {/* const quantityNew */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Số lượng</span>
                    </div>
                    <input type="number" className="form-control" placeholder="ten san pham"
                           value={product.quantity}
                           onChange={(e) => setProduct({...product, quantity: Number(e.target.value)})}
                           aria-label="ten san pham" aria-describedby="basic-addon1"/>
                </div>

                {/*     const buyPrice */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Giá nhập</span>
                    </div>
                    <input type="number" className="form-control" placeholder="ten san pham"
                           value={product.buyPrice}
                           onChange={(e) => setProduct({...product, buyPrice: Number(e.target.value)})}
                           aria-label="ten san pham" aria-describedby="basic-addon1"/>
                </div>

                {/*   price */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Giá bán</span>
                    </div>
                    <input type="number" className="form-control" placeholder="ten san pham"
                           value={product.price}
                           onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
                           aria-label="ten san pham" aria-describedby="basic-addon1"/>
                </div>

                {/*  const origin   */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Xuất sứ</span>
                    </div>
                    <input type="text" className="form-control" placeholder="ten san pham"
                           value={product.origin}
                           onChange={(e) => setProduct({...product, origin: e.target.value})}
                           aria-label="ten san pham" aria-describedby="basic-addon1"/>
                </div>

                {/*  description */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Mô tả </span>
                    </div>
                    <textarea className="form-control" rows="10" aria-label="With textarea"
                              value={product.description}
                              onChange={(e) => setProduct({...product, description: e.target.value})}
                    ></textarea>
                </div>

                {/*    Category*/}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text"
                               htmlFor="inputGroupSelect01">Thể loại</label>
                    </div>
                    <select className="custom-select selectCategory" id="inputGroupSelect01" value={product.category.id}
                            onChange={(e) => onChangeCategory(e)}>
                        {categories.length > 0 && categories.map(c => <option key={c.id}
                                                                              value={c.id}>{c.name}</option>)}
                    </select>
                </div>

                {/*    IMAGE*/}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Ảnh sản phẩm </span>
                    </div>
                    <div style={{height: "200px", width: "200px"}}>
                        <img style={{height: "100%", width: " 100%", objectFit: "cover"}} src={product.image}
                             className="img-thumbnail" alt={product.name}/>
                    </div>
                </div>

                <div className="mb-3">
                    <input type="file" placeholder="chon hinh anh"
                           id="inputGroupFile01" onChange={(e) => setFile(e.target.files[0])}/>
                    <button className="btn btn-primary" onClick={handleUploadFile}>Thay đổi hình ảnh</button>
                </div>

                {/*    SUPPier*/}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text"
                               htmlFor="inputGroupSelect01">Nhà cung cấp</label>
                    </div>
                    <select className="custom-select selectSupplier" id="inputGroupSelect01" value={product.supplier.id}
                            onChange={(e) => onChangeSupplier(e)}>
                        {suppliers.length > 0 && suppliers.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                </div>
                {/*        */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary"
                            data-dismiss="modal">Đóng
                    </button>
                    <button onClick={() => handleUpdateProduct(product.id)} className="btn btn-outline-info">
                        Sửa Sản phẩm
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default PutProduct;