import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styled from "styled-components"
import { useState } from "react";
import { login } from "../redux/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
    margin: 0;
    font-family: 'Poppins',sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('https://img.freepik.com/premium-photo/beautiful-landscape-with-mountains-lake-generative-ai_751108-3474.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700092800&semt=ais') no-repeat;
    background-size: cover;
    background-position: center;
`
const Agreement = styled.span`
  font-size: 9px;
  margin: 20px 0px;
`;
const Buttons = styled.button`
 width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    font-size: 16px;
    cursor: pointer;
    color: #333;
    font-weight: 700;


  &:hover {
    background: transparent;
    color:#fff;
  }
  &:disabled{
    color: blue;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;
const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const { isFetching, error } = useSelector((state) => state.user);

const handleClick = (e) => {
   e.preventDefault();
   login(dispatch, { username, password });
 };
  return (
    <>
    <Container>
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required="true" 
           onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required="true" 
          onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox' />Remember me</label>
          <a href="/forgotpassword">Forgot Password?</a>
        </div>
        <Buttons className='buttons' type='submit' onClick={handleClick} disabled={isFetching}>Login</Buttons>
        {error && <Error>Something went wrong...</Error>}
        <div className="register-link">
          <p>Don't have an account?<a href='/signup'> Register</a></p>
          <Agreement>
             By creating an account, I consent to the processing of my personal data in accordance with the{" "}  
                       <a href="/terms">
               <b>PRIVACY POLICY</b>
             </a>
           </Agreement> 
        </div>
      </form>
    </div>
    </Container>
    </>
  )
}

export default Login;