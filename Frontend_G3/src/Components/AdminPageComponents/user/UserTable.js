import React, {useEffect, useState} from 'react';
import {Avatar, Rating} from "@mui/material";

const UserTable = () => {
    const [rating,setRating] = useState([])

    useEffect(() => {
        let url = "http://localhost:8080/api/admin/user";
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
                        <td>
                            <Avatar alt="Remy Sharp" src={value.image} /></td>
                        <td>{value.ranking ? value.ranking.name : "chua co rank"}</td>
                        {/**/}
                        <td>{value.name}</td>
                        <td>{value.phone}</td>
                        <td>{value.address}</td>
                        {/**/}
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
                    <th>Anh</th>
                    <th>Rank</th>
                    <th colSpan="3">ten khach , so dien thoai, Dia chi</th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;