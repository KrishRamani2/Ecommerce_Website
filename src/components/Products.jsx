import { useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../content/data';
import ProductItem from './Product';
import { useEffect } from 'react';
import axios from 'axios';
const Container = styled.div`
padding: 20px;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`


const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async()=>{
      try {
        const res = await axios.get(
          cat?`http://localhost:3000/api/product?category=${cat}`:
          "http://localhost:3000/api/product"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error");
      }
    };
    getProducts();
  },[cat]);
  
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item =>
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        )
      )
    )
  },[products,cat,filters]);

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        );
    }else if((sort === "asc")){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
        );
    }else{
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
        );
    }
  },[sort])
  return (
    <Container>
        {cat ? filteredProducts.map(item=>(
            <ProductItem item={item} key={item.id} />
        )):popularProducts.map(item=>(
          <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products