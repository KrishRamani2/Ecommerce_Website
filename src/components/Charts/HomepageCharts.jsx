import React from 'react'
import "./Homepagecharts.css"
import Barchart from './Barchart'
import { SalesData } from '../../content/datauser'
import AttractivePieChart from './PieChart'
import { Pidata } from '../../content/datauser'
import SmallPieChart from './PieChart'
const HomepageCharts = () => {
  return (
    <div className="productTop">
    <div className="productLeft">
      <label style={{fontWeight:"600"}}>Sales Performance </label>
    <Barchart style={{width:"100px"}} data={SalesData}/>
    </div>
    <div className="productRight">
        <SmallPieChart data={Pidata}/>
    </div>
  </div>
  )
}

export default HomepageCharts