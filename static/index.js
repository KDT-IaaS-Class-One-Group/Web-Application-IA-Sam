// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const message = document.getElementById('message');
  const mainDiv = document.getElementById('main');

  // create li tags with textcontents
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from restarting and actually submitting webpage 

    const messageText = message.value;
    if (messageText) {
      // create li tag to display the message
      const messageLi = document.createElement("li");
      messageLi.textContent = messageText;

      // appendChild to the main div
      mainDiv.appendChild(messageLi);

      // Clear the input field after the message is sent
      message.value = "";
    }
  })
})