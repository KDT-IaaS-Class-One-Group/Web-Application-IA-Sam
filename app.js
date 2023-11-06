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

app.post('/submit', (req, res) => {
  const userMessage = req.body.message;
  console.log(userMessage)

  // read the existing JSON file and add data to a array
  fs.readFile('message.json', 'utf8', (err, data) => {
    if (err) {
      console.error('An error has occured while loading files.')
      return;
    }

    let jsonData = JSON.parse(data);
    let timestamp = new Date().toLocaleDateString();

    // add new messages to the array
    jsonData.mainContent.inputRecords.push({ 
      type: 'user', 
      message: userMessage,
      timestamp: timestamp
    });

    // save updated data to the JSON file
    fs.writeFile("message.json", JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('An error has occured while saving files.')
        return res.status(500).send('Server error')
      } else {
        console.log('data has successfully saved.')
      }
    });
  })


  res.json({ message: 'message has successfully delivered'});
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});