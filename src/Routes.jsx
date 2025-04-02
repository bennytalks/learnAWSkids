import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <Link to="/chapter1" style={styles.button}>What is an API</Link>
      <Link to="/chapter2" style={styles.button}>APPS</Link>
      <Link to="/chapter3" style={styles.button}>The Cloud</Link>
    </div>
  );
}

function Chapter1() {
  return <h1 style={styles.page}>Chapter 1: What is an API</h1>;
}

function Chapter2() {
  return <h1 style={styles.page}>Chapter 2: APPS</h1>;
}

function Chapter3() {
  return <h1 style={styles.page}>Chapter 3: The Cloud</h1>;
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
  },
  button: {
    fontSize: '24px',
    padding: '20px 40px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: '0.3s',
  },
  page: {
    textAlign: 'center',
    marginTop: '20%',
    fontSize: '32px',
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
      </Routes>
    </Router>
  );
}

export default Routes;