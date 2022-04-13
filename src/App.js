import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import Context from "./context/Context";
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
import DashboardHome from "./pages/dashboard/dashboradHome/DashboardHome";
import AddProduct from "./pages/dashboard/addProduct/AddProduct";
import ManageAllProducts from "./pages/dashboard/manageAllProducts/ManageAllProducts";
import UpdateProductInfo from "./pages/dashboard/updateProductInfo/UpdateProductInfo";
import ManageAllOrders from "./pages/dashboard/manageAllOrders/ManageAllOrders";
import ManagePendingOrders from "./pages/dashboard/managePendingOrders/ManagePendingOrders";
import MyAllOrders from "./pages/dashboard/myAllOrders/MyAllOrders";
import UserPrivateRoute from './privateRoute/UserPrivateRoute';
import AdminPrivateRoute from './privateRoute/AdminPrivateRoute';
import Profile from "./pages/profile/Profile";


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
            <Route path="review" element={
              <UserPrivateRoute>
                <Reviews/>
              </UserPrivateRoute>
            } />
            <Route path="blogs" element={<Blogs/>} />
            <Route path="login" element={<LoginForm/>} />
            <Route path="registration" element={<Registration/>} />
            <Route path="search" element={<Search/>} />           
            <Route path="product-details/:productId" element={<ProductDetails/>} />
            <Route path="shipping/:orderProductId" element={
              <UserPrivateRoute>
                  <ShippingInformations/>
              </UserPrivateRoute>
            } />
            <Route path="payment" element={
              <UserPrivateRoute>
                <Payment/>
              </UserPrivateRoute>
            } />
            <Route path="dashboard/*" element={
              <UserPrivateRoute>
                <Dashboard/>
              </UserPrivateRoute>
            }>
                <Route path="" element={<DashboardHome/>} />
                <Route path="add-product" element={
                  <AdminPrivateRoute>
                    <AddProduct/>
                  </AdminPrivateRoute>
                } />
                <Route path="manage-all-products" element={
                  <AdminPrivateRoute>
                    <ManageAllProducts/>
                  </AdminPrivateRoute>
                } />
                <Route path="update-product-info/:productId" element={
                  <AdminPrivateRoute>
                    <UpdateProductInfo/>
                  </AdminPrivateRoute>
                } />
                <Route path="all-orders" element={
                  <AdminPrivateRoute>
                    <ManageAllOrders/>
                  </AdminPrivateRoute>
                } />
                <Route path="pending-orders" element={
                  <AdminPrivateRoute>
                    <ManagePendingOrders/>
                  </AdminPrivateRoute>
                } />
                <Route path="profile" element={
                    <UserPrivateRoute>
                        <Profile/>
                    </UserPrivateRoute>
                }/>
                <Route path="my-all-orders" element={<MyAllOrders/>} />
            </Route>
          </Routes>
          <Footer/>
      </Router>
    </Context>
  );
}

export default App;
