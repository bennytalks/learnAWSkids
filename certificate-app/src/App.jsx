import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CertificateForm from './components/CertificateForm.jsx';
import ChapterButtonBar from './components/ChapterButtonbar.jsx';

import Chapter1 from './components/chapter1.jsx';
import Chapter2 from './components/Chapter2.jsx';
import Chapter3 from './components/Chapter3.jsx';


function App() {
  return (
    <div className="App">
      <div>
      <h1>Links to the chapters</h1>
      <ChapterButtonBar />
      <Routes>
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
      </Routes>
      </div>
      <h1>Certificate Generator</h1>
      <CertificateForm />
    </div>
  );
}

export default App;