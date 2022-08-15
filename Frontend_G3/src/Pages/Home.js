import React from 'react';

const Home = () => {
    return (
        <>

            <div >categories component</div>

            {/* Featured Section Begin */}
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".oranges">Oranges</li>
                                    <li data-filter=".fresh-meat">Fresh Meat</li>
                                    <li data-filter=".vegetables">Vegetables</li>
                                    <li data-filter=".fastfood">Fastfood</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-1.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-2.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-3.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-4.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-4.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-5.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-6.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-7.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                                    <img className="categories__item set-bg" src={require(`../img/featured/feature-8.jpg`)} alt="" srcSet />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="/"><i className="fa fa-heart" /></a></li>
                                        <li><a href="/"><i className="fa fa-retweet" /></a></li>
                                        <li><a href="/"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="/">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Section End */}

            {/* Banner Begin */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src={require(`../img/banner/banner-1.jpg`)} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src={require(`../img/banner/banner-2.jpg`)} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}
            {/* top categories */}
            <section className="latest-product spad">
                <div className="container">
                    <div className="row">
                        {/* Latest Products */}
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1080px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '2160px' }}><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="" />
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item active" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span className="fa fa-angle-left"><span /></span></button><button type="button" role="presentation" className="owl-next"><span className="fa fa-angle-right"><span /></span></button></div><div className="owl-dots disabled" /></div>
                            </div>
                        </div>
                        {/* Latest Products */}
                        {/* top rated products */}
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Top Rated Products</h4>
                                <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1080px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '2160px' }}>
                                        <div className="owl-item cloned" style={{ width: '360px' }}>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="owl-item" style={{ width: '360px' }}>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: '360px' }}>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="owl-item cloned" style={{ width: '360px' }}>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span className="fa fa-angle-left"><span /></span></button><button type="button" role="presentation" className="owl-next"><span className="fa fa-angle-right"><span /></span></button></div><div className="owl-dots disabled" /></div>
                            </div>
                        </div>
                        {/* end rated products */}
                        {/* Review Products */}
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Review Products</h4>
                                <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1080px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '2160px' }}><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item active" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div className="owl-item cloned" style={{ width: '360px' }}><div className="latest-prdouct__slider__item">
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-1.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-2.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="/" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={require(`../img/latest-product/lp-3.jpg`)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span className="fa fa-angle-left"><span /></span></button><button type="button" role="presentation" className="owl-next"><span className="fa fa-angle-right"><span /></span></button></div><div className="owl-dots disabled" /></div>
                            </div>
                        </div>
                        {/* end Review Products */}
                    </div>
                </div>
            </section>
            {/* end top categories */}




        </>
    );
};

export default Home;