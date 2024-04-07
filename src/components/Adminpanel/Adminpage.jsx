import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import "./Adminpage.css"
import Home from '../homepage/Home'
import { useSelector } from 'react-redux'
const Adminpage = () => {
  return (
    <>
    <Topbar />
    <div className="container">
        <Sidebar />
        <Home />
        </div>
    </>
  )
}

export default Adminpage