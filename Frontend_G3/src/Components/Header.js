import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            {/* Header Section Begin */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
                                        <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                                        <Link to="/"><i class="fa-brands fa-linkedin-in"></i></Link>
                                        <Link to="/"><i class="fa-brands fa-pinterest-p"></i></Link>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src={require(`../img/language.png`)} alt="" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down" />
                                        <ul>
                                            <li><Link to="/">Việt Nam</Link></li>
                                            <li><Link to="/">English</Link></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <Link to="/"><i className="fa fa-user" /> Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link to="/"><img src={require(`../img/logo.png`)} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="./index.html">Home</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li><Link to="/">Pages</Link>
                                        <ul className="header__menu__dropdown">
                                            <li><Link to="/">Shop Details</Link></li>
                                            <li><Link to="/">Shoping Cart</Link></li>
                                            <li><Link to="/">Check Out</Link></li>
                                            <li><Link to="/">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><Link to="/"><i className="fa fa-heart" /> <span>1</span></Link></li>
                                    <li><Link to="/"><i className="fa fa-shopping-bag" /> <span>3</span></Link></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
            {/* Header Section End */}
            {/* Hero Section Begin */}
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars" />
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><Link to="/">Fresh Meat</Link></li>
                                    <li><Link to="/">Vegetables</Link></li>
                                    <li><Link to="/">Fruit &amp; Nut Gifts</Link></li>
                                    <li><Link to="/">Fresh Berries</Link></li>
                                    <li><Link to="/">Ocean Foods</Link></li>
                                    <li><Link to="/">Butter &amp; Eggs</Link></li>
                                    <li><Link to="/">Fastfood</Link></li>
                                    <li><Link to="/">Fresh Onion</Link></li>
                                    <li><Link to="/">Papayaya &amp; Crisps</Link></li>
                                    <li><Link to="/">Oatmeal</Link></li>
                                    <li><Link to="/">Fresh Bananas</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="/">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down" />
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            {/* banner */}
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={require(`../img/hero/banner.jpg`)} alt="First slide" />
                                        <div id="banner-hero" className="carousel-caption d-none d-md-block">
                                            <span>FRUIT FRESH</span>
                                            <h2>Vegetable <br />100% Organic</h2>
                                            <p>Free Pickup and Delivery Available</p>
                                            <Link to="/" className="primary-btn">SHOP NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                  <div class="hero__text">
                      <span>FRUIT FRESH</span>
                      <h2>Vegetable <br />100% Organic</h2>
                      <p>Free Pickup and Delivery Available</p>
                      <Link to="/" class="primary-btn">SHOP NOW</Link>
                  </div>
              </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

        </>
    );
};

export default Header;