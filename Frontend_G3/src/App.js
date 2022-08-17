import './App.css';

import './Css/style.css';
import './Css/owl-carousel-min.css';


import Home from './Pages/Home';

import ShopMainPage from "./Pages/ShopMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";

import AdminLayout from "./Components/AdminPageComponents/AdminLayout";
import Admin from "./Pages/AdminPages/Admin";
import MainContent from "./Components/AdminPageComponents/MainContent";
import React from "react";
import DetailProduct from './Pages/DetailProduct';
import SignIn from "./Pages/SignIn";


const all_orders = [
    {
        id: "#1236",
        date: "1 Nov, 10:20 AM",
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        product: "Phone Case Pink  x 2",
        price: "50,00",
        status: "Paid"
    },
    {
        id: "#1235",
        date: "1 Nov, 10:20 AM",
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        product: "Valvet T-shirt",
        price: "55,50",
        status: "Canceled"
    },
    {
        id: "#1234",
        date: "1 Nov, 10:20 AM",
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Paid"
    },
    {
        id: "#1233",
        date: "1 Nov, 10:20 AM",
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Refunded"
    },
    {
        id: "#1232",
        date: "1 Nov, 10:20 AM",
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Canceled"
    },
    {
        id: "#1231",
        date: "1 Nov, 10:20 AM",
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Paid"
    },
    {
        id: "#1236",
        date: "1 Nov, 10:20 AM",
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        product: "Phone Case Pink  x 2",
        price: "50,00",
        status: "Paid"
    },
    {
        id: "#1235",
        date: "1 Nov, 10:20 AM",
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        product: "Valvet T-shirt",
        price: "55,50",
        status: "Canceled"
    },
    {
        id: "#1234",
        date: "1 Nov, 10:20 AM",
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Paid"
    },
    {
        id: "#1233",
        date: "1 Nov, 10:20 AM",
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Refunded"
    },
    {
        id: "#1232",
        date: "1 Nov, 10:20 AM",
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Canceled"
    },
    {
        id: "#1231",
        date: "1 Nov, 10:20 AM",
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        product: "Nike Sport V2",
        price: "140,20",
        status: "Paid"
    }
]

const columns = ["ID",
    "DATE",
    "STATUS",
    "CUSTOMERS IMG",
    "FIRST NAME",
    "LAST NAME",
    "PRODUCT",
    "REVENUE"]

const tableColumns = ["id",
    "date",
    "status",
    "avatar",
    "first_name",
    "last_name",
    "product",
    "price",]


function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/admin/" element={<AdminLayout />}>
                    <Route path="/admin/" element={<Admin />} />
                    <Route path="/admin/orders"
                        element={<MainContent content={all_orders} entity={"order"} columns={columns}
                            fields={tableColumns} addNew={0} />} />


                </Route>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<ShopMainPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<SignIn />} />


                    {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
        // <>
        //   <Header />
        //   <Home />
        //   {/* <ShopMainPage /> */}
        //   <Footer />
        //   {/* <Categories /> */}
        //   {/* error  library */}
        // </>
    );
}

export default App;
