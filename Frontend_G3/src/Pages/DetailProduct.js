import React, { useState, useEffect } from 'react';
import Categories from './HomeComponents/Categories';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useParams } from 'react-router-dom';

import ProductService from '../services/ProductService';
import ReactStars from 'react-stars';

const DetailProduct = () => {
    const params = useParams('');
    const [product, setProduct] = useState([]);
    const [avgStarProduct, setAvgStarProduct] = useState(0);
    const [countReviewProduct, setCountReviewProduct] = useState(0);



    async function fetchData() {
        let res = await ProductService.getProduct(params.name, '', '', '', '')
        let data = res.data;
        setProduct(data)
        console.log('>> check data', data);
    }


    useEffect(() => {
        fetchData()

    }, [])

    console.log('>> check product : ', product, 'name : ', params.name);
    useEffect(() => {
        let avg_product = 'http://localhost:8080/api/v1/rating/avg/' + params.name;
        fetch(avg_product)
            .then((response) => response.json())
            .then((data) => {
                setAvgStarProduct(data)
            })
    }, []);


    useEffect(() => {
        let count_review_product = 'http://localhost:8080/api/v1/rating/count/' + params.name;
        fetch(count_review_product)
            .then((response) => response.json())
            .then((data) => {
                setCountReviewProduct(data)
            })
    });


    if (product[0]) console.log('>> check name : ', product[0].name)
    return (
        <div >
            {/* Product Details Section Begin */}
            <section className="product-details spad">
                <div className="container">

                    {product[0] ?

                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__pic">
                                    <div className="product__details__pic__item">
                                        {/* <img className="product__details__pic__item--large" src={require(`../img/product/details/product-details-1.jpg`)} alt="" /> */}
                                        <Carousel variant="dark">
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    // src={require(`../img/product/details/product-details-1.jpg`)}
                                                    src={product[0].image}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>

                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={require(`../img/product/details/product-details-2.jpg`)}
                                                    alt="Second slide"
                                                />
                                                <Carousel.Caption>

                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={require(`../img/product/details/product-details-3.jpg`)}
                                                    alt="Third slide"
                                                />
                                                <Carousel.Caption>

                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>{product[0].name}</h3>
                                    <div className="product__details__rating">
                                        <ReactStars
                                            count={5}
                                            size={40}
                                            value={avgStarProduct}
                                            edit={false}

                                            activeColor="#ffd700"
                                        />
                                        <span>({countReviewProduct} reviews)</span>
                                    </div>
                                    <div className="product__details__price">{product[0].price} </div>
                                    <p>Bí xanh (bí đao) L1 WinEco là loại thực phẩm quen thuộc và phổ biến với người Việt Nam.  Bí xanh có thể chế biến thành nhiều món ăn khác nhau như bí luộc, canh bí hầm xương</p>
                                    {/* data not ok */}
                                    <div className="input-group col-md-6 d-flex mb-3">
                                        <span className="input-group-btn mr-2">
                                            <button type="button" className="fa-solid fa-chevron-left" data-type="minus" data-field>
                                                <i className="ion-ios-remove" />
                                            </button>
                                        </span>
                                        <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
                                        <span className="input-group-btn ml-2">
                                            <button type="button" className="fa-solid fa-angle-right" data-type="plus" data-field>
                                                <i className="ion-ios-add" />
                                            </button>
                                        </span>
                                    </div>

                                    <a href="/" className="primary-btn">ADD TO CARD</a>

                                    <ul>
                                        <li><b>Availability</b> <span>In Stock</span></li>
                                        <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                        <li><b>Weight</b> <span>0.5 kg</span></li>
                                        <li><b>Share on</b>
                                            <div className="share">
                                                <Link to="/"><i className="fa-brands fa-facebook"></i></Link>
                                                <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                                                <Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                <Link to="/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="product__details__tab">
                                    <Tabs defaultActiveKey="second">
                                        <Tab eventKey="first" title="Mô tả">
                                            <h6>{product[0].name}</h6>
                                            <p>{product[0].description}</p>

                                        </Tab>
                                        <Tab eventKey="second" title="Setting">
                                            <h6>Products A</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                                suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                                accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                                elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                                et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                                vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                                sed sit amet dui. Proin eget tortor risus.</p>
                                        </Tab>
                                        <Tab eventKey="third" title="Aboutus">
                                            <h6>Products B</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                                suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                                accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                                elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                                et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                                vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                                sed sit amet dui. Proin eget tortor risus.</p>
                                        </Tab>
                                    </Tabs>

                                </div>
                            </div>
                        </div>
                        : 'loading'
                    }

                </div>
            </section>
            {/* Product Details Section End */}

            {/* top product */}

            <Categories />

            {/* end top product */}

            <div>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
                <div className="container">
                    <div className="be-comment-block">
                        <h1 className="comments-title">Comments ({countReviewProduct})</h1>
                        <div className="be-comment">
                            <div className="be-img-comment">
                                <a href="blog-detail-2.html">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="be-ava-comment" />
                                </a>
                            </div>
                            <div className="be-comment-content">
                                <span className="be-comment-name">
                                    <a href="blog-detail-2.html">Ravi Sah</a>
                                </span>
                                <span className="be-comment-time">
                                    <i className="fa fa-clock-o" />
                                    May 27, 2015 at 3:14am
                                </span>
                                <p className="be-comment-text">
                                    Pellentesque gravida tristique ultrices.
                                    Sed blandit varius mauris, vel volutpat urna hendrerit id.
                                    Curabitur rutrum dolor gravida turpis tristique efficitur.
                                </p>
                            </div>
                        </div>
                        <div className="be-comment">
                            <div className="be-img-comment">
                                <a href="blog-detail-2.html">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="be-ava-comment" />
                                </a>
                            </div>
                            <div className="be-comment-content">
                                <span className="be-comment-name">
                                    <a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
                                </span>
                                <span className="be-comment-time">
                                    <i className="fa fa-clock-o" />
                                    May 27, 2015 at 3:14am
                                </span>
                                <p className="be-comment-text">
                                    Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
                                </p>
                            </div>
                        </div>
                        <div className="be-comment">
                            <div className="be-img-comment">
                                <a href="blog-detail-2.html">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="be-ava-comment" />
                                </a>
                            </div>
                            {/*  comment,time */}
                            <div className="be-comment-content">
                                <span className="be-comment-name">
                                    <a href="blog-detail-2.html">Cüneyt ŞEN</a>
                                </span>
                                <span className="be-comment-time">
                                    <i className="fa fa-clock-o" />
                                    May 27, 2015 at 3:14am
                                </span>
                                <p className="be-comment-text">
                                    Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
                                </p>
                            </div>
                            {/* end  comment */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;