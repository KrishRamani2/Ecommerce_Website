import Heading from '../components/Heading';
import Announcements from '../components/Announcements';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from "styled-components"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button, message, Space, Tooltip } from 'antd';
import { useState } from 'react'; 
import AlertPage from "../components/AlertPage";
import {Image} from "antd"
import { useLocation } from 'react-router-dom';
import publicRequest from './RequestMethod';
import { useEffect } from 'react';
import {addProduct} from "../redux/CartRedux";
import { useDispatch } from "react-redux";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import ProductPolicy from './ProductPolicy';

// const Container = styled.div`

// `
// const Wrapper = styled.div`
// padding: 50px;
// display: flex;
// @media screen and (max-width:470px) {
//     padding: 10px;
//   flex-direction: column;
//   }
// `
// const ImgContainer = styled.div`
// flex:1;
// `
// const Image = styled.img`
// width: 60%;
// height: 50vh;
// object-fit: contain;
//     aspect-ratio: 3/2;
//     mix-blend-mode: color-burn;
// @media screen and (max-width:470px) {
//   height: 40vh;
//   }
// `
// const InfoContainer = styled.div`
// flex:1;
// padding: 0px 50px;
// @media screen and (max-width:470px) {
//   padding: 10px;
//   }
// `
// const Title = styled.h1`
// font-weight: 200;
// `
// const Description = styled.p`
// margin: 20px 0px;
// `
// const Price = styled.h2`
// font-weight: 100;
// font-size: 40px;
// `
// const FilterContainer = styled.div`
// width: 50%;
// margin: 30px 0px;
// display: flex;
// justify-content: space-between;
// @media screen and (max-width:470px) {
//   width: 100%;
//   }
// `
// const Filter = styled.div`
// display: flex;
// align-items: center;


// `
// const FilterTitle = styled.span`
// font-size: 20px;
// font-weight: 200;

// `
// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${props => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
//   border: 1px solid black;

//   &:hover {
//     transform: scale(1.1);
//   }

//   ${props =>
//     props.selected &&
//     `
//     border: 2px solid teal;
//   `}
// `;
// const FilterSize = styled.select`
// margin-left:10px;
// padding: 10px;
// cursor: pointer;
//   outline: none;
//   border-radius: 15px;

//   &:hover {
//     border-color: #666;
//   }

//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
//   }
// `
// const FilterSizeOption = styled.option`

// `
// const AddContainer = styled.div`
// width: 50%;
// display: flex;
// align-items: center;
// justify-content: space-between;
// @media screen and (max-width:470px) {
//   width: 100%;
//   }
// `
// const AmountContainer = styled.div`
// display: flex;
// align-items: center;
// font-weight: 700;
// `
// const Amount = styled.span`
// width: 30px;
// height: 30px;
// border-radius:10px;
// border: 1px solid teal;
// display: flex;
// align-items: center;
// justify-content: center;
// margin: 5px;
// `
// const Buttons = styled.button`
// border-radius: 15px;
// padding: 15px;
// border: 2px solid teal;
// background-color: white;
// cursor: pointer;
// font-weight: 500;
// &:hover{
//   background-color: #f8f4f4;
// }
// `
// const AddOutlinedIconStyled = styled(AddOutlinedIcon)`
 
// `;
// const ProductPage = () => {
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];
//   const [product,setProduct] = useState({});
//   const state = useState();
//   const [count,setcount] = useState(0);
//   const [showAlert, setShowAlert] = useState(false);
//   const [color, setColor] = useState("");
//   const [size, setsize] = useState("");
//   const dispatch = useDispatch();
//   const [messageApi, contextHolder] = message.useMessage()
//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < product.star; i++) {
//       stars.push(<AiFillStar key={i} className="rating-star" />);
//     }
//     return stars;
//   };
//   const Incum=()=>{
//     count < 5 ? setcount(count + 1) : setShowAlert(true);
//   }
//   const Decum=()=>{
//     count>0?setcount(count-1):setcount(0);
//   }
//   const closeAlert = () => {
//     setShowAlert(true);
//   };
//   useEffect(()=>{
//     const getProduct = async()=>{
//       try {
//         const res = await publicRequest.get("/product/find/"+id)
//         setProduct(res.data)
//       } catch (error) {
//         console.log("Error");
//       }
//     };
//     getProduct()
//   },[id]);
//   const success = () => {
//     messageApi.open({
//       type: 'success',
//       content: 'Item added successfully ',
//     });
//   };
//   const warning = () => {
//     messageApi.open({
//       type: 'warning',
//       content: 'Please select all details',
//     });
//   };
//   const handleClick = () => {
//     if (count > 0 && color !== "" && size !== "") {
//       dispatch(
//         addProduct({...product, count, color, size})
//       );
//       success();
//     } else {
//       warning(); 
//     }
//   };
//   return (
//     <>
//     {contextHolder}
//     <Container>
//       <Heading />
//       <Announcements />
//       <Wrapper>
//         <ImgContainer>
//         <Image src= {product.img} />
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{product.company}</Title>
//           <Title>{product.title}</Title>
//           <Price>₹{product.price} <del style={{fontSize:"20px",color:"#6c757d"}}>₹{product.prevPrice}</del></Price>
//           <div style={{color:"#bf0603"}}>You save:₹{product.prevPrice-product.price}({(((product.prevPrice-product.price)/product.prevPrice)*100).toFixed(2)}%)</div>
//           <div style={{display:"flex",marginTop:"10px"}}>{renderStars()} <span style={{marginLeft:"10px"}}>{product.star}</span></div>
//           <Description>{product.description}</Description>
//           <FilterContainer >
//           <Filter>
//   <FilterTitle>Color</FilterTitle>
//   {product.color?.map(c => (
//   <FilterColor
//     color={c}
//     key={c}
//     onClick={() => setColor(c)}
//     isSelected={c === color}
//   />
// ))}
// </Filter>
//             <Filter>
//               <FilterTitle>Size</FilterTitle>
//               <FilterSize onChange={(e) => setsize(e.target.value)}>
//   {product.size?.map((s) => (
//     <FilterSizeOption key={s}>{s}</FilterSizeOption>
//   ))}
// </FilterSize>

//             </Filter>
//           </FilterContainer>
//           <AddContainer>
//             <AmountContainer>
//               <RemoveOutlinedIcon onClick={Decum}/>
//               <Amount>{count}</Amount>
//               <AddOutlinedIcon onClick={Incum}
//             isDisabled={count >= 5}/> 
//             </AmountContainer>
//             <Space>
//             <Button onClick={handleClick}>ADD TO CART</Button>
//             </Space>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//       <ProductPolicy />
//       <Newsletter />
//       <Footer />
//       {showAlert && <AlertPage onClose={closeAlert} />}
//     </Container>
    
//     </>
//   )
// }

// export default ProductPage
import { RiRefund2Line } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { TbBrandAuth0 } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product,setProduct] = useState({});
  const state = useState();
  const [count,setcount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [color, setColor] = useState("");
  const [size, setsize] = useState("");
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage()
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.star; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />);
    }
    return stars;
  };
  const Incum=()=>{
    count < 5 ? setcount(count + 1) : setShowAlert(true);
  }
  const Decum=()=>{
    count>0?setcount(count-1):setcount(0);
  }
  const closeAlert = () => {
    setShowAlert(true);
  };
  useEffect(()=>{
    const getProduct = async()=>{
      try {
        const res = await publicRequest.get("/product/find/"+id)
        setProduct(res.data)
      } catch (error) {
        console.log("Error");
      }
    };
    getProduct()
  },[id]);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Item added successfully ',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Please select all details',
    });
  };
  const handleClick = () => {
    if (count > 0 && color !== "" && size !== "") {
      dispatch(
        addProduct({...product, count, color, size})
      );
      success();
    } else {
      warning(); 
    }
  };
  console.log(product)
  return (
    <>
     {contextHolder}
           <Heading />
       <Announcements />
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2
     gap-5 lg:mt-10  ">
      <article>
      <Image src={product.img}  width={400} className="w-full rounded-2xl mt-10" />
    <ul className="flex items-cenetr justify-start gap-3 flex-wrap">
       <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <li key={product.id} className='' >
      <Image src={product.img1} width={70} className='w-20 rounded-xl'/>
      <Image src={product.img2} width={70}  className='w-20 rounded-xl'/>
      <Image src={product.img3} width={70} className='w-20 rounded-xl'/>
      <Image src={product.img4} width={70} className='w-20 rounded-xl'/>
      <Image src={product.img5} width={70} className='w-20 rounded-xl'/>
      </li> 
  </Image.PreviewGroup>
    </ul>
    </article>
    <article className="px-8 pb-10 "> 
      <h2 className="bg-blue-200 py-1 px-2 text-green-500 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mt-12 mb-10" >{product.company}</h2>
      <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">{product.title}</h1>
      <p className='text-slate-600 mb-10 leading-relaxed '>{product.description}</p>
      <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2" >
        <ul className="flex items-center gap-5">
          <li className="text-slate-900 font-bold text-2xl ">₹{product.price}</li>
          <li className="bg-slate-100 py-1 px-2 text-green-400 tracking-wide text-sm font-bold inline-block rounded shadow ">{(((product.prevPrice-product.price)/product.prevPrice)*100).toFixed(2)}%</li>
        </ul>
        <p className="text-slate-600 text-sm "><s>₹{product.prevPrice}</s></p>
        <ul><li className='font-bold inline-block rounded shadow'>Color:
        <select onChange={(e) => setColor(e.target.value)}><option  value='null'>Select Color</option>
        <option>{product.color}</option>
        </select>
        </li></ul>
        <ul><li className='font-bold inline-block rounded shadow'>Size:<select onChange={(e) => setsize(e.target.value)}>
          <option className="w-4"  value='null'>Select size </option>
          {product.size?.map((s) => (
     <option key={s}>{s}</option>
  ))}
          </select></li></ul>
      </div>
      <div className="mt-10 lg:flex items-center justify-between ">
        <ul className="flex items-center lg:w-4/12  justify-between bg-slate-100 py-2 px-4 rounded shadow ">
          <li onClick={Decum} className='cursor-pointer'><RemoveOutlinedIcon /></li>
          <li>{count}</li>
          <li onClick={Incum} className='cursor-pointer'><AddOutlinedIcon /></li>
        </ul>

        <Button className="flex items-center gap-4 mb-3 bg-green-600 py-2 px-4 text-white font-bold rounded-lg shadow w-full lg:w-3/12 text-center  justify-center cursor-pointer" onClick={handleClick}><AiOutlineShoppingCart /> Add to Cart</Button>
        </div>
        <hr className='mt-5'/>
        <ul className='flex justify-between mt-6'>
          <Tooltip title="7 day Return"><li style={{fontSize:"29px" , alignItems:"center"}} className='inline-block rounded '><TbTruckReturn /></li></Tooltip>
          <Tooltip title="Easy Refund/Replacement"><li style={{fontSize:"29px" , alignItems:"center"}} className='inline-block rounded '><RiRefund2Line /></li></Tooltip>
          <Tooltip title="Top Brands"><li style={{fontSize:"29px" , alignItems:"center"}} className='inline-block rounded '><TbBrandAuth0 /></li></Tooltip>
          <Tooltip title="Installation Service"><li style={{fontSize:"29px" , alignItems:"center"}} className='inline-block rounded '><MdOutlineMiscellaneousServices /></li></Tooltip>
          <Tooltip title="Free delivery"><li style={{fontSize:"29px" , alignItems:"center"}} className='inline-block rounded '><TbTruckDelivery /></li></Tooltip>
        </ul>
    </article>
    </section>
    <Newsletter />
    <Footer />
    {showAlert && <AlertPage onClose={closeAlert} />}
    </>
  )
}

export default ProductPage