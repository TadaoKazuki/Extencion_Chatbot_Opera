import { handleChatbotRequest } from 'api.js';
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "generate_response") {
    handleChatbotRequest(request.input).then(function(output) {
      sendResponse({ output: output });
    });
    return true;
  }
});