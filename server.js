const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Email:', email);
  console.log('Password:', password);

  res.json({ message: 'Login received!' });
});

// Dynamic port (important for Railway)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});