import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import "./TransactionPage.css"
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import moment from 'moment';
import OrderAccept from './OrderAcceptance';

const TransactionPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [selectedRowId, setSelectedRowId] = useState(null);
  const searchInput = useRef(null);
  const [Orders, setOrders] = useState([]);
  
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/order");
        // Format the date
        const formattedData = res.data.map(item => ({
          ...item,
          createdAt: moment(item.createdAt).format("DD-MM-YY")
        }));
        setOrders(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);
  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'userId',
      key: 'userId',
      width: '30%',
      ...getColumnSearchProps('userId'),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '20%',
      ...getColumnSearchProps('createdAt'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      ...getColumnSearchProps('amount'),
      sorter: (a, b) => a.amount - b.amount,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...getColumnSearchProps('status'),
    },
    {
      title: 'Action',
      render: (text, record) => (
        <Button 
          type="primary" 
          icon={<EditOutlined />} 
          onClick={() => handleEdit(record.userId)}
        >
          Edit
        </Button>
      ),
    },
  ];
  
  const handleEdit = (userId) => {
    setSelectedRowId(prevId => prevId === userId ? null : userId);
  };

  return (
    <div className="user">
      <Table columns={columns} dataSource={Orders} />
      {selectedRowId && <OrderAccept userId={selectedRowId} />}
    </div>
  );
};

export default TransactionPage;
