import React from 'react';

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
                                        <a href="/"><i class="fa-brands fa-facebook"></i></a>
                                        <a href="/"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="/"><i class="fa-brands fa-pinterest-p"></i></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src={require(`../img/language.png`)} alt="" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down" />
                                        <ul>
                                            <li><a href="/">Việt Nam</a></li>
                                            <li><a href="/">English</a></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <a href="/"><i className="fa fa-user" /> Login</a>
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
                                <a href="/"><img src={require(`../img/logo.png`)} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="/">Shop</a></li>
                                    <li><a href="/">Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li><a href="/">Shop Details</a></li>
                                            <li><a href="/">Shoping Cart</a></li>
                                            <li><a href="/">Check Out</a></li>
                                            <li><a href="/">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="/"><i className="fa fa-heart" /> <span>1</span></a></li>
                                    <li><a href="/"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
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
                                    <li><a href="/">Fresh Meat</a></li>
                                    <li><a href="/">Vegetables</a></li>
                                    <li><a href="/">Fruit &amp; Nut Gifts</a></li>
                                    <li><a href="/">Fresh Berries</a></li>
                                    <li><a href="/">Ocean Foods</a></li>
                                    <li><a href="/">Butter &amp; Eggs</a></li>
                                    <li><a href="/">Fastfood</a></li>
                                    <li><a href="/">Fresh Onion</a></li>
                                    <li><a href="/">Papayaya &amp; Crisps</a></li>
                                    <li><a href="/">Oatmeal</a></li>
                                    <li><a href="/">Fresh Bananas</a></li>
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
                                            <a href="/" className="primary-btn">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                  <div class="hero__text">
                      <span>FRUIT FRESH</span>
                      <h2>Vegetable <br />100% Organic</h2>
                      <p>Free Pickup and Delivery Available</p>
                      <a href="/" class="primary-btn">SHOP NOW</a>
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