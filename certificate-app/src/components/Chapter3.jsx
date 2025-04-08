import React from 'react';
import './chapter3.css'; 
import Quiz from './Quiz';
import './Quiz.css';

const chapter3Questions = [
  {
    question: "What is a Native App?",
    choices: [
      "An app that you can only use on the internet",
      "An app that you download and use on your phone or tablet",
      "An app that doesn't need to be downloaded"
    ],
    correctIndex: 1,
  },
  {
    question: "Which of these is a characteristic of a Web App?",
    choices: [
      "You have to download it to your phone",
      "You can use it through a website on the internet",
      "It works without an internet connection"
    ],
    correctIndex: 1,
  },
  {
    question: "What is the main feature of a Hybrid App?",
    choices: [
      "It works only on a phone and not on the internet",
      "It can be downloaded like a Native App but also works like a Web App",
      "It is only for games"
    ],
    correctIndex: 1,
  },
  {
    question: "What are Microservices?",
    choices: [
      "A way to make everything run in one big program",
      "Small jobs that work together to make things faster and better",
      "A type of video game"
    ],
    correctIndex: 1,
  },
  {
    question: "What does a Webhook do?",
    choices: [
      "It sends a message when something happens, like a notification",
      "It makes websites look nice",
      "It stores photos and videos"
    ],
    correctIndex: 0,
  }
];

const Chapter3 = ({ onScore }) => {
  const handleQuizFinish = (score) => {
    console.log("Chapter 3 score:", score);
    if (onScore) onScore(score);
  };

  return (
    <div className="containerWeb">
      <div className="API-container">
      <div className="API-explanation">
          <strong>Types of Apps</strong><br />
        </div>
        <div className="API3-explanation">
          <strong>Native Apps:</strong><br />
          These are apps that you download from the App Store or Google Play, like Angry Birds or YouTube.
          They are made just for one kind of phone, like an iPhone or a Samsung phone.
          They work very fast and can do cool things, like using the camera or playing sound.
        </div>

        <div className="API3-explanation">
          <strong>Web Apps:</strong><br />
          These apps you don’t need to download. You can use them on the internet, like YouTube.com or Google.
          They work on any device, like your phone, tablet, or computer, as long as you have an internet connection.
          You just go to the website, and you can start using it!
        </div>

        <div className="API3-explanation">
          <strong>Hybrid Apps:</strong><br />
          These are like a mix of the other two. They can be downloaded like a Native App, but they also work on the internet like a Web App.
          It's like having the best of both worlds!
        </div>

        <div className="API3-explanation">
          <strong>Microservices:</strong><br />
          Imagine you have a big store like Costco, but instead of having one person do everything,
          you have different people for different jobs — like one person for the food section,
          another for electronics, and another for checkout. Each person is really good at their job,
          and they work together to make the store awesome. Microservices are like that — they break big tasks into smaller,
          special jobs that work together, making everything run faster and better.
        </div>

        <div className="API3-explanation">
          <strong>Webhooks:</strong><br />
          A webhook is like when your friend sends you a message whenever something happens.
          For example, you tell your friend, “Let me know when the cake is ready!” And when it’s done,
          your friend sends you a message. In the same way, webhooks send messages between apps or websites when something happens.
          So, if something changes, one app will send a message to another to let it know — without you having to ask!
        </div>
      </div>

      <Quiz questions={chapter3Questions} onFinish={handleQuizFinish} />
    </div>
  );
};

export default Chapter3;
