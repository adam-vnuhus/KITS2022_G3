import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import OrderHistory from "./OrderHistory";
import RatingHistory from "./RatingHistory";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


//BASIC TAB
export default function BasicTabs({data}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tài Khoản" {...a11yProps(0)} />
                    <Tab label="Lịch sử mua hàng " {...a11yProps(1)} />
                    <Tab label="Lịch sử đánh giá" {...a11yProps(2)} />
                </Tabs>
            </Box>
            {/*tai khoan*/}
            <TabPanel value={value} index={0}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src={data.image} alt="avatar" className="rounded-circle img-fluid"
                                             style={{width: '150px'}}/>
                                        <h5 className="my-3">{data.name}</h5>
                                        <div className="d-flex justify-content-center mb-2">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Họ tên</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className="text-muted mb-0 form-control" type="text"
                                                       placeholder={data.name}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className="text-muted mb-0 form-control" type="email"
                                                       placeholder={data.email}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Số điện thoại</p>

                                            </div>
                                            <div className="col-sm-9">

                                                <input className="mb-0 form-control" type="email"
                                                       placeholder={data.phone}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Địa chỉ</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className="text-muted mb-0 form-control" type="email"
                                                       placeholder={data.address}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-right">
                                    <button type="button" class="btn btn-primary ">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </TabPanel>

            {/*don mua*/}
            <TabPanel value={value} index={1}>
                <OrderHistory/>
            </TabPanel>

            {/*lich su danh gia*/}
            <TabPanel value={value} index={2}>
                <RatingHistory/>
            </TabPanel>
        </Box>
    );
}
