import React from 'react';
import "./App.css"
import Home from "./content/Home"
import { BrowserRouter ,Route, Routes, Navigate, Outlet } from 'react-router-dom';
import ProductList from './content/ProductList';
import ProductPage from './content/ProductPage';
import Login from './content/Login';
import SignUp from './content/SignUp';
import ErrorPage from "./content/Error"
import TermsAndConditions from './content/Policy';
import Cart from './content/Cart';
import ForgotPassword from "./components/ForgetPass"
import InvalidLogin from './components/InvalidLogin';
import PaymentPage from './components/Pay';
import SuccessfulPaymentPage from './components/Success';~``
import { useSelector } from 'react-redux';
import SearchBar from './components/Search';
import EmptyCart from './content/EmptyCart';
import Productsn from "./content/ProductFilter/Products/Productsn"
import SearchPage from './components/SearchPage';
import OrderSummary from './components/OrderSummary/OrderSummary';
const App =()=>{
  // const user = useSelector(state => state.user);
   return(
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:category" element={<Productsn />} />
    <Route path="/productpage/:id" element={<ProductPage />} />
    {/* <Route path="/login" element={user ? <Navigate to="/login" /> : <Navigate to="/" />} />
    <Route path="/signup" element={user ? <Navigate to="/signup" /> :<Navigate to="/" />} />  */}
    <Route path="/login" element= {<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/terms" element={<TermsAndConditions />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/forgotpassword" element={<ForgotPassword />} />
    <Route path="/errorpage" element={<ErrorPage />} />
    <Route path="/invalidLogin" Component={InvalidLogin}/>
    <Route path="/payment" Component={PaymentPage}/>
    <Route path="/successfulpayment" Component={SuccessfulPaymentPage} />
    <Route path="/search" Component={SearchBar} />
    <Route path="/searchpage" Component={SearchPage} />
    <Route path="/emptycart" Component={EmptyCart} />
    <Route path="/ordersummary" Component={OrderSummary} />
    </Routes>
    </>
  )
}
export default App;