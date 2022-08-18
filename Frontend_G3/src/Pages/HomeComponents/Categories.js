import React from 'react';
import Slider from "react-slick";
import './Categories.css';
import { useEffect, useState } from 'react';
import CategoriesService from '../../services/CategoriesService';
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoriesService.getCategories()
            .then(response => response.data)
            .then((data) => {
                if (data.length > 0) {
                    setCategories(data)
                }
            });

    }, [])
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
    console.log('>>> check categories : ', categories)
    return (
        <div class="Categories-top">
            <h4>Top Product</h4>
            <Slider {...settings} >
                {categories != null ?
                    categories.map((item, index) => {
                        return (
                            <div className="img-topranker" style={{ overflow: "hidden" }}> <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 166 }} />
                                <h4>{item.name}</h4>
                            </div>
                        )
                    })
                    : "Loading"
                }




            </Slider >


        </div >
    );
};

export default Categories;