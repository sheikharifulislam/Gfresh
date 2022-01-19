import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Product from "./demo/Product";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/footer/Footer";
import Home from './pages/home/Home';
import LoginForm from "./pages/login/LoginForm";
import Navbar from './pages/navbar/Navbar';
import Registration from "./pages/registration/Registration";
import Reviews from "./pages/reviews/Reviews";
import Search from "./pages/search/Search";

function App() {
  return (
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
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
