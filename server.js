const express = require('express');
const app = express();
const path = require('path');
const words = ['apple', 'berry', 'cherry', 'dates', 'elder']; // Example word list

app.use(express.static(path.join(__dirname, 'public')));

app.get('/word', (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json({ word: randomWord });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 