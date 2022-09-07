import React, {useEffect, useState} from 'react';
import {Rating} from "@mui/material";

const RatingTable = () => {
    const [rating,setRating] = useState([])

    useEffect(() => {
        let url = "http://localhost:8080/api/v1/rating";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRating(data);
            });
    }, []);

    let list = []
    if(rating != null){
      rating.map((value) =>{
         list.push(
             <tr key={value.id}>
                 <td>{value.id}</td>
                 <td>{value.createAt}</td>
                 <td>{value.note}</td>
                 <td>
                     <Rating name="read-only" value={value.star} readOnly />
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
                     {value.checking ? "✔️" : "❌"}
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
                        <th colSpan="3">tên khách , Địa chỉ, sđt</th>
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