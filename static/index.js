// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const message = document.getElementById('message');
  const mainDiv = document.getElementById('main');

  // create li tags with textcontents
  messageForm.addEventListener("submit", () => {


    const messageText = message.value;
    if (messageText) {
      // create li tag to display the message
      const messageLi = document.createElement("li");
      const messageLiTwo = document.createElement("li");

      messageLi.textContent = messageText;
      messageLiTwo.textContent = `Sorry, I can't help with the "${messageText}". `
      // appendChild to the main div
      mainDiv.appendChild(messageLi);
      mainDiv.appendChild(messageLiTwo)

    }
  })
})