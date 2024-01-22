import React from 'react'
import "./Newproductpanel.css"
import Topbar from '../topbar/Topbar'
import NewProductpage from '../../content/newproductpage/NewProductpage'
import Sidebar from '../Sidebar/Sidebar'
const NewProductinfo = () => {
  return (
    <div>
        <Topbar />
        <div className="container">
            <Sidebar/>
            <NewProductpage />
        </div>
    </div>
  )
}

export default NewProductinfo