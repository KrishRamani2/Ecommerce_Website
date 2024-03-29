import React, { useEffect, useState } from 'react';
import { Button, Input, Space, Table, message } from 'antd';
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { Collapse } from 'antd';
import { FaCaretDown } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { Radio } from 'antd';
import { QRCode } from 'antd';
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from '../../content/RequestMethod';
import axios from 'axios';

const Tabless = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const products = useSelector((state) => state.cart.products);
  const [sortedInfo, setSortedInfo] = useState({});
  const [text, setText] = React.useState('https://zeuxinnovation.com/wp-content/uploads/2023/04/maximising-user-satisfaction-1.jpg');
  const user = useSelector((state) => state.cart.user);
  const orderTotalCount = products.reduce((total, product) => total + product.count, 0);
  const getTotalPrice = (count, price) => count * price;
  const navigate = useNavigate();
  const delivery = 40;
  const platformfee = 5;
  const handlingcharge = 25;
  const handle = 0.4 * handlingcharge;
  const totalhandle = handlingcharge - handle;
  const orderTotal = products.reduce((total, product) => total + getTotalPrice(product.count, product.price), 0);
  const orderSavings = products.reduce((total, product) => total + delivery + platformfee + totalhandle + getTotalPrice(product.count, (product.prevPrice - product.price)), 0);
  const orderfinal = products.reduce((total, product) => total + getTotalPrice(product.count, product.price), 0);
  const orderprevprice = products.reduce((total, product) => total + getTotalPrice(product.count, product.prevPrice), 0);
  const applyCharges = orderTotal >= 250;
  const ordertotals = products.reduce((total, product) => total + delivery + platformfee + totalhandle + handle + getTotalPrice(product.count, (product.prevPrice)), 0);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  const KEY = "pk_test_51OPdfHSJqp2Eim97slkP7D9StEmIP94k7XFry53Q9sH2PxIxRvnPH4PlC8ahmHkmrEkkVxFFrShOWln6tDLE07bv00uDbzGVNR";
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('http://localhost:3000/api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: { ordertotals },
        });
        message.success("Done");
        navigate("/successfulpayment");
      } catch (error) {
        message.error("Error");
      }
    };
    
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken, ordertotals, navigate]);

  const handleChange = (pagination, filters, sorter, e) => {
    e.preventDefault();
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'image',
      render: img => <Image src={img} width={50} style={{ borderRadius: '50%' }} />,
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      ellipsis: true,
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      ellipsis: true,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (_, record) => getTotalPrice(record.count, record.price),
      ellipsis: true,
    },
  ];

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f7f7f7',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Space style={{ marginBottom: '16px' }}>
        <Link to="/cart"><Button>Back to Cart</Button></Link>
      </Space>
      <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#333', textAlign: "center" }}>Order Summary</h2>
      <Table
        columns={columns}
        dataSource={products}
        onChange={handleChange}
        pagination={false}
        footer={() => (
          <div style={{ textAlign: 'right', fontWeight: 'bold', color: "#06d6a0" }}>
            Savings: ₹{orderSavings.toFixed(2)}
          </div>
        )}
      />
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
      >
        <Collapse.Panel
          key="1"
          header="Billing Summary"
          extra={<RiBillLine />}
          style={{
            marginBottom: 24,
            background: '#fff',
            borderRadius: '8px',
            border: 'none',
          }}
        >
          <div>
            <p>Cart Value: <span style={{ textDecoration: 'line-through', color: 'grey' }}>₹{orderprevprice}</span> ₹{orderTotal.toFixed(2)} </p>
            <hr />
            <br />
            <p>Handling Charges: {applyCharges ? <span><span style={{ textDecoration: 'line-through', color: 'grey' }}>₹{handlingcharge}</span> ₹{handle}</span> : `₹${handlingcharge}`}</p>
            <hr />
            <br />
            <p>Delivery: {applyCharges ? <span><span style={{ textDecoration: 'line-through', color: 'grey' }}>₹{delivery}</span> ₹0</span> : `₹${delivery}`}</p>
            <hr />
            <br />
            <p>Platform fees: ₹{platformfee}</p>
            <hr />
            <br />
            <p>Order Total: <span style={{ textDecoration: 'line-through', color: 'grey' }}>₹{ordertotals}</span> ₹{orderfinal + (applyCharges ? handlingcharge + delivery : 0)}</p>
            <hr />
            <br />
            <p style={{ color: "#06d6a0" ,fontWeight:"bolder"}}>Savings: ₹{orderSavings}</p>
          </div>
        </Collapse.Panel>
        <Collapse.Panel
          key="2"
          header="User Details"
          extra={<FaCaretDown />}
          style={{            marginBottom: 24,
            background: '#fff',
            borderRadius: '8px',
            border: 'none',
          }}
        >
          <div style={{display:"flex",flexDirection:"row"}}>
            <Input placeholder="Enter Flat No & Residence" style={{margin:"10px"}}></Input>
            <Input placeholder="Enter Your Street Address" style={{margin:"10px"}}></Input>
          </div>
          <br />
          <div style={{display:"flex",flexDirection:"row"}}>
            <Input placeholder="Enter Your City" style={{margin:"10px"}}></Input>
            <Input placeholder="Enter Your State" style={{margin:"10px"}}></Input>
          </div>
          <br />
          <div style={{display:"flex",flexDirection:"row"}}>
            <Input placeholder="Enter Your Pincode" type='number' style={{margin:"10px"}}></Input>
            <Input placeholder="Enter Your Contact Number" type='number' style={{margin:"10px"}}></Input>
          </div>
          <div>
            <Button style={{margin:"10px"}}>Submit</Button>
          </div>
        </Collapse.Panel>
        <Collapse.Panel
          key="3"
          header="Payment Mode"
          extra={<FaCaretDown />}
          style={{
            marginBottom: 24,
            background: '#fff',
            borderRadius: '8px',
            border: 'none',
          }}
        >
          <div>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>BHMI/UPI</Radio>
                <Radio value={2}>Credit/Debit</Radio>
                <Radio value={3}>COD</Radio>
              </Space>
            </Radio.Group>
          </div>
          {value === 1 && (
            <Space direction="vertical" align="center">
              <QRCode value={text || '-'} />
            </Space>
          )}
          {value === 2 && (
            <StripeCheckout
              billingAddress
              shippingAddress
              description={`Your total is ${orderTotal}`}
              amount={orderTotal * 100}
              currency="INR"
              token={onToken}
              stripeKey={KEY}
            />
          )}
          {value !== 2 && (
            <div>
              <Button>Pay</Button>
            </div>
          )}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default Tabless;

           
