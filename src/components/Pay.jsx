// PaymentPage.jsx

import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from "./logoipsum-299.svg";
import axios from "axios"
const PUBLIC_KEY = "pk_test_51OPdfHSJqp2Eim97slkP7D9StEmIP94k7XFry53Q9sH2PxIxRvnPH4PlC8ahmHkmrEkkVxFFrShOWln6tDLE07bv00uDbzGVNR";

const PaymentPage = () => {
    const [stripeToken,setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(()=>{
    const makeRequest = async () => {
        try {
        const res = await axios.post("http://localhost:5173/api/checkout/payment",{
            tokenId:stripeToken.id,
            amount:200000
        });
        console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    };
    stripeToken && makeRequest();
  },[stripeToken])
  return (
    <div style={styles.body}>
      <div style={styles.paymentContainer}>
        {/* Logo Container */}
        <div style={styles.logoContainer}>
          <img src="https://logowik.com/content/uploads/images/secure-payment2785.jpg" alt="Logo" style={styles.logo} />
        </div>

        {/* Secure Payment Section */}
        <div style={styles.securePayment}>
          <h2>Secure Payment</h2>
          <StripeCheckout
            name="ZENARA"
            img={Logo}
            billingAddress
            shippingAddress
            description="Your total is $2000"
            amount={200000}
            token={onToken}
            stripeKey={PUBLIC_KEY}
          >
            <button type="button" style={styles.payNowButton}>Pay Now</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  paymentContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '400px',
    textAlign: 'center',
    position: 'relative',
  },
  logoContainer: {
    marginBottom: '20px', // Add margin at the bottom to create space
  },
  logo: {
    width: '95px', // Adjust the width as needed
    height: 'auto',
  },
  securePayment: {
    // No specific styles for the Secure Payment section
  },
  payNowButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.3s ease-in-out',
  },
};

export default PaymentPage;
