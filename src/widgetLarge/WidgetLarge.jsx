import React, { useEffect, useState } from 'react'
import "./WidgetLarge.css"
import axios from 'axios'
import {format} from "timeago.js"
const WidgetLarge = () => {
  const Button = ({type}) =>{
    return <button className={' widgetLargeButton ' + type }>{type}</button>
  }
  const [Orders,setOrders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/order");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrder();
  }, []);
  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest Transcation</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeth">Customer</th>
          <th className="widgetLargeth">Date</th>
          <th className="widgetLargeth">Amout</th>
          <th className="widgetLargeth">Status</th>
        </tr>
        {Orders.map((order)=>(
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgtSZigSlLLo14ACBKMEh1zvJrIKOsxXog&usqp=CAU" alt="" className="widgetLargeImg" />
            <span className="Widgetlargename">{order.userId}</span>
          </td>
          <td className="widgetLargeDate">{format(order.createdAt)}</td>
          <td className="widgetLargeAmount">₹{order.amount}</td>
          <td className="widgetLargeButton"><Button type={order.status}/></td>
        </tr>
        ))}
      </table>
    </div>
  )
}

export default WidgetLarge