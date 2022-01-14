import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/footer/Footer";
import Home from './pages/home/Home';
import LoginForm from "./pages/login/LoginForm";
import Navbar from './pages/navbar/Navbar';
import Reviews from "./pages/reviews/Reviews";

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
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
