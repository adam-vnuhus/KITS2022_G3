import './App.css';

import './Css/style.css';
import './Css/owl-carousel-min.css';

import './Css/profile.css'
import Home from './Pages/Home';

import ShopMainPage from "./Pages/ShopMainPage";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Layout from './Components/Layout';
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";

import AdminLayout from "./Components/AdminPageComponents/AdminLayout";
import MainContent from "./Components/AdminPageComponents/MainContent";
import React, {useEffect, useState} from "react";
import DetailProduct from './Pages/DetailProduct';
import SignIn from "./Pages/SignIn";
import Dashboard from "./Components/AdminPageComponents/DashBoard";
import ProfileCustomer from './Pages/ProfileCustomer';
import DetailOrder from './Pages/ProfileComponent/DetailOrder';
import DeleteConfirmModal from "./Components/AdminPageComponents/DeleteConfirmModal";
import Error from "./Pages/ErrorPage";
import AdminLogin from "./Components/AdminPageComponents/adminLoginForm";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/" element={<AdminLayout />}>
                    <Route path="/admin/" element={<Dashboard />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/orders"
                        element={<MainContent table={"order"}/>} />
                    <Route path="/admin/products"
                        element={<MainContent table={"product"}/>} />
                </Route>
                <Route path="/404" element={<Error errorCode={404} message={"WE CAN'T FIND THAT PAGE!"} />} />
                <Route path="/500" element={<Error errorCode={500} message={"SOMETHING WENT WRONG !"} />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/shop/:name" element={<ShopMainPage />} />
                    <Route path="/shop" element={<ShopMainPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/detail/:id" element={<DetailProduct />} />
                    <Route path="/profile" element={<ProfileCustomer />} />
                    <Route path="/testdetail" element={<DetailOrder />} />
                    <Route path="/test" element={<DeleteConfirmModal />} />




                    {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
