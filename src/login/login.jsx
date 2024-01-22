import React, { useState } from 'react'
import "./login.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styled from "styled-components"
import {useDispatch , useSelector} from "react-redux"
import login from '../redux/ApiCallsAdmin';

const Container = styled.div`
    margin: 0;
    font-family: 'Poppins',sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dgbefau-df7b71cd-0867-43b4-856a-78bc54770334.png/v1/fill/w_1280,h_718,q_80,strp/wallpaper_series___beautiful_landscape_by_elffyie_dgbefau-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmODAyMTUwLTY2ZWEtNDNjYy04ZjViLWEwY2ViMjQzNTBlYVwvZGdiZWZhdS1kZjdiNzFjZC0wODY3LTQzYjQtODU2YS03OGJjNTQ3NzAzMzQucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xZjgwMjE1MC02NmVhLTQzY2MtOGY1Yi1hMGNlYjI0MzUwZWFcL2VsZmZ5aWUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.RwEtF1YF7hRMvvQJFZImQW7h69ug2vk8wkcQw7hq19w') no-repeat;
    background-size: cover;
    background-position: center;
`

const LoginAdmin = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("");
const dispatch = useDispatch();
  const handleClick = (e) =>{
    e.preventDefault();  
    login(dispatch,{username,password});
  }

  return (
    <>
    <Container>
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required="true" onChange={e=>setUsername(e.target.value)} />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required="true" onChange={e=>setPassword(e.target.value)}/>
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox' />Remember me</label>
          <a href="/forgotpassword">Forgot Password?</a>
        </div>
        <button type='submit' onClick={handleClick} >Login</button>
        <div className="register-link">
          <p>Don't have an account?<a href='/register'> Register</a></p>
        </div>
      </form>
    </div>
    </Container>
    </>
  )
}

export default LoginAdmin;