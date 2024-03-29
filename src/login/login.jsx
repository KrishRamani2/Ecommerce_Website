import React, { useState } from 'react';
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/Userslice';
import { message } from 'antd';

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
`;

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();  
    try {
      await dispatch(loginSuccess({ username, password }));
      message.success('Login Successful');
      navigate("/adminpage")
      setLoginError("");
    } catch (error) {
      // Login failed
      console.error('Error Login:', error.message);
      message.error('Login Error');
      setLoginError("Login failed. Please check your credentials.");
    }
  }

  return (
    <>
      <Container>
        <div className='wrapper'>
          <form action="">
            <h1>ZENARA SELLER</h1>
            <h1>Login</h1>
            {loginError && <div className="error-message">{loginError}</div>}
            <div className='input-box'>
              <input type="text" placeholder='Username' required={true} onChange={e => setUsername(e.target.value)} />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' required={true} onChange={e => setPassword(e.target.value)} />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label><input type='checkbox' />Remember me</label>
              <Link to='/forgotpassword'>Forgot Password?</Link>
            </div>
            <button type='submit' onClick={handleClick}>Login</button>
            <div className="register-link">
              <p>Don't have an account?<Link to='http://localhost:5173/signup'> Register</Link></p>
            </div>
            <Link to={`http://localhost:5173/`} style={{textDecoration:"none" , color:"#fff"}}>
            <div style={{textAlign:"center"}}>
              Back to Home
            </div>
            </Link>
          </form>
        </div>
      </Container>
    </>
  );
}

export default LoginAdmin;
