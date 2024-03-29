import React, { useState } from 'react';
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { Layout, Menu, Button, theme } from 'antd';
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import Tabless from './Tables';
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;
const OrderSummary = () => {
  const products = useSelector((state) => state.cart.products);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
     
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 600,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <Tabless />
        </Content>
      </Layout>
    </Layout>
  );
};
export default OrderSummary;