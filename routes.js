const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post('/submit', (req, res) => {
  const userMessage = req.body.data;
  console.log(userMessage)

  // read the existing JSON file and add data to a array
  fs.readFile('message.json', 'utf8', (err, data) => {
    if (err) {
      console.error('An error has occured while loading files.')
      return;
    }

    let jsonData = JSON.parse(data);
    let timestamp = new Date().toLocaleTimeString();

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

module.exports = {
  JsonDataSave: router.post("/submit")
};