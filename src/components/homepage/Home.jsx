import React from 'react'
import "./Home.css"
import Featureinfo from '../featuredinfo/Featureinfo'
import Chart from '../Charts/Chart';
import { userdata } from '../Charts/data';
import WidgetSmall from '../../widgetSmall/WidgetSmall';
import WidgetLarge from '../../widgetLarge/WidgetLarge';
import HomepageCharts from '../Charts/HomepageCharts';
const Home = () => {
  return (
    <div className='home'>
       <Featureinfo />
       <Chart data={userdata} title="User Analytics" grid dataKey="ActiveUser"  />
       <div className="homeWidgets">
       <WidgetSmall />
       <WidgetLarge />
       </div>
       <HomepageCharts />
    </div>
  )
}

export default Home