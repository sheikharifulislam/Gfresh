import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Context from "./context/Context";
import Product from "./demo/Product";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/footer/Footer";
import Home from './pages/home/Home';
import LoginForm from "./pages/login/LoginForm";
import Navbar from './pages/navbar/Navbar';
import ProductDetails from "./pages/productDetails/ProductDetails";
import Registration from "./pages/registration/Registration";
import Reviews from "./pages/reviews/Reviews";
import Search from "./pages/search/Search";

function App() {
  return (
    <Context>
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<About/>} />
            <Route path="review" element={<Reviews/>} />
            <Route path="blogs" element={<Blogs/>} />
            <Route path="login" element={<LoginForm/>} />
            <Route path="registration" element={<Registration/>} />
            <Route path="search" element={<Search/>} />
            <Route path="add" element={<Product/>} />
            <Route path="product-details/:productId" element={<ProductDetails/>} />
          </Routes>
          <Footer/>
      </Router>
    </Context>
  );
}

export default App;
