// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const message = document.getElementById('message');
  const mainDiv = document.getElementById('main');

  // function dealing with POST request
  async function postData() {
    const messageText = message.value;
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: messageText}), //send message via JSON
      });

      if (response.ok) {
        const data = await response.json(); // parse res data from the server
        console.log(data.message);
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // create li tags with textcontents
  messageForm.addEventListener("submit", () => {

    const messageText = message.value;
    if (messageText) {
      // create li tag to display the message
      const messageLi = document.createElement("li");
      messageLi.textContent = messageText;

      // appendChild to the main div
      mainDiv.appendChild(messageLi);

      // Clear the input field after the message is sent
    }
    
    postData(); // send POST request
  })
})