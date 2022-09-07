import st from './dashboard.module.css'
import {useEffect, useRef, useState} from "react";
import barChart from '../../img/barChart.jpg'
import {Avatar} from "@mui/material";

export default function Dashboard(){
    const[purchases,setPurchases] = useState([])
    const [month,setmonth] = useState(1)

    useEffect(() => {
        // console.log(month)

        let url = "http://localhost:8080/api/admin/purchases/"+month;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPurchases(data);
            });


    }, [month]);

    const list = []

    if(purchases!= null){
            list.push(
                <div className="row mt-5">
                    <div className="col-xl-4 col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Khách hàng
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{purchases.quantityUser}</div>
                                    </div>
                                    <div className="col-auto">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Đơn thành công
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{purchases.purchases}</div>
                                    </div>
                                    <div className="col-auto">
                                        {/*<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                            Đơn hủy
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{purchases.cancel}</div>
                                    </div>
                                    <div className="col-auto">
                                        {/*<i className="fas fa-comments fa-2x text-gray-300"></i>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }


    const getPurchases = (monthValue) => {
        setmonth(monthValue);
    }


    return <div style={{flex: "1 1"}} className="col m-5 container text-center">
        {list}

        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <Avatar  onClick={()=>getPurchases(1)} sx={{ background: "#0dcaf0" }}>1</Avatar>
            <Avatar  onClick={()=>getPurchases(2)} sx={{ background: "#0dcaf0" }}>2</Avatar>
            <Avatar  onClick={()=>getPurchases(3)} sx={{ background: "#0dcaf0" }}>3</Avatar>
            <Avatar  onClick={()=>getPurchases(4)} sx={{ background: "#0dcaf0" }}>4</Avatar>
            <Avatar  onClick={()=>getPurchases(5)} sx={{ background: "#0dcaf0" }}>5</Avatar>
            <Avatar  onClick={()=>getPurchases(6)} sx={{ background: "#0dcaf0" }}>6</Avatar>
            <Avatar  onClick={()=>getPurchases(7)} sx={{ background: "#0dcaf0" }}>7</Avatar>
            <Avatar  onClick={()=>getPurchases(8)} sx={{ background: "#0dcaf0" }}>8</Avatar>
            <Avatar  onClick={()=>getPurchases(9)} sx={{ background: "#0dcaf0" }}>9</Avatar>
            <Avatar  onClick={()=>getPurchases(10)} sx={{ background: "#0dcaf0" }}>10</Avatar>
            <Avatar  onClick={()=>getPurchases(11)} sx={{ background: "#0dcaf0" }}>11</Avatar>
            <Avatar  onClick={()=>getPurchases(12)} sx={{ background: "#0dcaf0" }}>12</Avatar>
        </div>

        {/*bar chart*/}
       {/*<BarChart/>*/}

        <img src={barChart}  alt="Top 6 sản phẩm bán chạy nhất"/>

    </div>
}