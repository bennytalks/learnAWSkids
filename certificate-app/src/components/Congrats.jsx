import React from 'react';
import { Link } from 'react-router-dom';
import './Congrats.css';

const Congrats = () => {
  return (
    <div className="congrats-container">
      <h1>🎉 Congratulations! 🎉</h1>
      <img
        src="https://awskidsimages.s3.us-east-2.amazonaws.com/158891087_10507060.jpg"
        alt="celebrating"
        className="congrats-image"
      />
      <p>
        You’ve completed all 4 chapters and learned so much about the cloud, APIs, apps, and more!
      </p>
      <p>Now it’s time to get your official AWS Kids Certificate of Completion!</p>
      <Link to="/CertificateForm">
        <button className="congrats-button">Get Your Certificate</button>
      </Link>
    </div>
  );
};

export default Congrats;
