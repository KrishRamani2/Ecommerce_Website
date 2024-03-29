import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const OrderAccept = ({ status, onIconClick }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'finish':
        return <UserOutlined onClick={() => onIconClick('finish')} />;
      case 'process':
        return <LoadingOutlined onClick={() => onIconClick('finish')} />;
      case 'wait':
        return <SmileOutlined onClick={() => onIconClick('finish')} />;
      default:
        return null;
    }
  };

  return (
    <Steps
      items={[
        {
          title: 'Order Accept',
          status: 'process',
          icon: getStatusIcon('process'),
        },
        {
          title: 'Verification',
          status: 'wait',
          icon: getStatusIcon('wait'),
        },
        {
          title: 'Order Packed',
          status: 'wait',
          icon: getStatusIcon('wait'),
        },
        {
          title: 'Order Dispatched',
          status: 'wait',
          icon: getStatusIcon('wait'),
        },
        {
          title: 'Delivered',
          status: 'wait',
          icon: getStatusIcon('wait'),
        },
      ]}
    />
  );
};

export default OrderAccept;
