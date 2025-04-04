import React from 'react';
import Quiz from './Quiz';
import './Quiz.css';


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
    <div>
      <h1>Chapter 1 Content</h1>
      <Quiz questions={chapter1Questions} onFinish={handleQuizFinish} />
    </div>
  );
};

export default Chapter1;