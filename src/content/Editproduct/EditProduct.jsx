import React from 'react'
import "./EditProduct.css"
import Chart from "../../components/Charts/Chart"
import { productdata } from '../datauser'
import Barchart from '../../components/Charts/Barchart'
import { barChartData } from '../datauser'
import { IoCloudUploadOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
const EditProduct = () => {
  return (
    <div className='editproduct'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct" style={{textDecoration:"none"}} > <button className="productAddButton">Create</button></Link>
      </div>
      <div className="productTop">
        <div className="productLeft">
          <label style={{fontWeight:"600"}}>Sales Performance </label>
        <Barchart style={{width:"100px"}} data={barChartData}/>
        </div>
        <div className="productRight">
          <div className="productInfoTop">
            <img src="https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/headphone/v/g/z/mgyj3hn-a-apple-original-imafy8whg2wxcygt.jpeg?q=70" alt="APPLE New AirPods Max Bluetooth Headset " className="productInfoImg" />
            <span className="productName">APPLE New AirPods Max Bluetooth Headset</span>
          </div>
          <div className="productInfoBottom">
        <div className="productInfoItem">
          <span className="productInfoKey">id:1</span>
          <span className="productInfoKeyValue">59900</span>
        </div>
        <div className="productInfoItem">
          <span className="productInfoKey">sales:</span>
          <span className="productInfoKeyValue">200</span>
        </div>
        <div className="productInfoItem">
          <span className="productInfoKey">Active:</span>
          <span className="productInfoKeyValue">Yes</span>
        </div>
        <div className="productInfoItem">
          <span className="productInfoKey"> Instock:</span>
          <span className="productInfoKeyValue">Yes</span>
        </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action=" " className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder='Apple Airpod' />
            <label htmlFor="">Instock</label>
            <select name="instock" id="instock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="Active" id="Active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/headphone/v/g/z/mgyj3hn-a-apple-original-imafy8whg2wxcygt.jpeg?q=70" alt="" className='productUploadImage'/>
              <label for="file">
                <IoCloudUploadOutline style={{fontSize:'25px'}} />
              </label>
              <input type='file' id='file' style={{display:"none"}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct