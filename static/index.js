// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const message = document.getElementById('message');
  const mainDiv = document.getElementById('main');
  const hamburgerButton = document.querySelector('.button');
  const sidebar = document.querySelector('.sidebar');

  // create li tags with textcontents
  messageForm.addEventListener("submit", () => {


    const messageText = message.value;
    if (messageText) {
      // create li tag to display the message
      const messageLi = document.createElement("li");
      const messageLiTwo = document.createElement("li");

      messageLi.textContent = '❓: ' + messageText;
      messageLiTwo.textContent = `🤖: Sorry, I can't help with the "${messageText}". `
      // appendChild to the main div
      mainDiv.appendChild(messageLi);
      mainDiv.appendChild(messageLiTwo)

    }
  })
  hamburgerButton.addEventListener('click', () => {
    if (sidebar.style.width === '100px') {
      sidebar.style.width = '0';
    } else { 
      sidebar.style.width = '100px';
    }
  })
})