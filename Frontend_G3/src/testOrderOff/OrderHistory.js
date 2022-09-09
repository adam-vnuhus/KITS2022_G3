import React, {useEffect, useRef, useState} from 'react';
import {
    Avatar,
    Collapse,
    IconButton,
    Paper,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OrderHistory = () => {

    //danh sach don hang
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/user/order-history/" + localStorage.getItem('id');
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>ngày mua hàng</TableCell>
                        <TableCell>Tổng tiền</TableCell>
                        <TableCell>số lượng sản phẩm</TableCell>
                        <TableCell>Ghi chú</TableCell>
                        <TableCell>Trạng thái</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => {
                        return <Row key={order.id} order={order}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


const RatingModal = (id) => {
    //Danh gia don hang
    const [value, setValue] = React.useState(5);
    const note = useRef(null);

    const clickRatingBtn = async (id) => {
        // console.log(note.current.value,value,id)
        try {
            await axios.post("http://localhost:8080/api/user/rating-product", {
                userId: localStorage.getItem('id'),
                note: note.current.value,
                star: value,
                productId: id,
                image: null

            })

            alert('danh gia thanh cong')
            // setStyle('none')

        } catch (e) {
            alert('danh gia that bai')
            console.log(e)
        }
    }

    return (
        <React.Fragment>
            <Typography component="legend">Danh gia</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi Chu</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" ref={note} rows="3"></textarea>
            </div>
            <button onClick={() => clickRatingBtn(id)} type="button" className="btn btn-outline-info">✔️</button>

        </React.Fragment>
    )
}


const Row = props => {
    const [open, setOpen] = React.useState(false);
    const [style, setStyle] = React.useState('none');

    const {order} = props;

    const clichCanceOrder = async (id) => {
        try {
            await axios.put("http://localhost:8080/api/user/order-bill/"+id)
            alert('huy don thanh cong')
        }catch (e) {
            console.log(e)
            alert('huy don khong thanh cong')
        }
    }

    function clickBlock(){
        setStyle('block')
    }

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {order.createAt}
                </TableCell>
                <TableCell>{order.totalPrice}</TableCell>
                <TableCell>{order.orderDetails.length}</TableCell>
                <TableCell>{order.note}</TableCell>
                <TableCell>{order.status.name == "đã giao" ?

                    <button onClick={clickBlock} type="button" className="btn btn-outline-info">đã
                        giao</button>

                    : order.status.name == "chờ xác nhận" ?
                        (
                            <div >
                                <p> {order.status.name}</p>
                                <button type="button" onClick={() => clichCanceOrder(order.id)} className="btn btn-outline-danger">Hủy</button>
                            </div>
                        )
                        : order.status.name }  </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Thông tin đơn hàng
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Ảnh sản phẩm</TableCell>
                                        <TableCell>Tên sản phẩm</TableCell>
                                        <TableCell>Giá bán</TableCell>
                                        <TableCell>Số lượng</TableCell>
                                        <TableCell>Tổng tiền</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{background: "#a2b8e0"}}>
                                    {order.orderDetails.map((od, index) => (
                                        <TableRow key={index}>
                                            <TableCell><Avatar alt={od.product.name}
                                                               src={od.product.image}/></TableCell>
                                            <TableCell>{od.product.name}</TableCell>
                                            <TableCell>{od.product.price}</TableCell>
                                            <TableCell>{od.quantity}</TableCell>
                                            <TableCell>{od.total}</TableCell>
                                            <TableCell style={{display : style}}>  {RatingModal(od.product.id)}  </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default OrderHistory;