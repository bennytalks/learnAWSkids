import React from 'react';
import './chapter4.css'; // Reuse Chapter 1 styles
import Quiz from './Quiz';
import './Quiz.css';

const chapter4Questions = [
  {
    question: "What is a private cloud?",
    choices: [
      "A public space where everyone can share things",
      "A safe place where only you or your family can store things",
      "A place where only businesses can store their stuff"
    ],
    correctIndex: 1,
  },
  {
    question: "What is a public cloud?",
    choices: [
      "A place where you can store things, but only you can see them",
      "A big, open place where everyone can share and use things",
      "A cloud that only stores pictures"
    ],
    correctIndex: 1,
  },
  {
    question: "Which of these is an example of a public cloud?",
    choices: [
      "Google Photos",
      "Netflix",
      "YouTube"
    ],
    correctIndex: 2,
  },
  {
    question: "What does a hybrid cloud do?",
    choices: [
      "It only uses one type of cloud for everything",
      "It mixes both private and public clouds together",
      "It’s only used for storing videos"
    ],
    correctIndex: 1,
  },
  {
    question: "What is one example of a service that uses a private cloud?",
    choices: [
      "Netflix",
      "Email",
      "YouTube"
    ],
    correctIndex: 1,
  }
];

const Chapter4 = ({ onScore }) => {
  const handleQuizFinish = (score) => {
    console.log("Chapter 4 score:", score);
    if (onScore) onScore(score);
    navigate("/congrats");
  };

  return (
    <div className="containerWeb">
      <div className="API-container">
      <div className="API4-explanation">
          The Cloud
        </div>
        <div className="API4-explanation">
          Let’s imagine the cloud like a huge, magical library in the sky.
          When you have something important like pictures, videos, or games, instead of keeping them in your room (on your computer),
          you can send them up to the cloud. You can always get them back whenever you want, just by using the internet!
        </div>

        <div className="API4-explanation">
          <strong>AWS (Amazon Web Services)</strong> is like a super-powered cloud library.
          It helps people store things, run programs, and even make websites and apps. AWS keeps everything safe and easy to reach.
        </div>

        <div className="API4-explanation">
          <strong>To use the cloud, we need three things:</strong>
          <ul>
            <li><strong>Client:</strong> This is like you, using your phone or computer to ask the cloud for something.</li>
            <li><strong>Network:</strong> This is the road (the internet) that takes your request to the cloud.</li>
            <li><strong>Server:</strong> This is like a librarian who finds what you want and sends it back to you safely.</li>
          </ul>
        </div>

        <div className="API4-explanation">
          <strong>Private Cloud:</strong><br />
          Imagine you have your own special library just for you and your family. It’s more secure and controlled. Only certain people
          can access it.
        </div>

        <div className="API4-explanation">
          <strong>Private Cloud Example:</strong><br />
          Google Photos lets you store family pictures privately. Only people you trust can see them—just like a private cloud.
        </div>

        <div className="API4-explanation">
          <strong>Public Cloud:</strong><br />
          A huge library open to the public. Anyone can upload or access data. It’s shared and easy to use.
        </div>

        <div className="API4-explanation">
          <strong>Public Cloud Example:</strong><br />
          YouTube is a public cloud! Anyone can upload videos and everyone can watch them.
        </div>

        <div className="API4-explanation">
          <strong>Hybrid Cloud:</strong><br />
          Like having your private library at home but borrowing from a public library too. You can keep things private, but also get help when needed.
        </div>

        <div className="API4-explanation">
          <strong>Hybrid Cloud Example:</strong><br />
          Netflix stores movies in a private cloud but uses a public cloud when lots of people watch at once. It’s like having extra toy boxes!
        </div>
      </div>

      <Quiz questions={chapter4Questions} onFinish={handleQuizFinish} />
    </div>
  );
};

export default Chapter4;
