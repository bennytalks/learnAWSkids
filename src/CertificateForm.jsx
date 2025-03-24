// CertificateForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CertificateForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await axios.post('https://2d54bas8cj.execute-api.us-east-2.amazonaws.com/CertificateKids', {
      name,
      score,
    });

    const { certificateUrl } = response.data;
    window.open(certificateUrl, '_blank');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />
      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Download Certificate'}
      </button>
    </form>
  );
};

export default CertificateForm;