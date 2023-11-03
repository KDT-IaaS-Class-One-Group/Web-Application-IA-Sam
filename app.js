const express = require('express');
const app = express();
const port = 3000; // port number

// set middleware for using static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});