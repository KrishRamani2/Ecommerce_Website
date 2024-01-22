import React from 'react';
import { BrowserRouter ,Route, Routes, Navigate, Outlet } from 'react-router-dom';
import LoginAdmin from './login/login';
import Adminpage from "./components/Adminpanel/Adminpage"
import Userpage from '../src/components/userpanel/Userpage';
import UserId from './components/useridPanel/UserId';
import NewUserpage from './components/newuserpanel/NewUserpage';
import Productpanel from './components/products/Productpanel';
import EditProductinfo from './components/productaddpanel/Productpanel';
import NewProductinfo from './components/newproductpanel/Newproductpanel';
import { useSelector } from 'react-redux';
const App =()=>{
  const user = useSelector(state=>state.user.currentUser);
  const admin = "JSON.parse(JSON.parse(localStorage.getItem(persist:root)).currentUser).isAdmin";
   return(
    <>   
    <Routes>
    <Route path="/"  element={user && admin ? <Navigate to="/adminpage" /> : <LoginAdmin />} />
    <Route path="/adminpage" Component={Adminpage} /> 
    <Route path="/userpage" Component={Userpage} />
    <Route path="/user/:id" Component={UserId} />
    <Route path="/newUser" Component={NewUserpage} />
    <Route path="/adminproduct" Component={Productpanel} /> 
    <Route path="/product/:productId" Component={EditProductinfo} />
    <Route path="/newproduct" Component={NewProductinfo} />
     </Routes>
    </>
  )
}
export default App;