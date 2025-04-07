import React from 'react';
import Quiz from './Quiz';
import './Quiz.css';
import './chapter1.css';

const chapter1Questions = [
   {
    question: "What does API stand for?",
    choices: [
      "Amazing Pizza Inventor",
      "Application Programming Interface",
      "Animal Picture Internet"
    ],
    correctIndex: 1,
  },
  {
    question: "What is an API similar to?",
    choices: [
      "A waiter bringing your order from the kitchen",
      "A cat jumping",
      "A teacher giving out candy"
    ],
    correctIndex: 0,
  },
  {
    question: "If you searched for “good books to read,” what does the API do?",
    choices: [
      "Starts reading a book to you",
      "Finds popular books and returns a list of them to you",
      "Asks you to write your own book"
    ],
    correctIndex: 1,
  },
  {
    question: "Where does the API get information from?",
    choices: [
      "A book",
      "A teacher",
      "A server containing information"
    ],
    correctIndex: 2,
  }
];

const Chapter1 = ({ onScore }) => {
  const handleQuizFinish = (score) => {
    console.log("Chapter 1 score:", score);
    if (onScore) onScore(score);
  };

  return (
    <div>
      <header></header>
      <div className='containerWeb'>
        <div className='API-container'>
        <div className="API-explanation">
          API stands for “Application Programming Interface.”
        </div>
  
        <div className="API-explanation">
         
          <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/waiter.png" alt="waiter" className="Waiter-image" /></div>
          An API is like a waiter at a restaurant. Imagine you're sitting at a table, and you tell the waiter, "I want a pizza."
        </div>
  
        <div className="API-explanation">
        <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/menu.png" alt="People looking at menu" className="Menu-image" /></div>
          <div>The waiter goes to the kitchen (where the food is made) and tells the chef what you want. When the pizza is ready, the waiter brings it back to your table.</div>
          
        </div>
  
        <div className="API-explanation">
          An API works the same way! If you type "cat pictures" on your computer, the API takes your request (like the waiter), asks a computer server (like the kitchen) for cat pictures, and then brings those pictures back to you.
          <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/catcomputer.jpg" alt="cat" className="Cat-image" /></div>
        </div>
  
        <div className="API-explanation">
          It's like magic, but with computers!
          <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/pizza.png" alt="Pizza" className="Pizza-image" /></div>
        </div>
      </div>
      <Quiz questions={chapter1Questions} onQuizFinish={handleQuizFinish} />
      </div>
      <div>
        </div>
        
      </div>
    
  );
};

export default Chapter1;

