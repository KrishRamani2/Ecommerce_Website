import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Announcements from '../components/Announcements';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Nav from "./ProductFilter/Navigation/Nav"
import  {useLocation}  from 'react-router-dom';
import Productsn from './ProductFilter/Products/Productsn';
import Recommended from './ProductFilter/Recommended/Recommended';
import SidebarProductPage from './ProductFilter/SidebarProductPage/SidebarProductPage';

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically in the center */
`;

const Filter = styled.div`
margin: 20px;
@media screen and (max-width:470px) {
  width: 0px 20px;
  display: flex;
  flex-direction: column;
  }
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 26px;
  font-weight: 600;
  margin-right: 28px;
  @media screen and (max-width:470px) {
    margin-right: 0px;
    font-size: 18px;
  }
`;

const Select = styled.select`
padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border-radius: 25px;
  &:hover {
    border-color: #666;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  @media screen and (max-width:470px) {
margin:10px 0px ;
  }
`;

const Option = styled.option`
  font-size: 16px;`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
     <Nav />
      <Announcements />
        <Productsn />
        <Recommended />
        <SidebarProductPage />
      {/*<Title>{cat}</Title> 
       <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} >
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Orange</Option>
          </Select>
          <Select name="size" onChange={handleFilters} >
            <Option  disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select  onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (Lower to Higher)</Option>
            <Option value="dec">Price (Higher to Lower)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} /> */}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
