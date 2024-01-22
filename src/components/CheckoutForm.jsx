// CheckoutForm.jsx

import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ onToken }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      onToken(token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" style={styles.payNowButton}>
        Pay Now
      </button>
    </form>
  );
};

const styles = {
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

export default CheckoutForm;
