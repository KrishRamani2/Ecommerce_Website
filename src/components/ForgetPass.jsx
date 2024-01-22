// ForgotPassword.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    if (verificationCode === '123456') {
      setVerificationSuccess(true);
    }
  }, [verificationCode]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendVerification = (e) => {
    e.preventDefault();
    // Simulating sending a verification email (replace with actual logic)
    setTimeout(() => {
      setVerificationSent(true);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the password reset process
    console.log(`Email submitted: ${email}`);
    console.log(`Verification Code submitted: ${verificationCode}`);
    // Add your password reset logic here (e.g., comparing the verification code)
  };

  return (
    <Container>
      <FormContainer>
        {!verificationSuccess ? (
          <Form>
            <FormTitle>Forgot Password</FormTitle>
            {!verificationSent ? (
              <>
                <InputLabel>Email</InputLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <SendVerificationButton onClick={handleSendVerification}>
                  Send Verification Code
                </SendVerificationButton>
              </>
            ) : (
              <>
                <InputLabel>Verification Code</InputLabel>
                <Input
                  type="text"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  required
                />
                <SubmitButton onClick={handleSubmit}>Reset Password</SubmitButton>
              </>
            )}
          </Form>
        ) : (
          <SuccessMessage>Password reset successful!</SuccessMessage>
        )}
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const SendVerificationButton = styled.button`
  background: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

const SubmitButton = styled.button`
  background: #27ae60;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #218c54;
  }
`;

const SuccessMessage = styled.p`
  color: #27ae60;
  text-align: center;
  font-weight: bold;
`;

export default ForgotPassword;
