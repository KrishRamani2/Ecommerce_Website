// import React, { useEffect, useState } from 'react'
// import  "./SidebarProductPage.css"
// import Category from './Category/Category'
// import Colors from './Colors/Colors'
// import Price from './Price/Price'
// import { IoHomeOutline } from "react-icons/io5";
// import { AiOutlineLogout } from "react-icons/ai";
// import { MdPermIdentity } from "react-icons/md";
// import { MdTimeline } from "react-icons/md";
// import { BsShop } from "react-icons/bs";
// import { LuCircleDollarSign } from "react-icons/lu";
// import { IoMdTrendingUp } from "react-icons/io";
// import { FiBarChart2 } from "react-icons/fi";
// import { FiMessageSquare } from "react-icons/fi";
// import { TbMessage2Heart } from "react-icons/tb";
// import { CiMail } from "react-icons/ci";
// import { MdManageAccounts } from "react-icons/md";
// import { MdReportGmailerrorred } from "react-icons/md";
// import {Link, useLocation } from "react-router-dom"
// import Newest from '../Newest'
// import FilteredItem from '../Recommended/FilteredProducts'
// import axios from 'axios'
// const SidebarProductPage = () => {
//   const location = useLocation();
//   const cat = location.pathname.split("/")[2];
//   const [sort, setSort] = useState("newest");
//   const [products, setProducts] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const handleLabelClick = (color,next) => {
//     console.log(`Clicked on ${color} label`);
//     setSelectedColor(color);
//   };
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat
//             ? `http://localhost:3000/api/product?category=${cat}`
//             : 'http://localhost:3000/api/product'
//         );
//         setProducts(res.data);
//         console.log('Products fetched:', res.data);
//       } catch (error) {
//         console.log('Error fetching products:', error);
//       }
//     };
//     getProducts();
//   }, [cat]);

//   const handleCompanyClick = (company,onSelectCompany) => {
//     console.log('Selected Company:', company);
    
//     // Toggle selection: if the same company is clicked again, reset the selection
//     setSelectedCompany((prevCompany) => (prevCompany === company ? null : company));
//     onSelectCompany(setSelectedCompany);
//   };

//   const uniqueCompanies = [...new Set(products.map((product) => product.company))];
//   const categoriesToShow = uniqueCompanies.slice(0, 7);

//   const filteredProducts = selectedCompany
//     ? products.filter((product) => product.company === selectedCompany)
//     : products;

//   console.log('Selected Company (State):', selectedCompany);
//   console.log('Filtered Products:', filteredProducts);
//   return (
    
//     <div>

//     <section className="sidebar" style={{top:"-9px",height:"100%",width:"80%"}}>
//       <div className="logo-container">
//         <h1 >🛒 </h1>
//       </div>
      
//       <Newest sort={sort}/>
//       <Category />
//       <Price />
//       <div className="ll">
//         <h2 className="sidebar-title colors-title">Colors</h2>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('All')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>All
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Blue')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Blue
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Green')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Green
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('White')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>White
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Black')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Black
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Red')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Red
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Others')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Others
//         </label>
//       </div>
      
//     </section>
//     <div style={{ flex: "4" }}>
//       {filteredProducts
//         .filter((product) => !selectedColor || product.color === selectedColor) // Color filtering
//         .sort((a, b) => {
//           // Sort by color if selected, otherwise keep the original order
//           if (selectedColor) {
//             return a.color.localeCompare(b.color);
//           }
//           return 0;
//         })
//         .map((product) => (
//           <FilteredItem key={product.id} item={product} />
//         ))}
//     </div>

//     </div>
//   )
// }

// export default SidebarProductPage
import React, { useEffect, useState } from 'react';
import "./SidebarProductPage.css";
import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import Newest from '../Newest';
import FilteredItem from '../Recommended/FilteredProducts';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { Slider } from '@mui/material';
import Recommended from '../Recommended/Recommended';
const SidebarProductPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  return (
    <div>
      <section className="sidebar" style={{ height: "100%"}}>
        <div className="logo-container">
          <h1 >🛒 </h1>
        </div>
        
        <Newest />
        <Category />
        <Price />
        <Colors  />
       
      </section>
    </div>
  );
};

export default SidebarProductPage;
// import React, { useEffect, useState } from 'react';
// import "./SidebarProductPage.css";
// import Category from './Category/Category';
// import Colors from './Colors/Colors';
// import Price from './Price/Price';
// import styled from 'styled-components';
// import Newest from '../Newest';
// import FilteredItem from '../Recommended/FilteredProducts';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";
// import { Slider } from '@mui/material';
// const SidebarProductPage = () => {
//   const location = useLocation();
//   const cat = location.pathname.split("/")[2];
//   const Button = styled.button`
//     padding: 10px 10px;
//     margin: 16px;
//     background: transparent;
//     border: 0.6px solid #ccc;
//     border-radius: 5px;
//     color: #323232;
//     cursor: pointer;
//   `;
//   const [products, setProducts] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat
//             ? `http://localhost:3000/api/product?category=${cat}`
//             : 'http://localhost:3000/api/product'
//         );
//         setProducts(res.data);
//         console.log(res.data);
//       } catch (error) {
//         console.log('Error');
//       }
//     };
//     getProducts();
//   }, [cat]);

//   const uniqueCompanies = [...new Set(products.map((product) => product.company))];
//   const handleCompanyClick = (company) => {
//     console.log('Selected Company:', company);
//     setSelectedCompany((prevCompany) => (prevCompany === company ? null : company));
//   };

//   const handleLabelClick = (color) => {
//     console.log(`Clicked on ${color} label`);
//     setSelectedColor(color);
//   };

//   const filteredProducts = products
//     .filter((product) => !selectedColor || product.color === selectedColor)
//     .filter((product) => !selectedCompany || product.company === selectedCompany);

//   console.log('Selected Company (State):', selectedCompany);
//   console.log('Selected Color (State):', selectedColor);
//   console.log('Filtered Products:', filteredProducts);
//   return (
//     <div>
//       <section className="sidebar" style={{ height: "100%"}}>
//         <div className="logo-container">
//           <h1 >🛒 </h1>
//         </div>
//         <div style={{ marginTop: '-10px', fontSize: '20px' }}>
//         Newest<br />
//         Collection  <br />
//         <Button className='star-button'  >
//           Click Here
//         </Button>
//       </div>
//       <div>
//       <h2 className="sidebar-title">Brand Name</h2>
//     <div>
      
//      {uniqueCompanies.map((company, index) => (
//             <label key={company}  className="sidebar-label-container" >
//               <input type="radio" name="test" key={company}
//                 className={`recommended-btns ${selectedCompany === company ? 'active' : ''}`}
//                 onClick={() => handleCompanyClick(company)}/>
//               <span className="checkmark"></span>{company}
              
//             </label>
//           ))}
//     </div>
//     </div>
//     <>
//       <div className="ml">
//         <h2 className="sidebar-title price-title" style={{marginLeft:"20px"}}>Price</h2>
//         <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span><p>Upto <hr /> ₹500</p>
//     </label>
//     <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span>₹501 - ₹1000
//     </label>
//     <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span>₹1001 - ₹2000
//     </label>
//     <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span>₹2001 - ₹3000
//     </label>        <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span>₹3001 - ₹4000
//     </label>        <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span>₹4001 - ₹5000
//     </label>        <label  className="sidebar-label-container">
//       <input type="radio" name="test" />
//       <span className="checkmark"></span>₹5000+
//     </label> 
//       </div>
//     </>
//     <div className="ll">
//         <h2 className="sidebar-title colors-title">Colors</h2>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('All')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>All
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Blue')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Blue
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Green')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Green
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('White')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>White
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Black')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Black
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Red')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Red
//         </label>
//         <label className="sidebar-label-container" onClick={() => handleLabelClick('Others')}>
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>Others
//         </label>
//       </div>
//       </section>
//       <div style={{
//         padding: "20px",
//         display: "flex",
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "space-between"
//       }}>
//         {filteredProducts.map((product) => (
//           <FilteredItem key={product.id} item={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SidebarProductPage;
