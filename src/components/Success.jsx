import React from 'react';

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
      <h2>Payment Successful</h2>
      <p>Your order has been successfully processed.</p>
      <p>Thank you for shopping with us!</p>

      <div style={styles.invoiceContainer}>
        <p>Download Invoice:</p>
        <button onClick={handleDownloadInvoice} style={styles.downloadButton}>
          Download
        </button>
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
    alignItems: 'center',
  },
  invoiceContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '400px',
    marginTop: '20px',
  },
  downloadButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
  },
};

export default SuccessfulPaymentPage;
