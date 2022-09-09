import React, {useEffect, useState} from 'react';
import {Avatar, Rating} from "@mui/material";

const SupplierTable = () => {
    const [supplier,setSupplier] = useState([])

    useEffect(() => {
        let url = "http://localhost:8080/api/v1/supplier";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSupplier(data);
            });
    }, []);

    let list = []
    if(supplier != null){
        supplier.map((value,index) =>{
                list.push(
                    <tr key={value.id}>
                        <td>{index}</td>
                        <td>{value.name}</td>
                        <td>
                            <button type="button" className="btn btn-outline-danger me-3 ">Xóa</button>
                            <button type="button" className="btn btn-outline-warning">Sửa</button>
                        </td>
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
                    <th>stt</th>
                    <th>Tên nhà cung cấp </th>
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

export default SupplierTable;