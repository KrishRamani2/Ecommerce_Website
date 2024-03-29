import React, { useEffect, useState } from 'react'
import ProductItem from './Product'
import FilteredItem from '../content/ProductFilter/Recommended/FilteredProducts'
import axios from 'axios';
import ProductList from '../content/ProductList';

const FinalProductPage = ({cat}) => {
    const [products, setProducts] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            cat
              ? `http://localhost:3000/api/product?category=${cat}`
              : 'http://localhost:3000/api/product'
          );
          setProducts(res.data);
          console.log('Products fetched:', res.data);
        } catch (error) {
          console.log('Error fetching products:', error);
        }
      };
      getProducts();
    }, [cat]);
  
    const handleCompanyClick = (company) => {
      console.log('Selected Company:', company);
      
      // Toggle selection: if the same company is clicked again, reset the selection
      setSelectedCompany((prevCompany) => (prevCompany === company ? null : company));
    };
  
    const uniqueCompanies = [...new Set(products.map((product) => product.company))];
    const categoriesToShow = uniqueCompanies.slice(0, 7);
  
    const filteredProducts = selectedCompany
      ? products.filter((product) => product.company === selectedCompany)
      : products;
  
    console.log('Selected Company (State):', selectedCompany);
    console.log('Filtered Products:', filteredProducts);
  return (
    <>
    <div style={{flex:"4"}}>
        {filteredProducts.map((product) => (
          // <div key={product.id}>
          //   <p>{product.name}</p>
          // </div>
          <FilteredItem item={product}/>
        ))}
      </div>
    </>
  )
}

export default FinalProductPage