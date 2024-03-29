// import React from 'react'
// import "./login.css"
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import styled from "styled-components"
// import { useState } from "react";
// import { login } from "../redux/ApiCalls";
// import { useDispatch, useSelector } from "react-redux";
// const Container = styled.div`
//     margin: 0;
//     font-family: 'Poppins',sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background: url('https://img.freepik.com/premium-photo/beautiful-landscape-with-mountains-lake-generative-ai_751108-3474.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700092800&semt=ais') no-repeat;
//     background-size: cover;
//     background-position: center;
// `
// const Agreement = styled.span`
//   font-size: 9px;
//   margin: 20px 0px;
// `;
// const Buttons = styled.button`
//  width: 100%;
//     height: 45px;
//     background: #fff;
//     border: none;
//     border-radius: 40px;
//     box-shadow: 0 0 10px rgba(0,0,0,0.1);
//     font-size: 16px;
//     cursor: pointer;
//     color: #333;
//     font-weight: 700;


//   &:hover {
//     background: transparent;
//     color:#fff;
//   }
//   &:disabled{
//     color: blue;
//     cursor: not-allowed;
//   }
// `;
// const Error = styled.span`
//   color: red;
// `;
// const Login = () => {
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const dispatch = useDispatch();
// const { isFetching, error } = useSelector((state) => state.user);

// const handleClick = (e) => {
//    e.preventDefault();
//    login(dispatch, { username, password });
//  };
//   return (
//     <>
//     <Container>
//     <div className='wrapper'>
//       <form action="">
//         <h1>Login</h1>
//         <div className='input-box'>
//           <input type="text" placeholder='Username' required="true" 
//            onChange={(e) => setUsername(e.target.value)}
//           />
//           <FaUser className='icon' style={{marginLeft:"5px"}}/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" 
//           onChange={(e) => setPassword(e.target.value)}
//           />
//           <FaLock className='icon' style={{marginLeft:"5px"}}/>
//         </div>

//         <div className="remember-forgot">
//           <label><input type='checkbox' />Remember me</label>
//           <a href="/forgotpassword">Forgot Password?</a>
//         </div>
//         <Buttons className='buttons' type='submit' onClick={handleClick} disabled={isFetching}>Login</Buttons>
//         {error && <Error>Something went wrong...</Error>}
//         <div className="register-link">
//           <p>Don't have an account?<a href='/signup'> Register</a></p>
//           <Agreement>
//              By creating an account, I consent to the processing of my personal data in accordance with the{" "}  
//                        <a href="/terms">
//                <b>PRIVACY POLICY</b>
//              </a>
//            </Agreement> 
//         </div>
//       </form>
//     </div>
//     </Container>
//     </>
//   )
// }

// export default Login;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { loginSuccess as reduxLoginSuccess } from "../redux/UserRedux";
import {logingate} from "../redux/ApiCalls"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Dispatch login action
      e.preventDefault();
      logingate(dispatch, { username, password });
      message.success('Login Successful');
      navigate("/");
    } catch (error) {
      console.error('Error Login:', error.message);
      message.error('Login Error');
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          ZENARA
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="font-medium">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            disabled={isFetching}
          >
            Sign in
          </button>
        </form>
        <p className="text-center">Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
      </div>
    </main>
  );
};

export default Login;
