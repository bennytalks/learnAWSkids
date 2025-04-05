import React, { useState } from 'react';
import axios from 'axios';

const CertificateForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={score} onChange={(e) => setScore(e.target.value)} placeholder="Score" />
      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Download Certificate'}
      </button>
    </form>
  );
};

export default CertificateForm;