import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Footer Section Begin */}
            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <a href="./index.html"><img src="../img/profile-logo.jpg" alt="" /></a>
                                </div>
                                <ul>
                                    <li>Địa chỉ: PeakView Tower, Phố Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội, Việt Nam</li>
                                    <li>Điện thoại: +65 11.188.888</li>
                                    <li>Email: G3Mart@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Liên hệ với G3Mart</h6>
                                <ul>
                                    <li><a href="/">Thông tin chung</a></li>
                                    <li><a href="/">tổng quan sản phẩm</a></li>
                                    <li><a href="/">Mua sắm an toàn</a></li>
                                    <li><a href="/">Giao hàng tận nơi</a></li>
                                    <li><a href="/">Chính sách bảo mật</a></li>
                                    <li><a href="/">Các chi nhánh</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/">Giới thiệu G3Mart</a></li>
                                    <li><a href="/">Dịch vụ </a></li>
                                    <li><a href="/">Dự án</a></li>
                                    <li><a href="/">Liên hệ </a></li>
                                    <li><a href="/">Sản phẩm mới</a></li>
                                    <li><a href="/">Chính sách đổi trả</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Đăng kí thành viên với G3Mart</h6>
                                <p>Nhận thông tin cập nhật qua E-mail về cửa hàng mới nhất của chúng tôi và các ưu đãi đặc biệt.</p>
                                <form action="/">
                                    <input type="text" placeholder="Nhập email của bạn tại đây" />
                                    <button type="submit" className="site-btn">Gửi</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fa-brands fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}

        </>
    );
};

export default Footer;