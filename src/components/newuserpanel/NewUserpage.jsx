import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import Newuser from '../../content/NewUserPage/Newuser'

const NewUserpage = () => {


  return (
    <div>
      <Topbar/>
    <div className="container">
        <Sidebar />
        <Newuser />
        </div>
    </div>
  )
}

export default NewUserpage