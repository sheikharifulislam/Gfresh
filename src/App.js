import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
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
import ShippingInformations from "./pages/shippingInformations/ShippingInformations";
import Payment from './pages/payment/Payment';
import Dashboard from './pages/dashboard/Dashboard';


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
            <Route path="shipping/:orderProductId" element={<ShippingInformations/>} />
            <Route path="payment" element={<Payment/>} />
            <Route path="dashboard/*" element={<Dashboard/>} />
          </Routes>
          <Footer/>
      </Router>
    </Context>
  );
}

export default App;
