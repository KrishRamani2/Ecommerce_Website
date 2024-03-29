import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const Badgehome = ({total}) => (
  <Space size="middle">
    <Badge count={total} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default Badgehome;