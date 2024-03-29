  // import { Button } from "@mui/material"
  // import styled from "styled-components"

  // const Container = styled.div`
  //     width: 100vw;
// //     height: 100vh;
// //     background:url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7de0b457-9ed0-4c17-9ae6-b1b10afa8943/dfzrwri-bf18cc34-b3e4-47e6-9ed8-ccfac86b3b8f.jpg/v1/fill/w_1280,h_949,q_75,strp/canadian_amazing_landscape_by_ethandavis01_dfzrwri-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQ5IiwicGF0aCI6IlwvZlwvN2RlMGI0NTctOWVkMC00YzE3LTlhZTYtYjFiMTBhZmE4OTQzXC9kZnpyd3JpLWJmMThjYzM0LWIzZTQtNDdlNi05ZWQ4LWNjZmFjODZiM2I4Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eZDNjWfjG1j_TwYJ0MQhEbpDE0bt34QfKnSNRK1wxDM") ;
// //     filter: brightness(1) contrast(1.2);
// //     background-size: cover;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;

// // `
// // const Wrapper = styled.div`
// // width: 40%;
// //     padding: 20px;
// //     background-color: transparent;
// //   background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.1));
// //   @media screen and (max-width:470px) {
// //     width:75%;
// //   }
// // `
// // const Title = styled.div`
// //     font-size: 24px;
// //     font-weight: 300;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// // `
// // const Form = styled.form`
// // display: flex;
// // flex-wrap: wrap;

// // `
// // const Input = styled.input`
// //  flex: 1;
// //   min-width: 40%;
// //   margin: 12px 10px 0px 0px;
// //   padding: 15px; /* Increased padding for a more comfortable look */
// //   border: 2px solid teal;
// //   border-radius: 8px;
// //   background-color: #f5f5f5; /* Light gray background color */
// //   transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

// //   &:focus {
// //     outline: none;
// //     border: 2px solid #00796b;
// //     box-shadow: 0 0 10px rgba(0, 121, 107, 0.5); /* Enhanced box-shadow on focus */
// //   }
// // `
// // const Agreement = styled.span`
// // font-size: 12px;
// // margin: 20px 0px;
// // `
// // const ButtonContainer = styled.div`
// //   width: 100%;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // `;
// // const Buttons = styled.button`
// //   width: 40%;
// //   border: none;
// //   padding: 15px 20px;
// //   background-color: teal;
// //   color: white;
// //   cursor: pointer;
// //   border-radius: 25px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   &:hover {
// //     transform: scale(1.1);
// //     border: 1px solid navy;
// //     background: transparent;
// //     color:navy;
// //   }
// // `
// // const SignUp = () => {
// //   return (
// //     <Container>
// //         <Wrapper>
// //           <Title>CREATE YOUR ACCOUNT</Title>
// //           <Form>
// //             <Input placeholder="First Name" />
// //             <Input placeholder="Last Name" />
// //             <Input placeholder="Username" />
// //             <Input placeholder="john@gmail.com" />
// //             <Input placeholder="password" />
// //             <Input placeholder="confirm password" />
// //             <Agreement>
// //               By creating an account, I consent to the processing of my personal data in accordance with the <a href="/terms"><b>PRIVACY POLICY</b></a>
// //             </Agreement>
// //             <ButtonContainer>
// //             <Buttons>CREATE</Buttons>
// //           </ButtonContainer>
// //           </Form>
// //         </Wrapper>
// //     </Container>
// //   )
// // }

// // export default SignUp
// import React from 'react'
// import "./login.css"
// import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// import { FaAddressBook } from "react-icons/fa";
// import { FaAddressCard } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import styled from "styled-components"
// const Container = styled.div`
//     margin: 0;
//     font-family: 'Poppins',sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dgbefau-df7b71cd-0867-43b4-856a-78bc54770334.png/v1/fill/w_1280,h_718,q_80,strp/wallpaper_series___beautiful_landscape_by_elffyie_dgbefau-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmODAyMTUwLTY2ZWEtNDNjYy04ZjViLWEwY2ViMjQzNTBlYVwvZGdiZWZhdS1kZjdiNzFjZC0wODY3LTQzYjQtODU2YS03OGJjNTQ3NzAzMzQucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xZjgwMjE1MC02NmVhLTQzY2MtOGY1Yi1hMGNlYjI0MzUwZWFcL2VsZmZ5aWUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.RwEtF1YF7hRMvvQJFZImQW7h69ug2vk8wkcQw7hq19w') no-repeat;
//     background-size: cover;
//     background-position: center;
// `
// const SignUp = () => {
//   return (
//     <>
//     <Container>
//     <div className='wrapper'>
//       <form action="">
//         <h1>Register</h1>
//         <form>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="text" placeholder='Username' required="true" />
//           <FaUser className='icon'/>
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required="true" />
//           <FaLock className='icon'/>
//         </div>
//         </form>
//         <button type='submit'>Signup</button>
//       </form>
//     </div>
//     </Container>
//     </>
//   )
// }

// export default SignUp;
 import axios from 'axios';
 import React, { useState } from 'react';
 import { useNavigate } from "react-router-dom";
 import { Button, message, Space } from 'antd';
 const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubscribe = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch('http://localhost:3000/api/auth/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name,email,username,password }),
          });

          if (!response.ok) {
              throw new Error('Failed to register');
          }

          message.success('Registration successful');
          setEmail('');
          setUsername(''); // Clear the email input field
          setPassword('');
          setName('');
          navigate("/login")
      } catch (error) {
          console.error('Error registering:', error.message);
          message.error('User Already exists!!');
          setEmail('');
          setUsername(''); // Clear the email input field
          setPassword('');
          setName('');
      }
  };

   const styles = {
     container: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       height: '100vh',
       background: 'linear-gradient(to bottom right, #f0f2f5, #fff)',
     },
     form: {
       width: '300px',
       padding: '20px',
       borderRadius: '10px',
       boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
       background: 'white',
     },
     input: {
       width: '100%',
       padding: '12px',
       border: 'none',
       borderRadius: '5px',
       marginBottom: '20px',
       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
       boxSizing: 'border-box',
     },
     button: {
       width: '100%',
       padding: '12px',
       backgroundColor: '#007bff',
       color: '#fff',
       border: 'none',
       borderRadius: '5px',
       cursor: 'pointer',
       transition: 'background-color 0.3s ease',
       boxShadow: '0px 0px 10px rgba(0, 123, 255, 0.4)',
     },
     buttonHover: {
       backgroundColor: '#0056b3',
     },
   };

   return (
     <div style={styles.container}>
       <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
         <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Sign Up</h2>
         <div>
           <input
             type="text"
             placeholder="Name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             style={styles.input}
             name="name"
             required
           />
         </div>
         <div>
           <input
             type="email"
             placeholder="Email Address"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             style={styles.input}
             name="email"
             required
           />
         </div>
         <div>
           <input
             type="text"
             placeholder="Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             style={styles.input}
             name="username"
             required
           />
         </div>
         <div>
           <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             style={styles.input}
             name="password"
             required
           />
         </div>
         <button
           type="submit"
           style={{ ...styles.button, ...styles.buttonHover }}
           onClick={handleSubscribe}
           onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
           onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
         >
           Sign Up
         </button>
       </form>
     </div>
   );
 };

 export default Signup;
