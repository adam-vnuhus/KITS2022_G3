import React from 'react';
import Slider from "react-slick";
import './Categories.css';

const Categories = () => {
    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true
    };
    return (
        <div class="Categories-top">
            <h4>Top Product</h4>
            <Slider {...settings} >

                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>
                <div className="img-topranker"> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                    <h4>Crab Pool Security</h4>
                </div>




            </Slider>


        </div>
    );
};

export default Categories;