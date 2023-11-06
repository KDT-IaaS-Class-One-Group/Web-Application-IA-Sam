const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs') // file system module
const app = express();
const port = 3000; // port number

// set middleware for using static files
app.use('/static', express.static(path.join(__dirname,'static')));

// set middleware for body parsing from POST request 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'static', 'index.html'));
});

// function saveToJSON
function saveToJSON(data) {
  const jsonData = JSON.stringify(data);

  fs.writeFile('messages.json', jsonData, (err) => {
    if(err) {
      console.error('error has occured while saving files.')
    } else {
      console.lof('data has successfully saved.')
    }
  });
}

app.post('/submit', (req, res) => {
  const userMessage = req.body.message;

  res.json({ message: 'message has successfully delivered'});
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});