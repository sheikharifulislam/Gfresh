import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/footer/Footer";
import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
