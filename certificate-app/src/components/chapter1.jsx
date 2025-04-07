import React from 'react';
import Quiz from './Quiz';
import './Quiz.css';
import './chapter1.css'

const chapter1Questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Paris", "Madrid", "Rome"],
    correctIndex: 1,
  },
  {
    question: "What color is the sky on a clear day?",
    choices: ["Blue", "Green", "Red", "Yellow"],
    correctIndex: 0,
  },
];

const Chapter1 = () => {
  const handleQuizFinish = (score) => {
    console.log("Quiz score:", score);
    // Save score to state, or send to Lambda later
  };

  
  return (
    <body>
  <header>
    <h1>What is an API</h1>
  </header>
  <p className="API-explanation">
    API stands for “Application Programming Interface.” An API is like a waiter at a restaurant.
    Imagine you're sitting at a table, and you tell the waiter, "I want a pizza." 
    The waiter goes to the kitchen (where the food is made) and tells the chef what you want. 
    When the pizza is ready, the waiter brings it back to your table. 
    An API works the same way! 
    If you type "cat pictures" on your computer, the API takes your request (like the waiter), 
    asks a computer server (like the kitchen) for cat pictures, and then brings those pictures back to you. 
    It's like magic, but with computers!
  </p>
  
  <div className="Image-container">
    <img src="imgs/waiter.png" alt="waiter" className="Waiter-image" />
    <img src="imgs/menu.png" alt="People looking at menu" className="Menu-image" />
    <img src="imgs/pizza.png" alt="Pizza" className="Pizza-image" />
  </div>
</body>
  );
};

export default Chapter1;
