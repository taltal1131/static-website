const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ Backend is running! Use /api/hello for the API.');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
// test trigger
