import React from 'react';
import Slider from "react-slick";
import './Categories.css';
import { useEffect, useState } from 'react';
import CategoriesService from '../../services/CategoriesService';
import ProductService from '../../services/ProductService';
import { Link, useParams } from "react-router-dom";
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoriesService.getCategories()
            .then(response => response.data)
            .then((data) => {
                if (data.length > 0) {
                    setCategories(data)
                }
                console(data)
            });

    }, [])

    // useEffect(() => {
    //     let country_url =
    //         'http://localhost:8080/api/v1/products/category';

    //     fetch(country_url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCategories(data)

    //         });

    // }, []);
    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
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

                            <div className="card" style={{ width: '18rem' }}>
                                <Link to={'/shop/' + item.name}>
                                    <img className="" src={require(`./feature-3.jpg`)} alt="" style={{ width: 250 }} />
                                    <div className="card-body" style={{ height: 80 }}>
                                        <p className="card-text">{item.name}</p>
                                    </div>
                                </Link>
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