 const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Generate a random number
const randomUserId = Math.floor(Math.random() * 1000);

// Create the userId by combining "czavishek" and the random number
const userId = `czavishek${randomUserId}`;

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        sendMessage(userId, message);
        messageInput.value = '';
    }
});

function sendMessage(userId, message) {
    // Simulated sending the message to other users (you would use WebSocket in a real app)
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<strong>User ${userId}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
}
