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

  fs.writeFile('message.json', jsonData, (err) => {
    if(err) {
      console.error('error has occured while saving files.')
    } else {
      console.log('data has successfully saved.')
    }
  });
}

app.post('/submit', (req, res) => {
  const userMessage = req.body.messageText;

  // read the existing JSON file and add data to a array
  fs.readFile('message.json', 'utf8', (err, data) => {
    if (err) {
      console.error('An error has occured while loading files.')
      return;
    }

    let messages = JSON.parse(data);

    // add new messages to the array
    messages.push({ message: userMessage, timestamp: new Date() });

    // save data to the JSON file
    saveToJSON(messages);
  })


  res.json({ message: 'message has successfully delivered'});
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});