import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './Search';
import SearchResults from './SearchResults';
import axios from 'axios';
import { Button, Input, Popover, Space } from 'antd';
import { CiSearch } from 'react-icons/ci';
const AnnouncementOverlay = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const AnnouncementCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AnnouncementTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
`;

const AnnouncementContent = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
`;

const CloseButton = styled.button`
  background: #ff7e5f;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #feb47b;
    transform: scale(1.1);
  }
`;


const AlertSearch = ({cat}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const handleClose = () => {
    setIsVisible(false);
  };
  const content = (
    <div>
        <SearchBar setResults={setResults}/>
        <SearchResults results={results}/>
    </div>
  );
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

  const onSearch = (event) => {
    event.preventDefault();
  }
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    // <AnnouncementOverlay isVisible={isVisible}>
    //   <AnnouncementCard>
    //     <AnnouncementTitle>ALERT!!</AnnouncementTitle>
        
    //     <CloseButton onClick={handleClose}>Close</CloseButton>
    //   </AnnouncementCard>
    // </AnnouncementOverlay>
    <Space wrap>
    <Popover content={content} title="Search Your Product" trigger="click">
    <div className="search-box" style={{ display: "flex", flexDirection: "row", marginBottom: "12px" }}>
          <CiSearch style={{ fontSize: 29, marginTop: "5px", cursor: "pointer", color: "black" }}  />
          <Input style={{ color: "#fff" }} />
    </div>
    </Popover>
  </Space>

  );
};

export default AlertSearch;
