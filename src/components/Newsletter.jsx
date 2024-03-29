// import React from 'react'
// import SendIcon from '@mui/icons-material/Send';
// import styled from 'styled-components';
// const Container = styled.div`
// height: 60vh;
// background-color: #fcf5f5;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// `
// const Title = styled.h1`
// font-size:70px;
// margin-bottom: 20px;
// `
// const Description = styled.div`
// font-size: 24px;
// font-weight: 300px;
// margin-bottom: 20px;
// @media screen and (max-width: 470px) {
//     text-align: center;
//   }
// `
// const InputContainer = styled.div`
// width: 50%;
// height: 40px;
// background-color: white;
// display: flex;
// justify-content: space-between;
// border:1px solid lightgrey;
// @media screen and (max-width: 470px) {
//     width: 80%;
//   }
// `
// const Input = styled.input`
// border:none;
// flex:8;
// padding-left: 20px;

// `
// const Button = styled.button`
// flex:1;
// boder:none;
// background-color: teal;
// color:white;
// border-radius: 9px;
// color:white;
// `
// const Newsletter = () => {
//   return (
//     <Container>
//         <Title>Newsletter</Title>
//         <Description>Get timely updates from your favorite products.</Description>
//         <InputContainer>
//         <Input placeholder="Your Email"/>
//         <Button className="btn-primary"><SendIcon /></Button>
//         </InputContainer>
//     </Container>
//   )
// }

// export default Newsletter
import React, { useState } from 'react';
import { Button, message, Space } from 'antd';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/mail/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe');
            }

            message.success('Subscription successful');
            setEmail(''); // Clear the email input field
        } catch (error) {
            console.error('Error subscribing:', error.message);
            message.error('Email Already exists!!');
            setEmail('');
        }
    };

    return (
        <section className="py-28 relative">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
                <div className="flex-1 max-w-lg">
                    <h3 className="text-3xl font-bold">
                        Get our beautiful newsletter straight to your inbox.
                    </h3>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                    <form onSubmit={handleSubscribe} className="flex items-center gap-x-3 md:justify-end">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <Space>
                            <button type="submit" className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                                Subscribe
                            </button>
                        </Space>
                    </form>
                </div>
            </div>
            <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)" }}></div>
        </section>
    );
};

export default Newsletter;
