async function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value;
  input.value = "";

  const response = await fetch("http://localhost:3004/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  });

  const data = await response.json();

  displayMessage("You: " + message);
  displayMessage("Cyra: " + data.response || "No response from bot.");
}

function displayMessage(message) {
  const messageContainer = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.appendChild(messageElement);
}
