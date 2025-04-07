import React from 'react';
import '../css/ChapterButtonBar.css';
import { useNavigate } from 'react-router-dom';

const ChapterButtonBar = () => {
  const navigate = useNavigate();

  return (
    <div className="chapter-bar">
      <div> Hi, welcome! Please choose a chapter</div>
      <button onClick={() => navigate('/Chapter1')} className="chapter-button">
        Chapter 1
      </button>
      <button onClick={() => navigate('/Chapter2')} className="chapter-button">
        Chapter 2
      </button>
      <button onClick={() => navigate('/Chapter3')} className="chapter-button">
        Chapter 3
      </button>
    </div>
  );
};

export default ChapterButtonBar;