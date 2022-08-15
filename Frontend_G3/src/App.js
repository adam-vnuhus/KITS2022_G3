
import './App.css';
import Header from './Components/Header';
import './Css/style.css';
import './Css/owl-carousel-min.css';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Categories from './Pages/HomeComponents/Categories';
import ShopMainPage from "./Pages/ShopMainPage";

function App() {
  return (
    <>
      <Header />
      <ShopMainPage />
      <Footer />
      {/* <Categories /> */}
      {/* error  library */}
    </>
  );
}

export default App;
