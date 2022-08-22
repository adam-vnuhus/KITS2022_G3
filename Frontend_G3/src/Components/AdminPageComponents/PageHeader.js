import {Link} from "react-router-dom";
import React from "react";
// import "./mainContent.css";

export default function PageHeader ({ btnText, onClick }) {
    return(
        <div className='mainContent_dashboard-header-container'>
            {btnText &&
                <button className='mainContent_dashboard-header-btn' type={"button"} onClick={onClick}>{btnText}</button>||<span className=""></span>
            }

            {/*<div className='mainContent_dashboard-header-right'>*/}
            {/*    <i className="fa-solid fa-bell mainContent_dashboard-header-icon"/>*/}
            {/*    <i className="fa-solid fa-gear mainContent_dashboard-header-icon"/>*/}
            {/*    <img*/}
            {/*        className='mainContent_dashboard-header-avatar'*/}
            {/*        src='https://reqres.in/img/faces/9-image.jpg' />*/}
            {/*</div>*/}
        </div>
    )
}