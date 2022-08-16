import {Link} from "react-router-dom";
import React from "react";

export default function PageHeader ({ btnText, onClick }) {
    return(
        <div className='dashboard-header-container'>
            {btnText &&
                <button className='dashboard-header-btn' onClick={onClick}>{btnText}</button>||<span></span>
            }

            <div className='dashboard-header-right'>
                <i className="fa-solid fa-bell dashboard-header-icon"/>
                <i className="fa-solid fa-gear dashboard-header-icon"/>
                <img
                    className='dashboard-header-avatar'
                    src='https://reqres.in/img/faces/9-image.jpg' />
            </div>
        </div>
    )
}