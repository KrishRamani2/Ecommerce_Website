import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return (
    <Result
    status="404"
    title="Empty Cart"
    subTitle="          It seems like your shopping cart is empty. Start adding some amazing
    products to your cart and enjoy a great shopping experience!..."
    extra={<Link to="/" ><Button type="primary">Back Home</Button></Link>}
  />
  )
}

export default EmptyCart