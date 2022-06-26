// server/index.js
const express = require('express');
const path = require('path');

const PORT = 8200;

const app = express();
console.log("Current directory:", path.resolve(__dirname, 'build'));

app.use(express.static(path.resolve(__dirname, 'build'), {
  maxAge: '365d',
}));

app.listen(PORT);

console.log(`Listening on: http://localhost:${PORT}`);