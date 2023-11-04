// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('messageForm');
  const text = document.getElementById('text');
  const submit = document.getElementById('submit');

  // create li tags with textcontents
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from restarting and actually submitting webpage 

    const messageText = text.value;
    console.log(messageText)
  })
})