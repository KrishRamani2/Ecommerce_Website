import React from 'react';
import { Link } from "react-router-dom";

const SuccessfulPaymentPage = () => {
  const handleDownloadInvoice = () => {
    // In a real application, you might want to generate the invoice
    // on the server side and provide a link to download it.
    // For simplicity, we'll just simulate a downloadable invoice here.

    // Replace this with your actual server endpoint for invoice generation.
    const invoiceUrl = '/api/generate-invoice';

    // Simulate a download link click
    const downloadLink = document.createElement('a');
    downloadLink.href = invoiceUrl;
    downloadLink.download = 'invoice.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Successful</h2>
      <p style={styles.text}>Your order has been successfully processed.</p>
      <p style={styles.text}>Thank you for shopping with us!</p>

      <div style={styles.invoiceContainer}>
        <p style={styles.text}>Download Invoice:</p>
        <button onClick={handleDownloadInvoice} style={styles.downloadButton}>
          Download
        </button>
        <Link to="/" style={styles.link}>Back to Home</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Purple gradient background
    minHeight: '100vh', // Set minimum height to fill the viewport
    color: 'black', // Text color
  },
  heading: {
    fontSize: '2.5rem', // Larger font size
    marginBottom: '1rem', // Space below the heading
    textAlign: 'center', // Center align the heading
  },
  text: {
    fontSize: '1.2rem', // Medium font size
    marginBottom: '0.5rem', // Space below the text
    textAlign: 'center', // Center align the text
  },
  invoiceContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', // Box shadow for depth
    width: '80%',
    maxWidth: '400px',
    marginTop: '20px',
  },
  downloadButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '12px 20px', // Larger padding for button
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.2rem', // Medium font size
    width: '100%',
    marginTop: '1rem', // Space above the button
    transition: 'background-color 0.3s ease', // Smooth background color transition on hover
  },
  link: {
    color: '#4caf50', // Green link color
    textDecoration: 'none', // Remove underline from the link
    fontSize: '1.2rem', // Medium font size
    textAlign: 'center', // Center align the link
    display: 'block', // Make link a block element for full width
    marginTop: '1rem', // Space above the link
    transition: 'color 0.3s ease', // Smooth color transition on hover
  },
};

export default SuccessfulPaymentPage;