import React from 'react'
import "./Userpage.css"
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import Userlist from '../../content/userlist/userlist'

const Userpage = () => {


  return (
    <div>
      <Topbar />
    <div className="container" style={{display:"flex"}}>
        <Sidebar />
        <Userlist />
    </div>
    </div>
  )
}

export default Userpage