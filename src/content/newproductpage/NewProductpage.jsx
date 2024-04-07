import React, { useState } from 'react';
import "./Newproductpage.css";
import { useDispatch } from "react-redux";
import { message, Input, Button } from 'antd';
import { addProduct } from "../../redux/ApiCallsAdmin.js";
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importing getDownloadURL function
import app from "../../Firebase/DataBase.js";

const NewProductpage = () => {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleClick = async () => {
    if (!fileList.length) {
      message.error('Please upload at least one image');
      return;
    }

    const storage = getStorage(app);
    const images = [];
    for (const file of fileList) {
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        await uploadBytes(storageRef, file.originFileObj);
        const downloadURL = await getDownloadURL(storageRef);
        images.push(downloadURL);
      } catch (error) {
        console.error("Upload failed:", error);
        message.error('Failed to upload image');
        return;
      }
    }
    const product = { ...inputs, img: images[0], img1: images[1], img2: images[2], img3: images[3], img4: images[4], img5: images[5], categories: cat };
    
    addProduct(product, dispatch);
    setInputs({});
    setFileList([]);
    message.success('Product created successfully');
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <Upload
  listType="picture-card"
  fileList={fileList}
  onPreview={handlePreview}
  onChange={handleFileChange}
  multiple // Enable multiple file selection
>
  {fileList.length >= 6 ? null : uploadButton} {/* Limit the number of files to 5 */}
</Upload>
          <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="Preview" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <Input name='title' type="text" placeholder="Enter the title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Company</label>
          <Input name='company' type="text" placeholder="Enter Company name" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <Input name='description' type="text" placeholder="Enter the product description" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <Input name='size' type="text" placeholder="Enter the size" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <Input name='category' type="text" placeholder="Enter the Category " onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <Input name='price' type="text" placeholder="Enter the price" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>MRP</label>
          <Input name='prevPrice' type="text" placeholder="Enter MRP" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <Input name='color' type="text" placeholder="Enter the color" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <Input type="text" name="instock" placeholder="Enter the quantity" onChange={handleChange} />
        </div>
        <Button type="primary" onClick={handleClick} className="addProductButton">Create</Button>
      </form>
    </div>
  );
};

export default NewProductpage;
