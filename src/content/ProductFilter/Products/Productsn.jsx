import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../ecommerceadmin/src/components/sidebar/Sidebar'
import ProductList from '../../ProductList'
import Heading from '../../../components/Heading'
import Announcements from '../../../components/Announcements'
import "./Productsn.css"
import SidebarProductPage from '../SidebarProductPage/SidebarProductPage'
import Newsletter from '../../../components/Newsletter'
import Footer from '../../../components/Footer'
import { useLocation } from 'react-router-dom'
import Recommended from '../Recommended/Recommended'
import axios from 'axios'
import FilteredItem from '../Recommended/FilteredProducts'
import FinalProductPage from '../../../components/FinalProductPage'
const Productsn = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort,setSort] = useState("newest");
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const data = `http://localhost:3000/api/product?category=${cat}`
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
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query,setQuery] = useState("");
  const handleInputChanghe = event =>{
    setQuery(event.target.value);
  }
  console.log(data)
  return (
    <>
   <Heading />
    <Announcements />
      <Recommended cat={cat} onSelectCompany={handleCompanyClick}  /> 
    <Newsletter />
    <Footer />
    </>
  )
}

export default Productsn;