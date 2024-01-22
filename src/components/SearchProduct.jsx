import React from 'react'
import "./SearchResults.css"
import { Link } from 'react-router-dom';
const SearchProduct = ({result}) => {
  return (
    <Link to={`/productpage/${result._id}`} >
    <div className='search-result' onClick={(e)=>alert(`Clicked on ${result.title}`)}>{result.title}</div>
    </Link>
  )
}

export default SearchProduct