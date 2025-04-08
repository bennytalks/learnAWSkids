import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CertificateForm from './components/CertificateForm.jsx';
import ChapterButtonBar from './components/ChapterButtonbar.jsx';

import Chapter1 from './components/chapter1.jsx';
import Chapter2 from './components/Chapter2.jsx';
import Chapter3 from './components/Chapter3.jsx';
import Chapter4 from './components/chapter4.jsx';
import Home from './components/homesplash.jsx';
import './App.css';
import './components/chapter1.css';
import './components/chapter3.css'; 
import Congrats from './components/Congrats.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [quizScores, setQuizScores] = useState({
    chapter1: null,
    chapter2: null,
    chapter3: null,
    chapter4: null,
  });

  const handleQuizScore = (chapter, score) => {
    setQuizScores(prev => {
      const updated = { ...prev, [chapter]: score };
  
      // check if all chapters have been completed
      const allDone = Object.values(updated).every(s => s !== null);
      if (allDone) {
        navigate("/congrats");
      }
  
      return updated;
    });
  };

  const getAverageScore = () => {
    const scores = Object.values(quizScores);
    const completed = scores.filter(s => s !== null);
    const total = completed.reduce((a, b) => a + b, 0);
    const average = completed.length > 0 ? total / completed.length : 0;
    return average.toFixed(2);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ChapterButtonBar />
        <Routes>
          <Route path="/homesplash" element={<Home />} />
          <Route path="/chapter1" element={<Chapter1 onScore={(score) => handleQuizScore("chapter1", score)} />} />
          <Route path="/chapter2" element={<Chapter2 onScore={(score) => handleQuizScore("chapter2", score)} />} />
          <Route path="/chapter3" element={<Chapter3 onScore={(score) => handleQuizScore("chapter3", score)} />} />
          <Route path="/chapter4" element={<Chapter4 onScore={(score) => handleQuizScore("chapter4", score)} />} />
          <Route path="/CertificateForm" element={<CertificateForm getAverageScore={getAverageScore} />} />
          <Route path="/congrats" element={<Congrats />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
