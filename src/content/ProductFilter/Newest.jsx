import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 10px;
  margin: 16px;
  background: transparent;
  border: 0.6px solid #ccc;
  border-radius: 5px;
  color: #323232;
  cursor: pointer;
`;

const Newest = () => {


  return (
    <>
      <div style={{ marginTop: '-10px', fontSize: '20px' }}>
        Newest<br />
        Collection  <br />
        <Button className='star-button'  >
          Click Here
        </Button>
      </div>
    </>
  );
};

export default Newest;
