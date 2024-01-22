import React from 'react';
import { BrowserRouter ,Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginAdmin from "./src/login/login"
import Adminpage from "./src/components/Adminpanel/Adminpage"
import Userpage from '../../admin/src/components/userpanel/Userpage';
import UserId from '../../admin/src/components/useridPanel/UserId';
import NewUserpage from '../../admin/src/components/newuserpanel/NewUserpage';
import Productpanel from '../../admin/src/components/products/Productpanel';
import EditProductinfo from '../../admin/src/components/productaddpanel/Productpanel';
import NewProductinfo from '../../admin/src/components/newproductpanel/Newproductpanel';
const AdminsApp =()=>{
   return(
    <>
    <Routes>
    <Route path="/admin" Component={LoginAdmin} />
    <Route path="/adminpage" Component={Adminpage} /> 
    {/* <Route path="/userpage" Component={Userpage} />
    <Route path="/user/:id" Component={UserId} />
    <Route path="/newUser" Component={NewUserpage} />
    <Route path="/adminproduct" Component={Productpanel} /> 
    <Route path="/product/:productId" Component={EditProductinfo} />
    <Route path="/newproduct" Component={NewProductinfo} /> */}
     </Routes>
    </>
  )
}
export default AdminsApp;