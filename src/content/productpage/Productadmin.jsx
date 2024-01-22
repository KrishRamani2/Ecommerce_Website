import React from 'react'
import "./Productadmin.css"
import { Table, Button, Modal, Form, Input, Popconfirm } from 'antd';
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import { product } from '../datauser';
import {Link} from "react-router-dom"
const Productadmin = () => {

    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [editingKey, setEditingKey] = useState('');
    const [datas,setDatas] = useState(product);
    const handleDelete = (key) => {
      console.log(`Deleting user with key: ${key}`);
    };
    const handleDeleteItem = (key) => {
      console.log('Before Deletion:', datas);
      setDatas((prevDatas) => prevDatas.filter((item) => item.key !== key));
      console.log('After Deletion:', datas);
      console.log(`Delete user with key: ${key}`);
    };
    const columns = [
      {
        title: 'ID',
        dataIndex: 'key',
      },
      {
        title: 'Product',
        dataIndex: 'name',
        
        filters: [
          {
            text: 'Apple',
            value: 'airpods',
          },
          {
            text: 'Submenu',
            value: 'Submenu',
            children: [
              {
                text: 'Green',
                value: 'Green',
              },
              {
                text: 'Black',
                value: 'Black',
              },
            ],
          },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.localeCompare(b.name), // Change sorting logic
        sortDirections: ['descend'],
        render: (text, record) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={record.img} alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <span>{record.name}</span>
          </div>)
      },
      { 
        title: 'Stock',
        dataIndex: 'stock',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.transaction - b.transaction,
        render: (text) => <span>₹ {text}</span>,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text) => (
          <span style={{ color: text === 'Active' ? 'green' : 'red' }}>
            {text === 'Active' ? text : 'Inactive'}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={"/product/"+record.key}  style={{textDecoration:"none"}}><Button type="primary" onClick={() => handleEdit(record.key)}>
              <MdModeEdit style={{marginLeft:"2px",cursor:"pointer"}} />
            </Button></Link>
            <Popconfirm title="Are you sure to delete this user?" onConfirm={() => handleDelete(record.key)}>
              <Button type="danger" >
                <MdDeleteOutline style={{fontSize:"25px" , color:"#d90429",marginLeft: '10px' ,cursor:"pointer",top:0}}  onClick={()=>handleDeleteItem(record.key)}/>
              </Button>
            </Popconfirm>
          </span>
        ),
      },
    ];
    const handleEdit = (key) => {
      setEditingKey(key);
      const userToEdit = data.find((user) => user.key === key);
      form.setFieldsValue(userToEdit);
      setVisible(true);
    };
  
   
  
    const handleSave = async () => {
      try {
        const values = await form.validateFields();
        const updatedData = data.map((user) => (user.key === editingKey ? { ...user, ...values } : user));
        console.log('Updated Data:', updatedData);
        // You can update the state or perform other actions with the updated data
        setVisible(false);
        setEditingKey('');
      } catch (errorInfo) {
        console.log('Failed:', errorInfo);
      }
    };
  
    const handleCancel = () => {
      setVisible(false);
      setEditingKey('');
    };
    
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('selectedRowKeys:', selectedRowKeys);
        console.log('selectedRows:', selectedRows);
      },
    };
  
    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
  return (
    <div className='product'><div className="container">
    <Table
      rowSelection={datas}  // Use datas here
      columns={columns}
      dataSource={datas}    // Use datas here
      onChange={onChange}
      style={{ width: '100%' }}
    />
        </div></div>
  )
}

export default Productadmin