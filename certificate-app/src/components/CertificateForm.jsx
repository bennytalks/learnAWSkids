import React, { useState } from 'react';
import axios from 'axios';
import './CertificateForm.css';


const CertificateForm = ({ getAverageScore }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const score = getAverageScore(); // pull in average from parent

    try {
      const res = await axios.post('https://lbmqw3ji7e.execute-api.us-east-2.amazonaws.com/prod/CertificateKids', {
        name,
        score,
      });
      const { certificateUrl } = res.data;
      window.open(certificateUrl, '_blank');
    } catch (err) {
      console.error('Error generating certificate:', err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="certificate-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Download Certificate'}
      </button>
    </form>
  );
};

export default CertificateForm;
