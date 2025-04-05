import React from 'react';

const Chapter2 = () => {
  return (
    <div>
      <header>
        <h1>REST and RESTful</h1>
      </header>

      <div className="REST-RESTful-explanation">
        REST stands for “Representational State Transfer.” A REST API is like a set of rules for how computers should ask each other for information – kind of like the rules for playing a board game. If an API follows those rules properly, we call it RESTful. So, REST is the rulebook, and a RESTful API is like someone playing the game the right way.
      </div>

      <div className="Pros-container">
        <div className="Pros">Why are RESTful APIs helpful?</div>
        <ul>
          <li>They follow clear rules, so developers know exactly how to build and fix them.</li>
          <li>They make it easier to get information from websites because everything works in a similar way.</li>
          <li>They can save time by remembering some information (like saving your spot in a video game).</li>
          <li>They can share information in different ways, like using JSON (which looks like organized lists) or XML (which looks like a recipe with tags).</li>
        </ul>
      </div>

      <div className="Cons-container">
        <div className="Cons">What is tricky about RESTful APIs?</div>
        <ul>
          <li>They aren’t always the best choice for really complicated tasks.</li>
          <li>They can be hard to set up when the data is super messy or confusing.</li>
          <li>Sometimes they’re slower when handling huge amounts of information.</li>
        </ul>
      </div>

      <div className="Conclusion">
        In short, RESTful APIs are like organized players following the board game rules — they keep things neat and simple, but they might struggle if the game gets too tricky.
      </div>
    </div>
  );
};

export default Chapter2;
