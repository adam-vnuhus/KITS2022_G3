import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
export const Highlight = ({ children, color }) => (<span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '90px 0',
    display: 'block',
    height: '200px',
    margin: '16px 16px 16px 0',
}}> {children} </span>);
const Categories = () => {
    return (
        <>
            <Carousel show={3.5} slide={3} swiping={true}>
                <Highlight color="#2d66c3">We love Web 🌐</Highlight>
                <Highlight color="#f44336">We love Developers 👩🏻‍</Highlight>

            </Carousel>
        </>
    );
};

export default Categories;