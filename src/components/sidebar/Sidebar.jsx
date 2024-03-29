import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import "./Sidebar.css"
import { AiOutlineLogout } from "react-icons/ai";
import { MdPermIdentity } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { TbMessage2Heart } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import {Link ,  useNavigate} from "react-router-dom"
import { logout as logoutAction } from '../../redux/Userslice';
import { useDispatch } from 'react-redux';
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  return (
    <>
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">DashBoard</h3>
        <ul className="sidebarList">
           <Link to="/adminpage" style={{textDecoration:"none"}}><li className="sidebarListItem  ">
            <IoHomeOutline  style={{fontSize:"25px",padding:"2px"}} className='sidebarIcon'/> <div style={{marginTop:"5px"}}>Home</div> 
          </li></Link>
          <li className="sidebarListItem">
            <MdTimeline style={{fontSize:"25px",padding:"2px"}}/> Analytics
          </li>
          <li className="sidebarListItem">
            <IoMdTrendingUp style={{fontSize:"25px",padding:"2px"}}/> Sales
          </li>
        </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <Link to = "/userpage" style={{textDecoration:"none"}} ><li className="sidebarListItem">
            <MdPermIdentity  style={{fontSize:"25px",padding:"2px"}}/> <div style={{marginTop:"5px"}}>Users</div> 
          </li></Link>
          <Link to="/adminproduct" style={{textDecoration:"none"}}><li className="sidebarListItem">
            <BsShop style={{fontSize:"25px",padding:"2px"}}/> <div style={{marginTop:"8px"}}>Products</div> 
          </li></Link>
          <Link to="/transaction" style={{textDecoration:"none"}}><li className="sidebarListItem">
            <LuCircleDollarSign style={{fontSize:"25px",padding:"2px"}}/> Transactions
          </li></Link>
          <li className="sidebarListItem">
            <FiBarChart2 style={{fontSize:"25px",padding:"2px"}}/> Reports
          </li>
        </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notification</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <CiMail style={{fontSize:"25px",padding:"2px"}}/> <div style={{marginTop:"5px"}}>Mail</div> 
          </li>
          <li className="sidebarListItem">
            <TbMessage2Heart style={{fontSize:"25px",padding:"2px"}}/> Feedback
          </li>
          <li className="sidebarListItem">
            <FiMessageSquare style={{fontSize:"25px",padding:"2px"}}/> Messages
          </li>
        </ul>
        </div>
        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdManageAccounts style={{fontSize:"25px",padding:"2px"}}/> <div style={{marginTop:"5px"}}>Manage</div> 
          </li>
          <li className="sidebarListItem">
            <MdTimeline style={{fontSize:"25px",padding:"2px"}}/> Analytics
          </li>
          <li className="sidebarListItem">
            <MdReportGmailerrorred style={{fontSize:"25px",padding:"2px"}}/> Reports
          </li>
          <li className="sidebarListItem" onClick={handleLogout}>
            <AiOutlineLogout style={{fontSize:"25px",padding:"2px"}}/> Logout
          </li>
        </ul>
        </div>
        
      </div>
    </div>
    
    </>
  )
}

export default Sidebar