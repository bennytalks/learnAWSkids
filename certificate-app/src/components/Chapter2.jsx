import React from 'react';
import Quiz from './Quiz';
import './Quiz.css';
import './chapter2.css';

const chapter2Questions = [
  {
    question: "What does REST stand for?",
    choices: [
      "Really Exciting Super Technology",
      "Robot Elephant Super Trainer",
      "Representational State Transfer"
    ],
    correctIndex: 2,
  },
  {
    question: "What is a RESTful API?",
    choices: [
      "An API that only works with robots",
      "A fancy way to order pizza online",
      "An API that follows REST rules"
    ],
    correctIndex: 2,
  },
  {
    question: "Why are RESTful APIs helpful?",
    choices: [
      "They follow clear rules that make building and fixing them easier",
      "They can bake cookies on demand",
      "They make computers sing songs"
    ],
    correctIndex: 0,
  },
  {
    question: "What’s one challenge with RESTful APIs?",
    choices: [
      "They always forget your name",
      "They can be slower with lots of data",
      "They only work during the daytime"
    ],
    correctIndex: 1,
  }
];

const Chapter2 = ({ onScore }) => {
  const handleQuizFinish = (score) => {
    console.log("Chapter 2 score:", score);
    if (onScore) onScore(score);
  };

  return (
    <div className='containerWeb'>
      <div className='API2-container'>
        <div className="API2-explanation">
          REST stands for “Representational State Transfer.”
        </div>

        <div className="API2-explanation">
          <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/ruleBook.png" alt="Rulebook" className="Rulebook-image" /></div>
          A REST API is like a set of rules for how computers should ask each other for information – kind of like the rules for playing a board game.
        </div>

        <div className="API2-explanation">
          If an API follows those rules properly, we call it RESTful. So, REST is the rulebook, and a RESTful API is like someone playing the game the right way.
          <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/cardGame.png" alt="Card game" className="Card-game-image" /></div>
          <b>POST</b> is like placing a card from the deck in the game, <br></br><b>GET</b> is like picking up a card from the deck,<br></br> <b>PUT</b> is like putting a card down from your hand,<br></br><b>DELETE</b> is like throwing a card away!
        </div>

        <div className="API2-explanation">
          RESTful APIs are helpful because they follow clear rules, so developers know exactly how to build and fix them. Imagine playing a game without a rule book!
          <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/playingBoardGame.png" alt="Board game" className="Board-game-image" /></div>
        </div>

        <div className="API2-explanation">
         They can be tricky — they aren’t always great for really complicated tasks, or when handling huge amounts of messy data. When you have lots of data, you need to organize it! the rule book only helps when the game pieces are all there and neatly placed so the next player can find them.
        </div>

        <div className="API2-explanation">
          <div className='breaktext'>In short, RESTful APIs are like organized players following board game rules — neat and simple, but maybe not great when things get really wild.</div>
        <div><img src="https://awskidsimages.s3.us-east-2.amazonaws.com/I+win.jpg" alt="Board game" className="Board-game-image" /></div> </div>
      </div>

      <Quiz questions={chapter2Questions} onFinish={handleQuizFinish} />
    </div>
  );
};

export default Chapter2;
