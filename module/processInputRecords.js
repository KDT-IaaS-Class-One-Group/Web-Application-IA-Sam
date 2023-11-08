module.exports = (data) => {
  let jsonData = JSON.parse(data);
  let timestamp = new Date().toLocaleTimeString();

  jsonData.mainContent.inputRecords.push({ 
    type: 'user', 
    message: userMessage,
    timestamp: timestamp
  });
}