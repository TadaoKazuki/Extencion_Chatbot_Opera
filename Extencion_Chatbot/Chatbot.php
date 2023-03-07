<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Chatbot Extension</title>
  </head>
  <body>
    <h1>Chatbot Extension</h1>
    <form>
      <input type="text" id="user-input" placeholder="Type your message...">
      <button type="submit">Send</button>
    </form>
	<h4>Beta</h4>
    <div id="chatbot-response"></div>

    <script>
      // Define la función para llamar a la API de OpenAI
      async function getChatbotResponse(input) {
        // Realiza una solicitud POST a la ruta "/openai" con un objeto JSON en el cuerpo de la solicitud
        const response = await fetch('/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input })
        });

        // Espera la respuesta y la convierte en un objeto JSON
        const data = await response.json();

        // Retorna la respuesta del chatbot
        return data.output;
      }

      // Maneja el envío del formulario
      const form = document.querySelector('form');
      form.addEventListener('submit', async event => {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;

        // Llama a la función getChatbotResponse y espera la respuesta
        const chatbotResponse = await getChatbotResponse(userInput);

        // Muestra la respuesta en la página y borra el campo de entrada
        document.getElementById('chatbot-response').innerText = chatbotResponse;
        document.getElementById('user-input').value = '';
      });
    </script>
  </body>
</html>
