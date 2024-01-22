import React from 'react'
import "./WidgetLarge.css"
const WidgetLarge = () => {
  const Button = ({type}) =>{
    return <button className={' widgetLargeButton ' + type }>{type}</button>
  }
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
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgtSZigSlLLo14ACBKMEh1zvJrIKOsxXog&usqp=CAU" alt="" className="widgetLargeImg" />
            <span className="Widgetlargename">Jason coursel</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2023</td>
          <td className="widgetLargeAmount">₹20000</td>
          <td className="widgetLargeButton"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgtSZigSlLLo14ACBKMEh1zvJrIKOsxXog&usqp=CAU" alt="" className="widgetLargeImg" />
            <span className="Widgetlargename">Jason coursel</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2023</td>
          <td className="widgetLargeAmount">₹20000</td>
          <td className="widgetLargeButton"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgtSZigSlLLo14ACBKMEh1zvJrIKOsxXog&usqp=CAU" alt="" className="widgetLargeImg" />
            <span className="Widgetlargename">Jason coursel</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2023</td>
          <td className="widgetLargeAmount">₹20000</td>
          <td className="widgetLargeButton"><Button type="Declined"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLarge