//  import { Badge} from "@mui/material";
//  import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//  import "./Heading.css";
//  import { useSelector } from "react-redux";
//  import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

//  import MenuIcon from '@mui/icons-material/Menu';
//  import CloseIcon from '@mui/icons-material/Close';
//  import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
//  import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
//  import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
//  import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
//  import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
//  import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
//  import SaveAltIcon from '@mui/icons-material/SaveAlt';
//  import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
//  import { IoGiftOutline } from "react-icons/io5";
//  import {useState} from "react"

//  import MoreVertIcon from '@mui/icons-material/MoreVert';
//  import { BsBoxSeam } from "react-icons/bs";

// // const Heading = () =>{
// //   const [clicked, setClicked] = useState(false);

// //   const handleClick = () => {
// //     setClicked(!clicked);
// //   };
// //   const [results,setResults] = useState([]);
// //     const count = useSelector(state=>state.cart.count);
// //     return (
// //       <nav>
// //         <Link to="/">
// //           <svg
// //             id="logo-89"
// //             width="40"
// //             height="40"
// //             viewBox="0 0 40 40"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //           ></svg>
// //         </Link>
// //         <div>
// //           <Link to="/" id="headlogo" style={{ textDecoration: "none", marginRight: "auto" }}>
// //             <logo>
// //               <div className="logooo">
// //                 <Link>
// //                   <svg
// //                     id="logo-89"
// //                     width="40"
// //                     height="40"
// //                     viewBox="0 0 40 40"
// //                     fill="none"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       className="ccustom"
// //                       d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
// //                       fill="#775732"
// //                     ></path>
// //                     <path
// //                       className="ccustom"
// //                       d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
// //                       fill="#775732"
// //                     ></path>
// //                     <path
// //                       className="ccustom"
// //                       d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
// //                       fill="#775732"
// //                     ></path>
// //                     <path
// //                       className="ccustom"
// //                       d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
// //                       fill="#775732"
// //                     ></path>
// //                     <path
// //                       className="ccustom"
// //                       d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
// //                       fill="#CA9352"
// //                     ></path>
// //                   </svg>
// //                 </Link>
// //               </div>
// //               <h1 className="header">ZENARA</h1>
// //             </logo>{" "}
// //           </Link>{" "}
// //         </div>
// //         <div>
// //         <SearchBar className="search-bar" setResults={setResults}/>
// //         <SearchResults results={results}/>
// //         </div>
// //         <div>
// //           <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
// //             <li className="dropdown">
// //               <Link to="/login">
// //                 <AccountCircleOutlinedIcon />
// //                 Login <span className="arrow"></span>
// //               </Link>
// //               <div className="dropdown-content">
// //                 <Link to="/signup">
// //                   <span className="customer">New Customer?</span> <span>Signup</span>
// //                 </Link>
// //                 <hr />
// //                 <Link to="/" className="order">
// //                 <BsBoxSeam /> Order
// //                 </Link>
// //                 <Link to="#" className="wishlist">
// //                   <FavoriteBorderOutlinedIcon /> Wishlist
// //                 </Link>
// //                 <Link to="#" className="reward">
// //                   <IoGiftOutline /> Rewards
// //                 </Link>
// //                 <Link to="#" className="giftcard">
// //                   <CardGiftcardIcon /> Gift Cards
// //                 </Link>
// //               </div>
// //             </li>
// //             <li>
// //               <Link to="http://localhost:5174/" >
// //                 <StorefrontOutlinedIcon /> Become a Seller
// //                 </Link>
// //             </li>
// //             <div className="searchlink">
// //             </div>
// //             <li>
// //               <Link to="/cart" >
// //                 <div>
// //            <div className="badgeContainer">
// //             <Badge badgeContent={count} color="primary">
// //               <ShoppingCartOutlinedIcon />
// //             </Badge>
// //           </div>
// //           </div>
// //           <div className="textCartContainer">
// //             <ShoppingCartOutlinedIcon /> Cart
// //           </div>
// //           </Link>
// //         </li>
// //             <div id="hamoption">
// //               <li>
// //                 <Link to="/seller">
// //                   <NotificationsNoneOutlinedIcon /> Notification Preference
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/seller">
// //                   <TrendingUpRoundedIcon /> Advertise
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/seller">
// //                   <HeadsetMicOutlinedIcon /> 24x7 Customer Care
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/seller">
// //                   <SaveAltIcon /> Download App
// //                 </Link>
// //               </li>
// //             </div>
// //             <div className="MoreVertIcon">
// //             <li className="dropdowns">
// //                 <MoreVertIcon />
// //                  <span className="arrows"></span>
// //               <div className="dropdowns-content">
// //                 <Link to="/signup">
// //                 <NotificationsNoneOutlinedIcon /> Notification Preference
// //                 </Link>
// //                 <hr />
// //                 <Link to="/" className="order">
// //                 <TrendingUpRoundedIcon /> Advertise
// //                 </Link>
// //                 <Link to="#" className="wishlist">
// //                 <HeadsetMicOutlinedIcon /> 24x7 Customer Care
// //                 </Link>
// //                 <Link to="#" className="giftcard">
// //                 <SaveAltIcon /> Download App
// //                 </Link>
// //               </div>
// //             </li>
// //             </div>
// //           </ul>
// //         </div>
// //         <div id="mobile" onClick={handleClick}>
// //           {clicked ? <CloseIcon style={{ cursor: "pointer" }} /> : <MenuIcon style={{ cursor: "pointer" }} />}
// //         </div>
// //       </nav>
// //     );
// // }

// // export default Heading;

import React, { useEffect, useState } from 'react';
import "./Heading.css";  // Make sure to import your CSS file
import { Link, Navigate, useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { IoCartOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { Input, Tooltip } from 'antd';
import axios from 'axios';
import HamburgerIcon from './Preloader/Preloaderpage';
import AlertSearch from './AlertSearch';
import AnnouncementsHomepage from './AnnounceHomepage';
import { CiSearch } from 'react-icons/ci';
import { Dropdown, Space } from 'antd';
import { BiLogOutCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { logout as logoutAction } from '../redux/UserRedux';
const Heading = ({ cat }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [showAnnouncements, setShowAnnouncements] = useState(false); // State to manage showing/hiding AnnouncementsHomepage
  const count = useSelector(state => state.cart.count);
  const { user } = useSelector((state) => state.user); // Assuming user state is stored in Redux store
  console.log(user)
  const handleClickCiSearch = () => {
    // Open the AnnouncementsHomepage
    setShowAnnouncements(true);
  };

  const handleCloseAnnouncements = () => {
    // Close the AnnouncementsHomepage
    setShowAnnouncements(false);
  };
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/product?category=${cat}`
            : 'http://localhost:3000/api/product'
        );
        setProducts(res.data);
        console.log('Products fetched:', res.data);
      } catch (error) {
        console.log('Error fetching products:', error);
        setError(true);
      }
    };
    getProducts();
  }, [cat]);
  const items = [
    {
      label: <Link to="/user">Profile</Link>,
      key: '0',
      icon:<FaRegUser />
    },
    {
      type: 'divider',
    },
    {
      label: <span onClick={handleLogout}>Logout</span>,
      key: '1',
      icon:<BiLogOutCircle />
    },
  ];
  return (
    <>
      <header>
        <input type="checkbox" name="" id="chk1" />
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className='top'> <h1 style={{ color: "black", marginBottom: "7px", fontSize: "30px" }} >ZENARA <span className='hamicontwo'><HamburgerIcon /></span></h1></div>
          </Link>
        </div>
        <Link to="/searchpage"><div className="search-box" style={{ display: "flex", flexDirection: "row", marginBottom: "12px" }} >
          {/* <AlertSearch /> */}
          <div className="search-box" style={{ display: "flex", flexDirection: "row", marginBottom: "12px" }}>
          <CiSearch style={{ fontSize: 29, marginTop: "5px", cursor: "pointer", color: "black" }}  />
          <Input style={{ color: "#fff" }} />
    </div>
        </div>
        </Link>
        <ul style={{ marginTop: "11px" }} className='options'>
        <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()} style={{cursor:"pointer"}}>
      <Space>
      {user ? (
            <li style={{ marginTop: "250.px" }}>
              <Tooltip title={`Logged in as ${user.name}`}>
                <span>Hello {user.name}</span>
              </Tooltip>
            </li>
          ) : (
            <Tooltip title="Login">
              <li style={{ marginTop: "5px" }}>
                <Link to="/login" className="link">Login</Link>
              </li>
            </Tooltip>
          )}
      </Space>
    </a>
  </Dropdown>
          <Tooltip title="WishList">
            <li style={{ marginTop: "250.px" }}>
              <a href="/login"><FavoriteBorderOutlinedIcon /></a>
            </li>
          </Tooltip>
          <Link to="http://localhost:5174/">
            <Tooltip title="Become a Seller">
              <li style={{ marginTop: "250.px" }}>
                <a href="http://localhost:5174/"><StorefrontOutlinedIcon /></a>
              </li>
            </Tooltip>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Tooltip title="Cart">
              <li style={{ marginTop: "250.px", fontSize: "24px" }}>
                <IoCartOutline />
             
              </li>
            </Tooltip>
          </Link>
          <Tooltip title="Categories">
            <li style={{ marginTop: "250.px", fontSize: "24px", cursor: "pointer" }}>
              <TbCategory />
            </li>
          </Tooltip>
        </ul>
        <span style={{ marginRight: "-100px" }} className='hamicon'  >
          <HamburgerIcon />
        </span>
        <div className="menu">
          <label htmlFor="chk1">
            <i className="fa fa-bars"></i>
          </label>
        </div>
      </header>
      {showAnnouncements && <AnnouncementsHomepage onClick={handleCloseAnnouncements} />}
    </>
  );
}

export default Heading;