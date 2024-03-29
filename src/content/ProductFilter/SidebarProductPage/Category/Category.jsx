import React, { useState } from 'react'
import "./Category.css"
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

const Category = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/product?category=${cat}`
            : 'http://localhost:3000/api/product'
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log('Error');
      }
    };
    getProducts();
  }, [cat]);

  // Filter products based on category and extract unique companies
  const uniqueCompanies = [...new Set(products.map((product) => product.company))];
  return (
    <>
    <div>
      <h2 className="sidebar-title">Brand Name</h2>
    <div>
      
     {uniqueCompanies.map((company, index) => (
            <label key={company} style={{ marginRight: index % 2 === 0 ? '10px' : '0' }} className="sidebar-label-container" >
              <input type="radio" name="test" />
              <span className="checkmark"></span>{company}
              
            </label>
          ))}
    </div>
    </div>
    </>
  )
}

export default Category