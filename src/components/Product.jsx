import styled from "styled-components";
import "./Product.css"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IoIosSearch } from "react-icons/io";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill, BsFillHeartFill } from "react-icons/bs";
import FilteredItem from "../content/ProductFilter/Recommended/FilteredProducts";
import { useEffect, useState } from "react";
import axios from "axios";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  margin-top: 70px;
  margin-bottom: -15px;
  cursor: pointer;
  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
  @media screen and (max-width:470px) {
    padding: 10px;
  flex-direction: column;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    color: white;
  }
`;

const Images = styled.img`
  height: 75%;
  z-index: 2;
  transition: all 0.5s ease;
  filter: brightness(0.9) contrast(1.2);
  @media screen and (max-width:470px) {
    width:75%;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    color: white;
  }
  }
`;

const ProductItem = ({ item , cat }) => {

  return (
    // <Link to={`/productpage/${item._id}`} >
    // <Container>
    //   <Circle />
    //   <Images src={item.img} item={item} />
    //   <Info>
    //     <Icon>
    //       <MdAddShoppingCart />
    //     </Icon>
    //     <Icon>
    //     <Link to={`/productpage/${item._id}`} >
    //       <IoIosSearch />
    //       </Link>
    //     </Icon>
    //     <Icon>
    //       <FavoriteBorderRoundedIcon />
    //     </Icon>
    //   </Info>
    // </Container>
    // </Link>
   <> 
   
    <section className="card-container">
      <section className="card"> 
        <img src={item.img} alt={item.categories} className="card-img" />
        <div className="card-details">
          <section className="card-reviews">
            <AiFillStar className="rating-star"/>
            <AiFillStar  className="rating-star" />
            <AiFillStar  className="rating-star"/>
            <AiFillStar  className="rating-star"/>
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
            ₹{item.price} <del>₹{item.prevPrice}</del> 
            </div>
            <div className="card-discount">{(((item.prevPrice-item.price)/item.prevPrice)*100).toFixed(2)}%</div> 
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
    </section>
    </>
  );
};

export default ProductItem;