import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import "./Productpanel.css"
import Productadmin from '../../content/productpage/Productadmin'
const Productpanel = () => {


  return (
    <div>
      <Topbar />
    <div className="container">
        <Sidebar />
        <Productadmin />
        </div>
    </div>
  )
}

export default Productpanel 