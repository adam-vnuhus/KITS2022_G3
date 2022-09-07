import React, {useEffect, useState} from 'react';
import AdminService from "../services/AdminService";
import BasicTabs from "../testOrderOff/BasicTabs";


const ProfileCustomer = () => {
    const [data, setData] = useState(() => {
        let userLocal = localStorage.getItem("user");
        if(userLocal) {
            return JSON.parse(userLocal);
        }
        return null;
    })


    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="ProfileCustomer">
            <header>
                <div className="header-wrap">
                    <div className="profile-pic">
                        <img src={data?.image} alt="profile-logo"/>
                    </div>
                    <div className="profile-info">
                        <div className="title row">
                            <h2>{data?.name}</h2>

                        </div>
                        <div className="desktop-only">
                            <div className="details row">
                                <ul>
                                    <li> Ranking : <button type="button"
                                                           className="btn btn-light btn-rounded">{data?.ranking?.name}</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </header>
            <div className="container">
                <BasicTabs data={data}/>
            </div>
        </div>
    );
};

export default ProfileCustomer;