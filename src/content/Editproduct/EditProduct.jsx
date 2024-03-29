// import React, { useState } from 'react'
// import "./EditProduct.css"
// import Chart from "../../components/Charts/Chart"
// import { productdata } from '../datauser'
// import Barchart from '../../components/Charts/Barchart'
// import { barChartData } from '../datauser'
// import { IoCloudUploadOutline } from "react-icons/io5";
// import {Link, useLocation} from "react-router-dom";
// import {useSelector} from "react-redux"
// import { useDispatch } from "react-redux";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

// const EditProduct = () => {
//   const location = useLocation();
//   const productId = location.pathname.split("/")[2];
//   const [file,setFile] = useState(null);
//   const handleClick = (e) => {
//     e.preventDefault();
//     const fileName = new Date().getTime() +file.name;
//   }
//   console.log(file);
//   const product = useSelector(state=>state.product.products.find(product =>product._id === productId))
//   return (
//     <div className='editproduct'>
//       <div className="productTitleContainer">
//         <h1 className="productTitle">Product</h1>
//         <Link to="/newproduct" style={{textDecoration:"none"}} > <button className="productAddButton">Create</button></Link>
//       </div>
//       <div className="productTop">
//         <div className="productLeft">
//           <label style={{fontWeight:"600"}}>Sales Performance </label>
//         <Barchart style={{width:"100px"}} data={barChartData}/>
//         </div>
//         <div className="productRight">
//           <div className="productInfoTop">
//             <img src={product.img} alt={product.name} className="productInfoImg" />
//             <span className="productName">{product.title}</span>
//           </div>
//           <div className="productInfoBottom">
//         <div className="productInfoItem">
//           <span className="productInfoKey">id:{product._id}</span>
//         </div>
//         <div className="productInfoItem">
//           <span className="productInfoKey">sales:</span>
//           <span className="productInfoKeyValue">{product.instock}</span>
//         </div>
//         <div className="productInfoItem">
//           <span className="productInfoKey">Price:</span>
//           <span className="productInfoKeyValue">₹{product.price}</span>
//         </div>
//         <div className="productInfoItem">
//           <span className="productInfoKey"> Instock:</span>
//           <span className="productInfoKeyValue">{product.instock>0?"Yes":"No"}</span>
//         </div>
//         <div className="productInfoItem">
//           <span className="productInfoKey"> Active:</span>
//           <span className="productInfoKeyValue">{product.instock>0?"Yes":"No"}</span>
//         </div>
//           </div>
//         </div>
//       </div>
//       <div className="productBottom">
//         <form action=" " className="productForm">
//           <div className="productFormLeft">
//             <label htmlFor="">Product Name</label>
//             <input type="text" placeholder={product.company} />
//             <label htmlFor="">Product Price</label>
//             <input type="text" placeholder={product.price} />
//             <label htmlFor="">Product Description</label>
//             <input type="text" placeholder="Enter the descriptio" />
//             <label htmlFor="">Instock</label>
//             <select name="instock" id="instock">
//             <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </div>
//           <div className="productFormRight">
//             <div className="productUpload">
//               <img src={product.img} alt="" className='productUploadImage'/>
//               <label for="file">
//                 <IoCloudUploadOutline style={{fontSize:'25px'}} />
//               </label>
//               <input type='file' id='file' style={{display:"none"}} />
//             </div>
//             <button className="productButton">Update</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default EditProduct
// import React, { useState } from 'react';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Input, Select, message, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Barchart from '../../components/Charts/Barchart';
import { barChartData } from '../datauser';
import { updateProduct } from '../../redux/ApiCallsAdmin';

const { Option } = Select;

const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const App = ({ onChange }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (onChange) {
      onChange(newFileList[0]);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

const EditProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [fileList, setFileList] = useState([]);
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCat = (value) => {
    if (typeof value === 'string') {
      setCat(value.split(","));
    } else {
      // Handle the case when value is not a string (optional)
    }
  };

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleClick = () => {
    if (!fileList || fileList.length === 0) {
      message.error('Please upload an image');
      return;
    }
  
    const file = fileList[0];
    const product = { ...inputs, img: file.thumbUrl, categories: cat };
  
    updateProduct(product._id, product, dispatch)
      .then(() => {
        message.success('Product Updated successfully');
      })
      .catch(error => {
        console.log("Updation Failed:", error);
        message.error('Failed to update product');
      });
  };
  

  const product = useSelector(state => state.product.products.find(product => product._id === productId));

  return (
    <div className='editproduct'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct" style={{ textDecoration: "none" }} ><button className="productAddButton">Create</button></Link>
      </div>
      <div className="productTop">
        <div className="productLeft">
          <label style={{fontWeight:"600"}}>Sales Performance </label>
          <Barchart style={{width:"100px"}} data={barChartData}/>
        </div>
        <div className="productRight">
          <div className="productInfoTop">
            <img src={product.img} alt={product.name} className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoKeyValue">{product.instock}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoKeyValue">₹{product.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey"> Instock:</span>
              <span className="productInfoKeyValue">{product.instock > 0 ? "Yes" : "No"}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey"> Active:</span>
              <span className="productInfoKeyValue">{product.instock > 0 ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action=" " className="productForm">
          <div className="productFormLeft">
            {/* Other input fields */}
            <label htmlFor="">Product Name</label>
            <Input type="text" name='title' placeholder={product.title} onChange={handleChange} />
            <label htmlFor="">Company</label>
            <Input type="text" name='company' placeholder={product.company} onChange={handleChange} />
            <label>Categories</label>
            <Input name='categories' type="text" placeholder={product.categories[1]} onChange={handleCat} />
            <label htmlFor="">Product Size</label>
            <Input type="text" name='size' placeholder={product.size} onChange={handleChange} />
            <label htmlFor="">Product Price</label>
            <Input type="text" name='price' placeholder={product.price} onChange={handleChange} />
            <label>MRP</label>
            <Input name='prevPrice' type="
text" placeholder={product.prevPrice} onChange={handleChange} />
<label>Color</label>
<Input name='color' type="text" placeholder={product.color} onChange={handleChange} />
<label htmlFor="">Product Description</label>
<Input type="text" name='description' placeholder="Enter the description" onChange={handleChange} />
<label>Stock</label>
  <Input type="text" name="instock" placeholder="Enter the quantity" onChange={handleChange} />
<label htmlFor="">Instock</label>
<Select defaultValue={product.instock > 0 ? "true" : "false"} onChange={(value) => setInputs({ ...inputs, instock: value })}>
<Option value="true">Yes</Option>
<Option value="false">No</Option>
</Select>
</div>
<div className="productFormRight">
<div className="productUpload">
<App onChange={handleFileChange} />
</div>
<Button onClick={handleClick} className="productButton" type="primary">Update</Button>
</div>
</form>
</div>
</div>
);
};

export default EditProduct;
