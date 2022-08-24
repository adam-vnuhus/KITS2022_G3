import React from 'react';
import Categories from './HomeComponents/Categories';
import { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { Link } from "react-router-dom";

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        ProductService.getProduct('', '', '', '', '')
            .then(response => response.data)
            .then((data) => {
                if (data.length > 0) {
                    setProduct(data)
                }
            });

    }, [])
    // console.log('>>> check dataProduct : ', product);
    return (
        <>



            {/* Featured Section Begin */}

            <section className="">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Featured Products</span>
                            <h2 className="mb-4">Our Products</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        {product && product.length > 0 ?
                            product.slice(0, 12).map((item, index) => {
                                return (
                                    <div key={index + 1} className="col-md-6 col-lg-3 ">
                                        <div className="product">
                                            <a href="/" className="img-prod"><img className="img-fluid" /*src={require(`../img/product-1.jpg`)}*/ src={item.image} alt="Colorlib Template" />

                                                <div className="overlay" />
                                            </a>
                                            <div className="text py-3 pb-4 px-3 text-center">
                                                <h3><a href="/">{item.name}</a></h3>
                                                <div className="d-flex">
                                                    <div className="pricing">
                                                        <p className="price"><span className="mr-2 price-dc">{(item.sellPrice + (item.sellPrice * 0.3)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                                            <span className="price-sale">{item.sellPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></p>
                                                    </div>
                                                </div>
                                                <div className="bottom-area d-flex px-3">
                                                    <div className="m-auto d-flex">
                                                        <Link to={"/detail/" + item.name} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                            <span><i className="fa-solid fa-bars"></i></span>
                                                        </Link>
                                                        <Link to="/cart" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            : 'loading'
                        }

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

            <Categories />

            {/* end top categories */}



        </>
    )
};

export default Home;