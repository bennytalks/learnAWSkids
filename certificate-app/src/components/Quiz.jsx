//this is the logic for the quizzes, so dont touch this unless you are experimenting on sending it to the lambda. 


import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ questions, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswer = (choiceIndex) => {
    const updatedAnswers = [...userAnswers, choiceIndex];
    setUserAnswers(updatedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Finish quiz
      const correctAnswers = questions.filter((q, index) => q.correctIndex === updatedAnswers[index]);
      const finalScore = (correctAnswers.length / questions.length) * 100;
      setScore(finalScore);

      if (onFinish) {
        onFinish(finalScore); 
      }
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="quiz-container">
      {score === null ? (
        <>
          <h2>{q.question}</h2>
          <ul>
            {q.choices.map((choice, index) => (
              <div key={index}>
                <button onClick={() => handleAnswer(index)}>{choice}</button>
              </div>
            ))}
          </ul>
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </>
      ) : (
        <div className="quiz-results">
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
