import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DetailOrder = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chi tiết đơn hàng
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>



                    <div className="card" style={{ borderRadius: '10px' }}>
                        <div className="card-header px-4 py-5">
                            <h5 className="text-muted mb-0">Thanks for your Order, <span style={{ color: '#a8729a' }}>Anna</span>!</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="lead fw-normal mb-0" style={{ color: '#a8729a' }}>Receipt</p>
                                <p className="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>
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

                                </div>
                            </div>
                            <div className="card shadow-0 border mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp" className="img-fluid" alt="Phone" />
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0">iPad</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Pink rose</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Capacity: 32GB</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">Qty: 1</p>
                                        </div>
                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p className="text-muted mb-0 small">$399</p>
                                        </div>
                                    </div>
                                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />

                                </div>
                            </div>
                            <div className="d-flex justify-content-between pt-2">
                                <p className="fw-bold mb-0">Order Details</p>
                                <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> $898.00</p>
                            </div>
                            <div className="d-flex justify-content-between pt-2">
                                <p className="text-muted mb-0">Invoice Number : 788152</p>
                                <p className="text-muted mb-0"><span className="fw-bold me-4">Discount</span> $19.00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
                                <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span> 123</p>
                            </div>
                            <div className="d-flex justify-content-between mb-5">
                                <p className="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
                                <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
                            </div>
                        </div>
                        <div className="card-footer border-0 px-4 py-5" style={{ backgroundColor: '#a8729a', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                            <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                paid: <span className="h2 mb-0 ms-2">$1040</span></h5>
                        </div>
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default DetailOrder;