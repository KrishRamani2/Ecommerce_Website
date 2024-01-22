import React from 'react'
import "./Productpanel.css"
import Topbar from '../topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Doughnut,Line} from "react-chartjs-2" 
import EditProduct from '../../content/Editproduct/EditProduct'
const EditProductinfo = () => {
  return (
    <div>
        <Topbar />
        <div className="container">
            <Sidebar/>
            <EditProduct />
        </div>
    </div>
  )
}

export default EditProductinfo