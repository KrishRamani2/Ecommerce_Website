import React from 'react'
import "./UserId.css"
import UserIdpage from '../../content/useridpage/UserIdpage'
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
const UserId = () => {
  return (
    <div>
        <Topbar />
        <div className="container">
            <Sidebar/>
            <UserIdpage />
        </div>
    </div>
  )
}

export default UserId