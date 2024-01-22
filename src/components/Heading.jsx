import { Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Heading.css";
import { useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchBar from "./Search";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import { IoGiftOutline } from "react-icons/io5";
import {useState} from "react"
import SearchResults from "./SearchResults";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsBoxSeam } from "react-icons/bs";
import {Link} from "react-router-dom"
const Heading = () =>{
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const [results,setResults] = useState([]);
    const count = useSelector(state=>state.cart.count);
    return (
      <nav>
        <Link to="/">
          <svg
            id="logo-89"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </Link>
        <div>
          <Link to="/" id="headlogo" style={{ textDecoration: "none", marginRight: "auto" }}>
            <logo>
              <div className="logooo">
                <Link>
                  <svg
                    id="logo-89"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="ccustom"
                      d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
                      fill="#775732"
                    ></path>
                    <path
                      className="ccustom"
                      d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
                      fill="#775732"
                    ></path>
                    <path
                      className="ccustom"
                      d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
                      fill="#775732"
                    ></path>
                    <path
                      className="ccustom"
                      d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
                      fill="#775732"
                    ></path>
                    <path
                      className="ccustom"
                      d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
                      fill="#CA9352"
                    ></path>
                  </svg>
                </Link>
              </div>
              <h1 className="header">ZENARA</h1>
            </logo>{" "}
          </Link>{" "}
        </div>
        <div>
        <SearchBar className="search-bar" setResults={setResults}/>
        <SearchResults results={results}/>
        </div>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li className="dropdown">
              <Link to="/login">
                <AccountCircleOutlinedIcon />
                Login <span className="arrow"></span>
              </Link>
              <div className="dropdown-content">
                <Link to="/signup">
                  <span className="customer">New Customer?</span> <span>Signup</span>
                </Link>
                <hr />
                <Link to="/" className="order">
                <BsBoxSeam /> Order
                </Link>
                <Link to="#" className="wishlist">
                  <FavoriteBorderOutlinedIcon /> Wishlist
                </Link>
                <Link to="#" className="reward">
                  <IoGiftOutline /> Rewards
                </Link>
                <Link to="#" className="giftcard">
                  <CardGiftcardIcon /> Gift Cards
                </Link>
              </div>
            </li>
            <li>
              <Link to="http://localhost:5174/" >
                <StorefrontOutlinedIcon /> Become a Seller
                </Link>
            </li>
            <div className="searchlink">
            </div>
            <li>
              <Link to="/cart" >
           <div className="badgeContainer">
            <Badge badgeContent={count } color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
          <div className="textCartContainer">
            <ShoppingCartOutlinedIcon /> Cart
          </div>
          </Link>
        </li>
            <div id="hamoption">
              <li>
                <Link to="/seller">
                  <NotificationsNoneOutlinedIcon /> Notification Preference
                </Link>
              </li>
              <li>
                <Link to="/seller">
                  <TrendingUpRoundedIcon /> Advertise
                </Link>
              </li>
              <li>
                <Link to="/seller">
                  <HeadsetMicOutlinedIcon /> 24x7 Customer Care
                </Link>
              </li>
              <li>
                <Link to="/seller">
                  <SaveAltIcon /> Download App
                </Link>
              </li>
            </div>
            <div className="MoreVertIcon">
            <li className="dropdowns">
                <MoreVertIcon />
                 <span className="arrows"></span>
              <div className="dropdowns-content">
                <Link to="/signup">
                <NotificationsNoneOutlinedIcon /> Notification Preference
                </Link>
                <hr />
                <Link to="/" className="order">
                <TrendingUpRoundedIcon /> Advertise
                </Link>
                <Link to="#" className="wishlist">
                <HeadsetMicOutlinedIcon /> 24x7 Customer Care
                </Link>
                <Link to="#" className="giftcard">
                <SaveAltIcon /> Download App
                </Link>
              </div>
            </li>
            </div>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          {clicked ? <CloseIcon style={{ cursor: "pointer" }} /> : <MenuIcon style={{ cursor: "pointer" }} />}
        </div>
      </nav>
    );
}

export default Heading;
