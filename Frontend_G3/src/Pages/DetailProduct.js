import React, { useState, useEffect } from "react";
import Categories from "./HomeComponents/Categories";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import ProductService from "../services/ProductService";
import ReactStars from "react-stars";
import axios from "axios";
import RatingProduct from "../Components/UserComponents/RatingProduct";

const DetailProduct = () => {
  const params = useParams("");
  const [product, setProduct] = useState([]);
  const [avgStarProduct, setAvgStarProduct] = useState(0);
  const [countReviewProduct, setCountReviewProduct] = useState(0);
  const [userRating, setUserRating] = useState([]);
  const [quantity, setQuantity] = useState(1);

  async function fetchData() {
    let res = await ProductService.getProduct(params.name, "", "", "", "");
    let data = res.data;
    setProduct(data);
  }
  const { addItem } = useCart();

  useEffect(() => {
    fetchData();
  }, []);

  // add cart
  const addItemByCart = async (productId) => {
    // console.log(productId)
    let res = await axios.post("http://localhost:8080/api/user/carts", {
      userId: localStorage.getItem("id"),
      quantity: 1,
      productId: productId,
    });
  };

  useEffect(() => {
    let avg_product = "http://localhost:8080/api/v1/rating/avg/" + params.name;
    fetch(avg_product)
      .then((response) => response.json())
      .then((data) => {
        setAvgStarProduct(data);
      });

    window.scrollTo({
      top: 15,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let count_review_product =
      "http://localhost:8080/api/v1/rating/count/" + params.name;
    fetch(count_review_product)
      .then((response) => response.json())
      .then((data) => {
        setCountReviewProduct(data);
      });

    window.scrollTo({
      top: 15,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    let user_rating =
      "http://localhost:8080/api/v1/rating/userrating/" + params.name;
    fetch(user_rating)
      .then((response) => response.json())
      .then((data) => {
        setUserRating(data);
      });

    window.scrollTo({
      top: 15,
      behavior: "smooth",
    });
  }, []);

  if (product[0])
    return (
      <>
        <div>
          {/* Product Details Section Begin */}
          <section className="product-details spad">
            <div className="container">
              {product[0] ? (
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
                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={require(`../img/profile-logo.jpg`)}
                              alt="Second slide"
                            />
                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={require(`../img/profile-logo.jpg`)}
                              alt="Third slide"
                            />
                            <Carousel.Caption></Carousel.Caption>
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
                          value={product[0].avgRating}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <span>({countReviewProduct} Đánh giá)</span>
                      </div>
                      <div className="product__details__price">
                        {product[0].price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                      </div>
                      <p>
                        {product[0].origin}
                      </p>
                      {/* data not ok */}
                      <div className="input-group col-md-6 d-flex mb-3">
                        {/*<span className="input-group-btn mr-2">*/}
                        {/*    <button type="button" className="fa-solid fa-chevron-left"*/}
                        {/*        data-type="minus"*/}
                        {/*        data-field*/}
                        {/*        onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}>*/}
                        {/*        <i className="ion-ios-remove" />*/}
                        {/*    </button>*/}
                        {/*</span>*/}
                        {/*<input type="text" id="quantity" name="quantity"*/}
                        {/*    className="form-control input-number col-md-5" defaultValue={1} value={quantity}*/}
                        {/*    onChange={(e) =>*/}
                        {/*        setQuantity(eval(e.target.value) < product[0].quantity && eval(e.target.value) > 1*/}
                        {/*            ? eval(e.target.value)*/}
                        {/*            : eval(e.target.value) > product[0].quantity*/}
                        {/*                ? product[0].quantity : 1)} />*/}
                        {/*<span className="input-group-btn ml-2">*/}
                        {/*    <button type="button" className="fa-solid fa-angle-right"*/}
                        {/*        data-type="plus"*/}
                        {/*        data-fiel*/}
                        {/*        onClick={() => setQuantity(quantity < product[0].quantity ? quantity + 1 : product[0].quantity)}>*/}
                        {/*        <i className="ion-ios-add" />*/}
                        {/*    </button>*/}
                        {/*</span>*/}
                      </div>
                      <button
                        id="button-add-new"
                        style={{
                          fontSize: "20px",
                          border: "1px solid blue",
                          borderRadius: "5px",
                          padding: "5px",
                        }}
                        onClick={() => addItemByCart(product[0].id)}
                      >
                        Thêm sản phẩm
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="product__details__tab">
                      <Tabs defaultActiveKey="second">
                        <Tab eventKey="first" title="Mô tả">
                          <h6>{product[0].name}</h6>
                          <p>{product[0].description}</p>
                        </Tab>
                        <Tab eventKey="second" title="Cách dùng">
                          <p>Dùng trực tiếp</p>
                          <p>....</p>
                        </Tab>
                        <Tab eventKey="third" title="cách bảo quản">
                          <p>Bảo quản nơi khô ráo thoáng mát</p>
                          <p>Tránh để dưới ánh nắng trực tiếp</p>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              ) : (
                "loading"
              )}
            </div>
          </section>
          {/* Product Details Section End */}

          {/* top product */}

          <Categories />

          {/* end top product */}
        </div>
        <RatingProduct id={product[0].id}/>
      </>
    );
};

export default DetailProduct;
