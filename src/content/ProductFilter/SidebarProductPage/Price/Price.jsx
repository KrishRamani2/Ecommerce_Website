import React, { useState } from 'react';
// Import the Ant Design styles
import "./Price.css";
import { Slider } from '@mui/material';

const Price = () => {
  const [selectedPrice, setSelectedPrice] = useState(""); // State to manage the selected price

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  const priceOptions = [
    { value: "", label: "Select Price" },
    { value: "0-25", label: "0 - 25" },
    { value: "25-50", label: "25 - 50" },
    { value: "50-100", label: "50 - 100" },
    { value: "100+", label: "100 and above" },
  ];
  console.log(selectedPrice)
  return (
    <>
      {/* <div className="ml">
        <h2 className="sidebar-title price-title" style={{marginLeft:"20px"}}>Price</h2>
        <Slider style={{marginLeft:"20px",width:"110px",border:"none"}}/>
       {/* <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span><p>Upto <hr /> ₹500</p>
    </label>
    <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>₹501 - ₹1000
    </label>
    <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>₹1001 - ₹2000
    </label>
    <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>₹2001 - ₹3000
    </label>        <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>₹3001 - ₹4000
    </label>        <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>₹4001 - ₹5000
    </label>        <label  className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span>₹5000+
    </label>  */}
      {/* </div> */} 
      <select value={selectedPrice} onChange={handlePriceChange}>
        {priceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Price;
