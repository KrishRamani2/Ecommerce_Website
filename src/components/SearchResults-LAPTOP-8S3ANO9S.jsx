// SearchResults.js
import React from 'react';
import "./SearchResults-LAPTOP-8S3AN09S.css";
import SearchProduct from './SearchProduct';

const SearchResults = ({ results, isActive }) => {
  // Filter out duplicate results based on product id
  const uniqueResults = results.filter((result, index, self) =>
    index === self.findIndex((r) => (
      r.id === result.id
    ))
  );

  return (
    <div className={`results-list ${isActive ? 'search-active' : ''}`}>
      <div className="overlay"></div>
      <div className='search-container'>
        {uniqueResults.map((result) => (
          <SearchProduct result={result} key={result.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
