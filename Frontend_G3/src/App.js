
import './App.css';
import Header from './Components/Header';
import './Css/style.css';
import './Css/owl-carousel-min.css';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Categories from './Pages/HomeComponents/Categories';
import ShopMainPage from "./Pages/ShopMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";

import AdminLayout from "./Components/AdminLayout";
import Admin from "./Pages/AdminPages/Admin";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="/admin/" element={<Admin />} />

        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<ShopMainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
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
