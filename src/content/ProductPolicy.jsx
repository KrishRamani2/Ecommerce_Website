import { Tooltip } from 'antd';
import React  from 'react';
import { TbTruckReturn } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa";
import { LuTruck } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
const ProductPolicy = () => {

  return (
<div style={{display:"flex",flexDirection:"row"}}>
<div style={{ fontSize: '25px', padding: '10px', borderRadius: '8px' ,marginLeft:"45px"}}>
     <div> 
        <span style={{fontSize:"25px",textAlign:"center",marginLeft:"45px"}}>
       <Tooltip title={"Easy 7 Day Return or Replace"}> <TbTruckReturn /> </Tooltip>
        </span>
        <div style={{fontSize: '25px'}}>7 day Return</div>
        </div>
    </div>
    <div style={{ fontSize: '25px', padding: '10px', borderRadius: '8px' ,marginLeft:"45px"}}>
     <div> 
        <span style={{fontSize:"25px",marginLeft:"45px"}}>
      <Tooltip title={"Free & Delivery T&C*"}>  <FaTruckFast /> </Tooltip>
        </span>
        <div>Free Delivery</div>
        </div>
    </div>
    <div style={{ fontSize: '25px', padding: '10px', borderRadius: '8px' ,marginLeft:"45px"}}>
     <div> 
        <span style={{fontSize:"25px",marginLeft:"45px"}}>
      <Tooltip title={"Top Brands"}>  <FaTrophy /> </Tooltip>
        </span>
        <div>Top Brands</div>
        </div>
    </div>
    <div style={{ fontSize: '25px', padding: '10px', borderRadius: '8px' ,marginLeft:"45px"}}>
     <div> 
        <span style={{fontSize:"25px",marginLeft:"25px"}}>
      <Tooltip title={" ZENARA Delivered"}>  <LuTruck /> </Tooltip>
        </span>
        <div>Delivery</div>
        </div>
    </div>
    <div style={{ fontSize: '25px', padding: '10px', borderRadius: '8px' ,marginLeft:"45px"}}>
     <div> 
        <span style={{fontSize:"25px",marginLeft:"25px"}}>
      <Tooltip title={"Secure Transcation"}>  <RiSecurePaymentFill /> </Tooltip>
        </span>
        <div>Transcation</div>
        </div>
    </div>
</div>
  );
};

export default ProductPolicy;