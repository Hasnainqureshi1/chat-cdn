document.addEventListener('DOMContentLoaded', function() {
    const chatBotContainer = document.getElementById('chat-bot-container');
    const chatBotBtn = document.getElementById('chat-bot-btn-id');
    const closeChat = document.getElementById('close-chat');

    chatBotBtn.addEventListener('click', function() {
        chatBotContainer.style.display = 'flex';
        chatBotBtn.style.display = 'none'; // Hide the button when chat UI is open
    });

    closeChat.addEventListener('click', function() {
        chatBotContainer.style.display = 'none';
        chatBotBtn.style.display = 'flex'; // Show the button when chat UI is closed
    });
});
