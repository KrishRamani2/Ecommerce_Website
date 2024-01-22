import Heading from '../components/Heading';
import Announcements from '../components/Announcements';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from "styled-components"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button } from '@mui/material';
import { useState } from 'react'; 
import AlertPage from "../components/AlertPage";
import { useLocation } from 'react-router-dom';
import publicRequest from './RequestMethod';
import { useEffect } from 'react';
import {addProduct} from "../redux/CartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
@media screen and (max-width:470px) {
    padding: 10px;
  flex-direction: column;
  }
`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 60%;
height: 50vh;
object-fit: cover;
@media screen and (max-width:470px) {
  height: 40vh;
  }
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
@media screen and (max-width:470px) {
  padding: 10px;
  }
`
const Title = styled.h1`
font-weight: 200;
`
const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.h2`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
@media screen and (max-width:470px) {
  width: 100%;
  }
`
const Filter = styled.div`
display: flex;
align-items: center;


`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;

`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid black;

  &:hover {
    transform: scale(1.1);
  }

  ${props =>
    props.selected &&
    `
    border: 2px solid teal;
  `}
`;
const FilterSize = styled.select`
margin-left:10px;
padding: 10px;
cursor: pointer;
  outline: none;
  border-radius: 15px;

  &:hover {
    border-color: #666;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width:470px) {
  width: 100%;
  }
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`
const Buttons = styled.button`
border-radius: 15px;
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
  background-color: #f8f4f4;
}
`
const AddOutlinedIconStyled = styled(AddOutlinedIcon)`
 
`;
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
  const handleClick = ()=>{
    dispatch(
      addProduct({...product, count ,color:product.color,size}));
  }
  return (
    <Container>
      <Heading />
      <Announcements />
      <Wrapper>
        <ImgContainer>
        <Image src= {product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>₹{product.price}</Price>
          <Description>{product.description}</Description>
          <FilterContainer >
          <Filter>
  <FilterTitle>Color</FilterTitle>
  {product.color?.map(c => (
  <FilterColor
    color={c}
    key={c}
    onClick={() => setColor(c)}
    isSelected={c === color}
  />
))}
</Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setsize(e.target.value)}>
  {product.size?.map((s) => (
    <FilterSizeOption key={s}>{s}</FilterSizeOption>
  ))}
</FilterSize>

            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveOutlinedIcon onClick={Decum}/>
              <Amount>{count}</Amount>
              <AddOutlinedIcon onClick={Incum}
            isDisabled={count >= 5}/> 
            </AmountContainer>
            <Buttons onClick={handleClick}>ADD TO CART</Buttons>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
      {showAlert && <AlertPage onClose={closeAlert} />}
    </Container>
      
  )
}

export default ProductPage