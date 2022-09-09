import React, {useEffect, useState} from 'react';
import ReactStars from "react-stars";


const RatingProduct = (idProp) => {
    // console.log(idProp)
    const {id} = idProp
    // console.log(id)

    const [products,setProducts] = useState([])

    useEffect(() => {
        let url = "http://localhost:8080/api/v1/rating/product/" + id;
        // console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                console.log(data)

            });
    }, []);

    const list = [];
    if(products.length>0){
        products.map((value)=>{
            list.push(
                    <div className="be-comment">
                        <div className="be-img-comment">
                            <a href="blog-detail-2.html">
                                <img
                                    src={value.user.image}
                                    alt=""
                                    className="be-ava-comment"
                                />
                            </a>
                        </div>

                        <div className="row">
                      <span className="be-comment-name ms-2">
                        {value.user.name}
                          <ReactStars
                              count={5}
                              size={10}
                              value={value.star}
                              edit={false}
                              activeColor="#ffd700"
                          />
                      </span>

                            <span className="be-comment-time float-end">
                        <i className="fa fa-clock-o" />
                                {value.createAt}
                      </span>

                            <p className="be-comment-text col-12">{value.note}</p>
                        </div>
                    </div>
            )
        })
    }


    return (
        <div>
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <div className="container">
                <div className="be-comment-block">
                    <h1 className="comments-title">
                        Đánh giá ({products.length})
                    </h1>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default RatingProduct;