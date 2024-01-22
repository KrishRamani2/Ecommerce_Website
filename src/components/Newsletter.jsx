import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size:70px;
margin-bottom: 20px;

`
const Description = styled.div`
font-size: 24px;
font-weight: 300px;
margin-bottom: 20px;
@media screen and (max-width: 470px) {
    text-align: center;
  }
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:1px solid lightgrey;
@media screen and (max-width: 470px) {
    width: 80%;
  }
`
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;

`
const Button = styled.button`
flex:1;
boder:none;
background-color: teal;
color:white;
border-radius: 9px;
color:white;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
        <Input placeholder="Your Email"/>
        <Button className="btn-primary"><SendIcon /></Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter