import React from 'react'
import "./SearchResults.css"
import SearchProduct from './SearchProduct'
const SearchResults = ({results}) => {
  return (
    <div className='results-list'>
        {
            results.map((result,id)=>{
                return <SearchProduct result={result} key={id} />
            })
        }
    </div>
  )
}

export default SearchResults