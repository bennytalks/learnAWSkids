import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CertificateForm from './components/CertificateForm.jsx';
import ChapterButtonBar from './components/ChapterButtonbar.jsx';

import Chapter1 from './components/chapter1.jsx';
import Chapter2 from './components/Chapter2.jsx';
import Chapter3 from './components/Chapter3.jsx';
import './App.css';

function App() {
  const [quizScores, setQuizScores] = useState({
    chapter1: null,
    chapter2: null,
    chapter3: null,
  });

  const handleQuizScore = (chapter, score) => {
    setQuizScores(prev => ({ ...prev, [chapter]: score }));
  };

  const getAverageScore = () => {
    const scores = Object.values(quizScores).map(s => s ?? 0);
    const average = scores.reduce((a, b) => a + b, 0) / 3;
    return average.toFixed(2);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ChapterButtonBar />
        <Routes>
          <Route path="/chapter1" element={<Chapter1 onScore={(score) => handleQuizScore("chapter1", score)} />} />
          <Route path="/chapter2" element={<Chapter2 onScore={(score) => handleQuizScore("chapter2", score)} />} />
          <Route path="/chapter3" element={<Chapter3 onScore={(score) => handleQuizScore("chapter3", score)} />} />
        </Routes>
      </div>
      <h1>Certificate Generator</h1>
      <CertificateForm getAverageScore={getAverageScore} />
    </div>
  );
}

export default App;
