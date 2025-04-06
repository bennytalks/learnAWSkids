import React from 'react';

const Chapter3 = () => {
  return (
    <div className="AppInfo">
      <header>
        <h1>Apps</h1>
      </header>

      <div className="section Native-explanation">
        <h3 className="Native-header">Native Apps:</h3>
        These are apps that you download from the App Store or Google Play, like Angry Birds or YouTube...
      </div>

      <div className="section Web-explanation">
        <h3 className="Web-header">Web Apps:</h3>
        These apps you don’t need to download...
      </div>

      <div className="section Hybrid-explanation">
        <h3 className="Hybrid-header">Hybrid Apps:</h3>
        These are like a mix of the other two...
      </div>

      <div className="section Microservices-explanation">
        <h3 className="Microservices-header">Microservices:</h3>
        Imagine you have a big store like Costco...
      </div>

      <div className="section Webhooks-explanation">
        <h3 className="Webhooks-header">Webhooks:</h3>
        A webhook is like when your friend sends you a message...
      </div>
    </div>
  );
};

export default Chapter3;