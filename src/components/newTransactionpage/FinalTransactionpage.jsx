import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import TranscationPage from '../../content/Transaction/TranscationPage'
import "./NewTransactionpage.css"
const NewTransactionpage = () => {
  return (
    <div>
      <Topbar/>
    <div className="container">
        <Sidebar />
        <TranscationPage />
        </div>
    </div>
  )
}

export default NewTransactionpage