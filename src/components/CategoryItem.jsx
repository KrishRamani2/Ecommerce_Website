import { Button } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Add any other global styles here */

  @media (min-width: 600px) {
    /* Add responsive styles for smaller screens */
    ResponsiveImage {
      display: block;
      max-width: 100%;
      height: auto;
      
    }
  }
`;

const Container = styled.div`
flex: 1; 
margin: 3px;
 height: 50vh;
  position: relative; 
  &:hover{ 
    transform: scale(1.05); 
    box-shadow: rgb(0 0 0 / 80%) 
    0px 40px 58px -16px, rgb(0 0 0 / 72%)
     0px 30px 22px -10px;
     border-color: rgba(249, 249, 249, 0.8);
      }
      transition:all 0.5s ease;
      cursor:pointer;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h3`
  margin-left: -20px;
  display: flex;
  flex-direction: column;
  margin-bottom: -14px;
  color:white;
`;

const Buttons = styled.div`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 60;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:25px;
  padding-top: 10px;
  &:hover{
    background: transparent;
    color:white;
    transform: scale(1);
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 450px; /* Set a fixed height for all images */
  object-fit: cover;
  filter: brightness(1.1) contrast(1.1);
  @media screen and (max-width: 450px) {
    height:30vh;
    flex-direction: column;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Link to={`/products/${item.cat}`}>
        <ResponsiveImage src={item.img} alt={item.title} />
        <Info>
          <Title>{item.title}</Title>
          <Buttons>SHOP NOW</Buttons>
        </Info>
        </Link>
      </Container>
    </>
  );
};

export default CategoryItem;
