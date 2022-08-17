import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Stepper, Step } from 'react-form-stepper';
const ProfileCustomer = () => {
    return (
        <div className="ProfileCustomer">
            <main>
                <header>
                    <div className="header-wrap">
                        <div className="profile-pic">
                            <img src={require(`../img/profile-logo.jpg`)} alt="profile-logo" />
                        </div>
                        <div className="profile-info">
                            <div className="title row">
                                <h2>Maou</h2>

                            </div>
                            <div className="desktop-only">
                                <div className="details row">
                                    <ul>
                                        <li><button type="button" class="btn btn-light btn-rounded">Thành viên bạc</button></li>
                                        <li ><span className="align-middle">Người theo dõi 0</span> </li>
                                        <li><span className="align-middle">Đang theo dõi 0</span> </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </header>
                <div>
                    <Tabs defaultActiveKey="second" className="col-md-12">
                        <Tab eventKey="first" title="Tài khoản">
                            <section >
                                <div className="container py-5">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="card mb-4">
                                                <div className="card-body text-center">
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                                    <h5 className="my-3">John Smith</h5>
                                                    <p className="text-muted mb-1">Full Stack Developer</p>
                                                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                                    <div className="d-flex justify-content-center mb-2">
                                                        <button type="button" className="btn btn-primary">Follow</button>
                                                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card mb-4">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0">Full Name</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input className="text-muted mb-0 form-control" type="text" placeholder="Maou" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0">Email</p>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input className="text-muted mb-0 form-control" type="email" placeholder="example@example.com" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0">Phone</p>

                                                        </div>
                                                        <div className="col-sm-9">

                                                            <input className="mb-0 form-control" type="email" placeholder="(097) 234-5678" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0">Mobile</p>

                                                        </div>
                                                        <div className="col-sm-9">

                                                            <input className="text-muted mb-0 form-control" type="email" placeholder="(098) 765-4321" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <p className="mb-0">Address</p>
                                                        </div>
                                                        <div className="col-sm-9">

                                                            <input className="text-muted mb-0 form-control" type="email" placeholder="Bay Area, San Francisco, CA" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="text-right" ><button type="button" class="btn btn-primary ">Save</button></div>
                                        </div>
                                    </div>
                                </div>

                            </section>


                        </Tab>
                        <Tab eventKey="second" title="Đơn mua">
                            <div><br /></div>
                            <div><h2>Thông tin đơn hàng</h2></div>
                            <br />
                            <div className="card shadow-0 border mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" alt="Phone" />
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0">Samsung Galaxy</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">White</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Capacity: 64GB</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Qty: 1</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">$499</p>
                                        </div>
                                    </div>
                                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                    <div className="row d-flex align-items-center">
                                        <Stepper activeStep={0}>
                                            <Step label="Chờ xác nhận" />
                                            <Step label="Chờ lấy hàng" />
                                            <Step label="Đang giao" />
                                            <Step label="Đã giao" />
                                        </Stepper>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-0 border mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" alt="Phone" />
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0">Samsung Galaxy</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">White</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Capacity: 64GB</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Qty: 1</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">$499</p>
                                        </div>
                                    </div>
                                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                    <div className="row d-flex align-items-center">
                                        <Stepper activeStep={0}>
                                            <Step label="Chờ xác nhận" />
                                            <Step label="Chờ lấy hàng" />
                                            <Step label="Đang giao" />
                                            <Step label="Đã giao" />
                                        </Stepper>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-0 border mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" alt="Phone" />
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0">Samsung Galaxy</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">White</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Capacity: 64GB</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Qty: 1</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">$499</p>
                                        </div>
                                    </div>
                                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                    <div className="row d-flex align-items-center">
                                        <Stepper activeStep={0}>
                                            <Step label="Chờ xác nhận" />
                                            <Step label="Chờ lấy hàng" />
                                            <Step label="Đang giao" />
                                            <Step label="Đã giao" />
                                        </Stepper>
                                    </div>
                                </div>
                            </div>


                        </Tab>

                    </Tabs>
                </div>
            </main >
        </div >
    );
};

export default ProfileCustomer;