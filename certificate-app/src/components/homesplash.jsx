import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: for styling

const Home = () => {
  return (
    <div className="home-container">
        <div className='rowhome'>
      <h1>Welcome to AWS Kids!</h1>

      <img
        src="https://awskidsimages.s3.us-east-2.amazonaws.com/51418285_9327109.jpg"
        alt="Welcome to AWS Learning"
        className="home-image"
      />
</div>
      <div className="home-directions">
        <p>
          Get ready to explore the cloud, APIs, apps, and more! Each chapter includes fun explanations and a short quiz.
          Click the button below to start your adventure 🚀
        </p>
      

      <Link to="/chapter1">
        <button className="home-button">Start Learning</button>
      </Link>
    </div></div>
  );
};

export default Home;