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
  const { user } = useSelector((state) => state.user);
  const orderTotalCount = products.reduce((total, product) => total + product.count, 0);
  const getTotalPrice = (count, price) => count * price;
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
  const cart = useSelector((state) => state.cart);
  const quantity = cart.products.length;
  console.log(quantity,ordertotals,user);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  const amount = ordertotals;

  const generateProductID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let productID = '';
    const length = 24;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      productID += characters[randomIndex];
    }

    return productID;
  };
  const [productId,setProductId] = useState(generateProductID);
  const [addressflatno,setAddressflatno]  = useState('');
  const [addressstreet,setAddressstreet]  = useState('');
  const [addresscity,setAddresscity]  = useState('');
  const [addressstate,setAddressstate]  = useState('');
  const [addresspin,setAddresspin]  = useState('');
  const [addresscontact,setAddresscontact]  = useState('');
  const userId = user._id;
  const handleConfirm= async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/api/order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId,productId,addressflatno,addressstreet,addresscity,addressstate,addresspin,addresscontact,amount,quantity}),
        });

        if (!response.ok) {
            throw new Error('Failed to subscribe');
        }

        message.success('Order Executed Successfully!');
        navigate('/successfulpayment')
        setAddressflatno('');
        setAddresscity('');
        setAddresscontact('');
        setAddressstate('');
        setAddresspin('');
        

    } catch (error) {
        console.error('Error saving:', error.message);
        message.error('Order Execution Failed!');
        
    }
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
            <Input placeholder="Enter Flat No & Residence" style={{margin:"10px"}}  
            value={addressflatno}
            onChange={(e)=>setAddressflatno(e.target.value)}
            ></Input>
            <Input placeholder="Enter Your Street Address" style={{margin:"10px"}}
             onChange={(e)=>setAddressstreet(e.target.value)}
            ></Input>
          </div>
          <br />
          <div style={{display:"flex",flexDirection:"row"}}>
            <Input placeholder="Enter Your City" style={{margin:"10px"}}
             onChange={(e)=>setAddresscity(e.target.value)}
            ></Input>
            <Input placeholder="Enter Your State" style={{margin:"10px"}}
             onChange={(e)=>setAddressstate(e.target.value)}
            ></Input>
          </div>
          <br />
          <div style={{display:"flex",flexDirection:"row"}}>
            <Input placeholder="Enter Your Pincode" type='number' style={{margin:"10px"}}
             onChange={(e)=>setAddresspin(e.target.value)}
            ></Input>
            <Input placeholder="Enter Your Contact Number" type='number' style={{margin:"10px"}}
             onChange={(e)=>setAddresscontact(e.target.value)}
            ></Input>
          </div>
          <div>
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
              <Button onClick={handleConfirm} >Pay</Button>
            </div>
          )}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default Tabless;

           
