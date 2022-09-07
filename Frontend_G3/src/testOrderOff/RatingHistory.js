import React, {useEffect, useState} from 'react';
import {Avatar, Rating} from "@mui/material";
import {Link} from "react-router-dom";

const RatingHistory = () => {

    //lay ra data rating cua user
    const [rating,setRating] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/user/rating-user/"+localStorage.getItem('id');
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRating(data);
            });
    }, []);

    const list = [];
    if(rating.length>0){
       rating.map((value,index) => {
          list.push(
              <tr key={index}>
                  <td>{value.createAt}</td>
                  <td>
                      <Link
                          to={"/detail/" + value.product.name}
                         >
                      {value.product.name}
                      </Link>
                  </td>
                  <td>
                      <Rating name="read-only" value={value.star} readOnly />
                  </td>
                  <td>{value.note}</td>
              </tr>
          )
       })
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Create at</th>
                <th scope="col">Product</th>
                <th scope="col">Start</th>
                <th scope="col">Note</th>
            </tr>
            </thead>
            <tbody>
            {list}
            </tbody>
        </table>
    );
};

export default RatingHistory;