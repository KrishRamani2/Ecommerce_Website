import React, { useEffect } from 'react';
import "./Productadmin.css";
import { Table, Button, Modal, Form, Input, Popconfirm } from 'antd';
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { deleteProducts, getProducts } from '../../redux/ApiCallsAdmin';
import { useDispatch, useSelector } from 'react-redux';

const Productadmin = () => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [editingKey, setEditingKey] = useState('');
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteProducts(id, dispatch);
      };
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
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
            dataIndex: 'instock',
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
            dataIndex: 'instock',
            render: (instock) => (
                <span style={{ color: instock === 0 ? 'red' : 'green' }}>
                    {instock === 0 ? 'Out of Stock' : 'InStock'}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Link to={"/product/" + record._id} style={{ textDecoration: "none" }}>
                        <Button type="primary" onClick={() => handleEdit(record.key)}>
                            <MdModeEdit style={{ marginLeft: "2px", cursor: "pointer" }} />
                        </Button>
                    </Link>
                    <Popconfirm title="Are you sure to delete this user?" onConfirm={() => handleDelete(record._id)}>
                        <Button type="danger">
                            <MdDeleteOutline style={{ fontSize: "25px", color: "#d90429", marginLeft: '10px', cursor: "pointer", top: 0 }} onClick={() => handleDelete(record._id)} />
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
        <div className='product'>
            Click here to Add a new product    <Link to={"/newproduct"} ><Button>Create</Button></Link>
            <div className="container">
                <Table
                    rowSelection={products}  // Use datas here
                    columns={columns}
                    dataSource={products}    // Use datas here
                    onChange={onChange}
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    )
}

export default Productadmin;