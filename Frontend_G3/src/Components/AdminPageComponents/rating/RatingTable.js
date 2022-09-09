import React, {useEffect, useState} from 'react';
import {Rating} from "@mui/material";
import axios from "axios";

const RatingTable = () => {
    const [rating, setRating] = useState([])

    useEffect(() => {
        let url = "http://localhost:8080/api/v1/rating";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRating(data);
            });
    }, []);

    const clickCheckStatusRating = async (id) => {
        // console.log(id)
        try {
            const data = await axios.put("http://localhost:8080/api/admin/user-rating/" + id)

            alert('cap nhat tinh trang danh gia thanh cong')
            // console.log(data.data)

            let newRating = rating.map(s => {
                if (s.id === id) {
                    return {...s, checking: data.data.checking}
                }
                return s;
            })

            setRating(newRating)

        } catch (e) {
            alert('cap nhat tinh trang danh gia khong thanh cong')
            console.log(e)
        }

    }

    let list = []
    if (rating != null) {
        rating.map((value) => {
                list.push(
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.createAt}</td>
                        <td>{value.note}</td>
                        <td>
                            <Rating name="read-only" value={value.star} readOnly/>
                        </td>
                        {/**/}
                        <td>{value.user.name}</td>
                        <td>{value.user.phone}</td>
                        <td>{value.user.address}</td>
                        {/**/}
                        <td>
                            {value.product.name}
                        </td>
                        <td>
                            {value.checking ? <button type="button" onClick={() => clickCheckStatusRating(value.id)}
                                                      className="btn btn-outline-light">✔️</button> :
                                <button onClick={() => clickCheckStatusRating(value.id)} type="button"
                                        className="btn btn-outline-light">❌</button>}
                        </td>

                    </tr>
                )
            }
        )
    }
    return (
        <div style={{flex: "1 1"}} className="m-5">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Ngày đánh giá</th>
                    <th>ghi chú</th>
                    <th>Đánh giá</th>
                    <th colSpan="3">Thông tin khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>xác nhận</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div>
    );
};

export default RatingTable;