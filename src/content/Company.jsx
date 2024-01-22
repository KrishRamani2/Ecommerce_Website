
import React from 'react';
import styled from 'styled-components';
import { FaApple } from "react-icons/fa";
const CompanyLogo = () => {
  return (
    <>
    <h2 style={{textAlign:"center",color:"grey",marginTop:"70px",fontSize:"55px"}}>Top Brands</h2>
    <Container>
      <Containers>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuhWEupGoegY2CY96N5SgXIsBC9qLOhZ9WQtUAk8y8fdQaVVc9vrY_liEBCm6082VqG8&usqp=CAU" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenrx2NDH1_-oQzkVZfMbxd8BxtcNchmZuiQ&usqp=CAU" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6Ltcgwt7lXu2lhnofYBGKY68eflOaeQbd1-4vvNHJeKGdS1AxVnnt5-FatCnDpwKmj4&usqp=CAU" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://mbluxury1.s3.amazonaws.com/2022/02/25172616/chanel-1.jpg" alt="" />
        </Wrap>
      </Containers>
    </Container>
    </>
  );
}

export default CompanyLogo;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const Containers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
  max-width: 1200px; /* Adjust as needed */
  width: 100%;
`;

const Wrap = styled.div`
  overflow: hidden;
  cursor: pointer;
  
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
              rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
 
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode: color-burn;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;
