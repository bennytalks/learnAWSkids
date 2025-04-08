import React from 'react';
import './ChapterButtonBar.css';
import { useNavigate } from 'react-router-dom';

const ChapterButtonBar = () => {
  const navigate = useNavigate();

  return (
    <div className='chapterbarcontainer'>
    <div className="chapter-bar">
      
      <button onClick={() => navigate('/homesplash')} className="chapter-button">
        Home
      </button>
      <button onClick={() => navigate('/Chapter1')} className="chapter-button">
        Chapter 1
      </button>
      <button onClick={() => navigate('/Chapter2')} className="chapter-button">
        Chapter 2
      </button>
      <button onClick={() => navigate('/Chapter3')} className="chapter-button">
        Chapter 3
      </button>
      <button onClick={() => navigate('/Chapter4')} className="chapter-button">
        Chapter 4
      </button>
      <button onClick={() => navigate('/CertificateForm')} className="chapter-button">
        Certificate
      </button>
    </div>
    </div>
  );
};

export default ChapterButtonBar;