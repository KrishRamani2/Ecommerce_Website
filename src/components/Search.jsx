import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBar = ({setResults}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const fetchData = (value) => {
    fetch("http://localhost:3000/api/product") // Corrected the URL by adding "http://"
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user)=>{
          return value && 
          user && 
          user.title && user.company &&
          user.title.includes(value);
         
        });
        
        setResults(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  const handleSearch = (value) => {
    setSearchTerm(value)
    fetchData(value)
  };

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <style>
        {`
          #search-button {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px 0 0 5px;
            background-color: #4caf50;
            color: #fff;
            cursor: pointer;
            outline: none;
            transition: background-color 0.3s ease;
          }

          #search-button:hover {
            background-color: #1ec5f4;
          }

          #search-input {
            width: 500px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 0 5px 5px 0;
            outline: none;
          }

          @media only screen and (max-width: 858px) {
            #search-button,
            #search-input {
              display: none;
            }
          }
        `}
      </style>
      <Button type="button" id="search-button" onClick={handleSearch}>
        <CiSearch size={20} />
      </Button>
      <Input
        type="text"
        placeholder="Enter your search shoes.."
        value={searchTerm}
        style={{width:"5000px"}}
        onChange={(e) => handleSearch(e.target.value)}
      />
              {/* <form onSubmit={handleSearch}>
            <input type="text" name="search" id="srch" placeholder={`Search for "Shoes"`} value={value} onChange={onChange} />
            <button  onClick={()=>onSearch(value)} >
              <i className="fa fa-search"></i>
            </button>
          </form> */}
    </div>
  );
};

export default SearchBar;
