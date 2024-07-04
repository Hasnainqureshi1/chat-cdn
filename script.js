document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        chatContainer.innerHTML = `
            <div class="chat-box">
                <div class="chat-header">Chat</div>
                <div class="chat-body"></div>
                <div class="chat-footer">
                    <input type="text" class="chat-input" placeholder="Type a message...">
                    <button class="chat-send">Send</button>
                </div>
            </div>
        `;

        // Add event listener for send button
        const sendButton = chatContainer.querySelector('.chat-send');
        sendButton.addEventListener('click', function() {
            const input = chatContainer.querySelector('.chat-input');
            const message = input.value.trim();
            if (message) {
                const chatBody = chatContainer.querySelector('.chat-body');
                const messageElement = document.createElement('div');
                messageElement.className = 'chat-message';
                messageElement.textContent = message;
                chatBody.appendChild(messageElement);
                input.value = '';
            }
        });
    }
});
