import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FilteredItem from './FilteredProducts';
import ErrorProductPage from './ErrorProduct';

const RecommendedContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-left: 18px;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 16px;
  background: #323232;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #555555;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin: 16px;
  font-size: 16px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Recommended = ({ cat }) => {
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [error, setError] = useState(false);

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
        setError(true);
      }
    };
    getProducts();
  }, [cat]);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany((prevCompany) => (prevCompany === company ? null : company));
  };

  const handleSortClick = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const priceFilter = (product) => {
    if (!selectedPrice) {
      return true;
    }

    const [min, max] = selectedPrice.split('-').map(Number);

    if (selectedPrice === "10000+") {
      return product.price >= 10000;
    } else {
      return product.price >= min && product.price <= max;
    }
  };

  const colorFilter = (product) => {
    return !selectedColor || product.color.includes(selectedColor);
  };

  const companyFilter = (product) => {
    return !selectedCompany || product.company === selectedCompany;
  };

  const filteredProducts = products.filter(
    (product) => priceFilter(product) && colorFilter(product) && companyFilter(product)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const uniqueCompanies = [...new Set(products.map((product) => product.company))];
  const categoriesToShow = uniqueCompanies.slice(0, 3);

  if (error) {
    return (
      <RecommendedContainer>
      <ErrorProductPage />
      </RecommendedContainer>
    );
  }

  if (!filteredProducts.length) {
    return (
      <RecommendedContainer>
        <ErrorProductPage />
      </RecommendedContainer>
    );
  }

  return (
    <RecommendedContainer>
      <Title>Top Brands</Title>
      <FlexContainer>
        <div>
          {categoriesToShow.map((company, index) => (
            <Button
              key={company}
              className={`recommended-btns ${selectedCompany === company ? 'active' : ''}`}
              onClick={() => handleCompanyClick(company)}
            >
              {company}
            </Button>
          ))}
        </div>
        <Select value={selectedPrice} onChange={handlePriceChange}>
          <option value="">Select Price</option>
          <option value="0-1000">Upto 1000</option>
          <option value="1000-2500">1000 - 2500</option>
          <option value="2500-5000">2500 - 5000</option>
          <option value="5000-10000">5000 - 10000</option>
          <option value="10000+">10000 and above</option>
        </Select>
        <Select value={selectedColor} onChange={handleColorChange}>
          <option value="">Select Color</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="">Others</option>
        </Select>
        <Button className='star-button' onClick={handleSortClick}>
          Newest Collection
        </Button>
      </FlexContainer>
      <ProductsGrid>
        {sortedProducts.map((product) => (
          <FilteredItem key={product._id} item={product} />
        ))}
      </ProductsGrid>
    </RecommendedContainer>
  );
};

export default Recommended;
