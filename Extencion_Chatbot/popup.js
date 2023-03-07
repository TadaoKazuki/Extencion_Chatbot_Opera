document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const userInput = document.getElementById('user-input').value;
  chrome.runtime.sendMessage({ message: "generate_response", input: userInput }, function(response) {
    document.getElementById('chatbot-response').innerText = response;
    document.getElementById('user-input').value = '';
  });
});
