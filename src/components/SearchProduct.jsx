import React from 'react';
import { Link } from 'react-router-dom';
import "./SearchResults.css";

const SearchProduct = ({ result }) => {
  return (
    <Link to={`/products/${result.company}`} style={{
      textDecoration: "none",
      color: "inherit" /* Remove underline from links */
    }}>
      <div className='search-result'>{result.company}</div>
    </Link>
  );
}

export default SearchProduct;
