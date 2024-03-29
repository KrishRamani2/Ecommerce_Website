import React from 'react';
import "./SearchResults.css";
import SearchProduct from './SearchProduct';

const SearchResults = ({ results }) => {
  // Create a set to keep track of unique company names
  const uniqueCompanies = new Set();

  // Filter out duplicates and render SearchProduct for each unique company
  const uniqueResults = results.filter(result => {
    if (!uniqueCompanies.has(result.company)) {
      uniqueCompanies.add(result.company);
      return true;
    }
    return false;
  });

  // Sort uniqueResults by company name and category
  uniqueResults.sort((a, b) => {
    // Sort by company name
    const companyComparison = a.company.localeCompare(b.company);
    if (companyComparison !== 0) {
      return companyComparison;
    }
    // If company names are the same, sort by category
    return a.category.localeCompare(b.category);
  });

  return (
    <div className='results-list'>
      {uniqueResults.map((result, index) => (
        <SearchProduct result={result} key={index} />
      ))}
    </div>
  );
}

export default SearchResults;

