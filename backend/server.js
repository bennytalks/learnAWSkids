// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for React frontend on localhost
app.use(cors({
  origin: 'http://localhost:3000', // React's local address
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.get('/api/chapter1', (req, res) => {
  res.json({ title: 'Chapter 1', content: 'What is an API...' });
});

app.get('/api/chapter2', (req, res) => {
  res.json({ title: 'Chapter 2', content: 'Apps info...' });
});

app.get('/api/chapter3', (req, res) => {
  res.json({ title: 'Chapter 3', content: 'Cloud overview...' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
