// Importa el módulo node-fetch para hacer solicitudes HTTP en Node.js
const fetch = require('node-fetch');

// Tu clave de API de OpenAI
const apiKey = 'Your API key';

// Función para manejar las solicitudes POST a la API de OpenAI
async function handleOpenAIRequest(request, response) {
  console.log("Input received: ", request.body.input);

  const input = request.body.input;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };
  const body = JSON.stringify({
    prompt: input,
    temperature: 0.7,
    max_tokens: 100
  });
  const openaiResponse = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', { method: 'POST', headers, body });
  const data = await openaiResponse.json();

  console.log("OpenAI response: ", data);

  response.json({ output: data.choices[0].text });
}

// Función para manejar las solicitudes POST al Chatbot
async function handleChatbotRequest(input) {
  const body = JSON.stringify({
    input: input
  });
  const chatbotResponse = await fetch('Chatbot.php', { method: 'POST', body });
  const data = await chatbotResponse.json();
  return data.output;
}

module.exports = { handleOpenAIRequest, handleChatbotRequest };