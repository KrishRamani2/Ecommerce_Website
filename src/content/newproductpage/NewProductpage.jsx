// import React, { useState } from 'react';
// import "./Newproductpage.css";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { useDispatch } from "react-redux";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { addProduct } from "../../redux/ApiCallsAdmin.js";
// import app from "../../Firebase/DataBase.js";
// import { Input, Select , message,Button } from 'antd';

// const NewProductpage = () => {
//   const [inputs, setInputs] = useState({});
//   const [file, setFile] = useState(null);
//   const [cat, setCat] = useState([]);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     if (e.target.name === 'file') {
//       setFile(e.target.files[0]);
//     } else {
//       setInputs(prev => {
//         return { ...prev, [e.target.name]: e.target.value };
//       });
//     }
//   };

//   const handleCat = (e) => {
//     setCat(e.target.value.split(","));
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (!file) {
//       console.log("No file selected");
//       return;
//     }
    
//     const fileName = new Date().getTime() + file.name;
//     const storage = getStorage(app);
//     const storageRef = ref(storage, fileName);
  
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.on('state_changed', 
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//         switch (snapshot.state) {
//           case 'paused':
//             console.log('Upload is paused');
//             break;
//           case 'running':
//             console.log('Upload is running');
//             break;
//         }
//       }, 
//       (error) => {
//         console.log("Not Uploaded");
//       }, 
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           const product = { ...inputs, img: downloadURL, categories: cat };
//           console.log(downloadURL);
//           addProduct(product, dispatch);
//           message.success('Product created successfully');
//         });
//       }
//     );
//   };


//   return (
//     <div className="newProduct">
//       <h1 className="addProductTitle">New Product</h1>
//       <form className="addProductForm">
//         <div className="addProductItem">
//           <label>Image</label>
//           <Input type="file" id="file" name="file" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Title</label>
//           <Input name='title' type="text" placeholder="Enter the title" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Company</label>
//           <Input name='company' type="text" placeholder="Enter Company name" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Description</label>
//           <Input name='description' type="text" placeholder="Enter the product description" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Size</label>
//           <Input name='size' type="text" placeholder="Enter the size" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Categories</label>
//           <Input name='category' type="text" placeholder="Enter the Category " onChange={handleCat} />
//         </div>
//         <div className="addProductItem">
//           <label>Price</label>
//           <Input name='price' type="text" placeholder="Enter the price" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>MRP</label>
//           <Input name='prevPrice' type="text" placeholder="Enter MRP" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Color</label>
//           <Input name='color' type="text" placeholder="Enter the color" onChange={handleChange} />
//         </div>
//         <div className="addProductItem">
//           <label>Stock</label>
//           <Input  type="text" name="instock" placeholder="Enter the quantity" onChange={handleChange} />
//         </div>

//         <button onClick={handleClick} className="addProductButton">Create</button>
//       </form>
//     </div>
//   );
// };

// export default NewProductpage;
import React, { useState } from 'react';
import "./Newproductpage.css";
import { useDispatch } from "react-redux";
import { message, Input, Button } from 'antd';
import { addProduct } from "../../redux/ApiCallsAdmin.js";
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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

  const handleClick = () => {
    if (!fileList.length) {
      message.error('Please upload an image');
      return;
    }

    const file = fileList[0];
    const product = { ...inputs, img: file.thumbUrl, categories: cat };
    console.log(file.thumbUrl);
    addProduct(product, dispatch)
      .then(() => {
        message.success('Product created successfully');
      })
      .catch(error => {
        console.log("Add product error:", error);
        message.error('Failed to create product');
      });
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
          >
            {fileList.length >= 1 ? null : uploadButton}
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
