const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // port number

// set middleware for using static files
app.use(express.static(path.join(__dirname,'static')));

// set middleware for body parsing from POST request 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'static', 'index.html'));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});