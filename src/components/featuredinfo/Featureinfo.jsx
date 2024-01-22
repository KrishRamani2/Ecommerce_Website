import React from 'react'
import "./Featureinfo.css"
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { BiUpArrowCircle } from "react-icons/bi";
const Featureinfo = () => {
  return (
    <>
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹300000</span>
                    <span className="featuredMoneyRate" style={{color:"#27a300"}}> +21600 (10.8%) <BiUpArrowCircle style={{fontSize:"18px",marginLeft:"3px"}} className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Comapared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹500000</span>
                    <span className="featuredMoneyRate" style={{color:"#27a300"}}> +67500 (13.5%) <BiUpArrowCircle style={{fontSize:"18px",marginLeft:"3px"}} className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Comapared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹200000</span>
                    <span className="featuredMoneyRate" style={{color:"#27a300"}}> -216000 (10.4%) <IoArrowDownCircleOutline style={{fontSize:"18px",marginLeft:"3px"}} className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Comapared to Last Month</span>
        </div>
    </div>
    </>
  )
}

export default Featureinfo