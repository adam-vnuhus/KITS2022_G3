
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

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
