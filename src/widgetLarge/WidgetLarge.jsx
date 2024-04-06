import React, { useEffect, useState } from 'react';
import "./WidgetLarge.css";
import axios from 'axios';
import { format } from "timeago.js";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>;
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/order");
        // Sort orders by createdAt date in descending order
        const sortedOrders = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Take only the top 5 orders
        const topFiveOrders = sortedOrders.slice(0, 5);
        setOrders(topFiveOrders);
      } catch (error) {
        console.log(error);
      }
    };

    getOrder();
  }, []);

  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <thead>
          <tr className="widgetLargeTr">
            <th className="widgetLargeth">Customer</th>
            <th className="widgetLargeth">Date</th>
            <th className="widgetLargeth">Amount</th>
            <th className="widgetLargeth">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="widgetLargetr" key={order.id}>
              <td className="widgetLargeUser">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgtSZigSlLLo14ACBKMEh1zvJrIKOsxXog&usqp=CAU" alt="" className="widgetLargeImg" />
                <span className="Widgetlargename">{order.userId}</span>
              </td>
              <td className="widgetLargeDate">{format(order.createdAt)}</td>
              <td className="widgetLargeAmount">₹{order.amount}</td>
              <td className="widgetLargeButton"><Button type={order.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLarge;
